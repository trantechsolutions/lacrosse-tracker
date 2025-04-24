// stores/scoreboard.js
import { defineStore } from 'pinia';
import { ref, onMounted, onUnmounted, reactive, watch } from 'vue';
import { db } from '@/firebase';
import { ref as dbRef, onValue, update, push, set, remove } from 'firebase/database';
import Swal from 'sweetalert2';
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from "@/firebase";  // Import Firebase auth
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const authenticated = ref(null);
  const router = useRouter();
  const allowedEmails = ['jonny5v@gmail.com'];

  const loginWithGoogle = async () => {
    await Swal.fire({
      title: 'Sign in with Google',
      html: `
        <button id="google-login-btn" class="swal2-confirm swal2-styled" style="background-color: #4285F4;">
          <img src="https://developers.google.com/identity/images/g-logo.png" style="width:20px; margin-right:8px;">
          Continue with Google
        </button>
      `,
      showConfirmButton: false,
      didOpen: () => {
        const loginBtn = document.getElementById('google-login-btn');
        loginBtn.addEventListener('click', async () => {
          const provider = new GoogleAuthProvider();
          try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            if (!allowedEmails.includes(user.email)) {
              await signOut(auth);
              await Swal.fire({
                icon: 'error',
                title: 'Access Denied',
                text: 'You are not authorized to access this application.',
              });
              return;
            }

            authenticated.value = user;
            await Swal.fire({
              icon: 'success',
              title: `Welcome, ${user.displayName}!`,
              timer: 1500,
              showConfirmButton: false,
            });

            router.push('/control');
          } catch (error) {
            console.error("Google sign-in error:", error);
            Swal.fire({
              icon: 'error',
              title: 'Sign-in Failed',
              text: error.message,
            });
          }
        });
      }
    });
  };

  const logout = async () => {
    try {
      await signOut(auth);
      authenticated.value = null;
      await Swal.fire({
        icon: 'info',
        title: 'Logged Out',
        text: 'You have been logged out.',
        timer: 1500,
        showConfirmButton: false,
      });
      router.push('/');
    } catch (error) {
      console.error("Logout error:", error);
      Swal.fire({
        icon: 'error',
        title: 'Logout Failed',
        text: error.message,
      });
    }
  };


  return {
    authenticated,
    loginWithGoogle,
    logout
  };
});


export const useScoreboardStore = defineStore('scoreboard', () => {
  const score = ref({ home: 0, away: 0 });
  const timeouts = ref({ home: 2, away: 2 });
  const quarter = ref(1);
  const gameClock = ref(720); // seconds
  const shotClock = ref(80); // seconds
  const isClockRunning = ref(false);
  const home = ref('Home');
  const away = ref('Away');
  const playerStats = ref([]);
  const activePenalties = ref([]);
  const expiredPenalties = ref([]);
  const clockInterval = ref(null);
  const newPenalty = ref({
    team: "home",
    player: "",
    duration: 30,
    category: "crosscheck",
    releasable: true,
  });
  const newPlayerStat = ref({ player: "", team: "home", type: "goal" });
  let unsubscribe = null;

  // store user information
  const user = ref(null);  // Will hold the authenticated user
  const isAllowed = ref(false);  // Flag to track if the user is allowed
  const allowedEmails = ref(["jonny5v@gmail.com"]); // List of allowed emails
  const isPublicView = ref(false);
  const autenticated = ref(null);

  const localPenalty = reactive({ ...newPenalty.value });
  const localPlayerStat = reactive({ ...newPlayerStat.value })

  watch()

  watch(
    () => newPenalty.value, val => Object.assign(localPenalty, val),
    () => newPlayerStat.value, val => Object.assign(localPlayerStat, val)
  );

  function toggleClocks() {
    if (isClockRunning.value) {
      console.log("Stopping clocks");
      clearInterval(clockInterval.value);
      clockInterval.value = null;
      isClockRunning.value = false;
      updateFirebase();
      return;
    }

    // 🛑 Don't start if either clock is already 0
    if (gameClock.value === 0 || shotClock.value === 0) {
      console.log("Clocks not started — one or both clocks are at 0");
      return;
    }

    console.log("Starting clocks");
    clockInterval.value = setInterval(() => {
      let shouldStop = false;

      if (shotClock.value > 0) {
        shotClock.value--;
        if (shotClock.value === 0) shouldStop = true;
      }

      if (gameClock.value > 0) {
        gameClock.value--;
        if (gameClock.value === 0) shouldStop = true;
      }

      checkPenalties();
      updateFirebase();

      if (shouldStop) {
        clearInterval(clockInterval.value);
        clockInterval.value = null;
        isClockRunning.value = false;
        console.log("Clocks stopped because one hit zero");
        updateFirebase();
      }
    }, 1000);

    isClockRunning.value = true;
    updateFirebase();
  }

  function addPenalty(object) {
    const p = { ...object };
    p.startGameClock = gameClock.value;
    p.remaining = p.duration;
    p.endGameClock = gameClock.value - p.duration;
    p.quarter = quarter.value;
    activePenalties.value.push(p);
    newPenalty.value = {
      team: "home",
      player: "",
      duration: 30,
      category: "crosscheck",
      releasable: true,
    };
    updateFirebase();
  }

  function updateTeamName(type) {
    const currentName = type === "home" ? home.value : away.value;

    Swal.fire({
      title: `Set ${type === "home" ? "Home" : "Away"} Team Name`,
      input: "text",
      inputLabel: "Team Name",
      inputValue: currentName,
      showCancelButton: true,
      confirmButtonText: "Save",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (!value) {
          return "Team name cannot be empty!";
        }
      },
    }).then((result) => {
      const name = result.value;

      if (name !== undefined) {
        if (type === "home") home.value = name;
        else away.value = name;

        updateFirebase();

        Swal.fire({
          toast: true,
          position: 'bottom',
          title: "Updated!",
          text: `${type === "home" ? "Home" : "Away"} team name changed to "${name}"`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
          timerProgressBar: true,
        });
      }
    });
  }

  function updateClock(type) {
    const currentValue = type === "game" ? gameClock.value : shotClock.value;

    Swal.fire({
      title: `Set ${type === "game" ? "Game" : "Shot"} Clock`,
      input: "number",
      inputLabel: "Time in seconds",
      inputValue: currentValue,
      inputAttributes: {
        min: 0,
        step: 1,
      },
      showCancelButton: true,
      confirmButtonText: "Set",
      cancelButtonText: "Cancel",
      inputValidator: (value) => {
        if (value === "") {
          return "You must enter a value!";
        }
        const parsed = parseInt(value);
        if (isNaN(parsed) || parsed < 0) {
          return "Please enter a valid non-negative number.";
        }
      },
    }).then((result) => {
      const input = result.value;
      const parsedValue = parseInt(input);

      if (!isNaN(parsedValue)) {
        if (type === "gameClock") gameClock.value = parsedValue;
        else shotClock.value = parsedValue;

        updateFirebase()

        Swal.fire({
          toast: true,
          position: "bottom",
          title: "Clock Updated",
          text: `${type === "game" ? "Game" : "Shot"} clock set to ${parsedValue} seconds.`,
          icon: "success",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  }

  function incrementScore(team) {
    console.log(`${team} scores`)
    score.value[team]++;
    updateFirebase();
  }

  function decrementScore(team) {
    if (score.value[team] > 0) score.value[team]--;
    updateFirebase();
  }

  function incrementQuarter() {
    quarter.value++;
    updateFirebase();
  }

  function decrementQuarter() {
    if (quarter.value > 0) quarter.value--;
    updateFirebase();
  }

  function incrementTimeouts(team) {
    timeouts.value[team]++;
    updateFirebase();
  }

  function decrementTimeouts(team) {
    if (timeouts.value[team] > 0) timeouts.value[team]--;
    updateFirebase();
  }

  //#region Clock Functions

  function resetGameClock() {
    gameClock.value = 720;
    isClockRunning.value = false;
    updateFirebase();
  }

  function resetShotClock() {
    shotClock.value = 80;
    updateFirebase();
  }

  //#endregion

  //#region Penalty Functions

  function addPenalty(penalty) {
    const p = { ...penalty };
    p.startGameClock = gameClock.value;
    p.remaining = p.duration;
    p.endGameClock = gameClock.value - p.duration;
    p.quarter = quarter.value;
    activePenalties.value.push(p);
    newPenalty.value = {
      team: "home",
      player: "",
      duration: 30,
      category: "crosscheck",
      releasable: true,
    };
    updateFirebase();
  }

  function removePenalty(team, index) {
    // Filter penalties by team
    const teamPenalties = activePenalties.value.filter(penalty => penalty.team === team);

    // Make sure the index is valid for the filtered penalties array
    if (index < 0 || index >= teamPenalties.length) {
      Swal.fire({
        title: "Error",
        text: "Invalid index for the selected team.",
        icon: "error",
        showConfirmButton: true,
      });
      return; // Exit function if the index is invalid
    }

    // Find the penalty from the filtered penalties array using the given index
    const penalty = teamPenalties[index];

    Swal.fire({
      title: "Remove Penalty?",
      html: `
      <strong>Player:</strong> ${penalty.player}<br>
      <strong>Team:</strong> ${penalty.team}<br>
      <strong>Duration:</strong> ${penalty.duration} sec
    `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        // Get the actual index of the penalty in the original array (activePenalties)
        const originalIndex = activePenalties.value.findIndex(
          (p) => p.player === penalty.player && p.team === penalty.team && p.duration === penalty.duration
        );

        // Remove the penalty from the original array
        const removed = activePenalties.value.splice(originalIndex, 1)[0];
        removed.endGameClock = gameClock.value
        expiredPenalties.value.push(removed); // Push it to expired penalties
        updateFirebase();

        Swal.fire({
          toast: true,
          position: "bottom",
          title: "Removed",
          text: "The penalty has been moved to expired.",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  }

  function checkPenalties() {
    const remaining = [];
    for (const p of activePenalties.value) {
      p.remaining--;
      if (p.remaining <= 0) expiredPenalties.value.push({ ...p });
      else remaining.push(p);
    }
    activePenalties.value = remaining;
    updateFirebase();
  }

  function clearExpiredPenalties() {
    Swal.fire({
      title: "Clear All Expired Penalties?",
      text: "This will permanently remove all expired penalties from the list.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear them",
      cancelButtonText: "Cancel",
    }).then((result) => {

      if (result.isConfirmed) {
        expiredPenalties.value = [];
        updateFirebase();

        Swal.fire({
          toast: true,
          position: "bottom",
          title: "Cleared",
          text: "Expired penalties have been removed.",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  }
  //#endregion

  function addPlayerStat(stat) {
    const playerStat = { ...stat, gameClock: gameClock.value, quarter: quarter.value }; // or bring gameClock/quarter from Firebase
    playerStats.value.push(playerStat);
    updateFirebase();
  }

  // Remove a single player stat without waiting for confirmation
  function removePlayerStat(index) {
    const playerStat = playerStats.value[index];
    Swal.fire({
      title: "Remove Player Stat?",
      html: `
        <strong>Player:</strong> ${playerStat.player}<br>
        <strong>Type:</strong> ${playerStat.type}<br>
        <strong>Quarter:</strong> ${playerStat.quarter}<br>
      `,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, remove it",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        playerStats.value.splice(index, 1);
        updateFirebase();
        Swal.fire({
          title: "Removed",
          text: "Player stat has been removed.",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  }

  // Clear all player stats without waiting for confirmation
  function clearPlayerStat() {
    Swal.fire({
      title: "Clear All Player Stats?",
      text: "This will permanently remove all player statistics.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, clear them",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        playerStats.value = [];
        updateFirebase();
        Swal.fire({
          toast: true,
          position: "bottom",
          title: "Cleared",
          text: "All player stats have been removed.",
          icon: "success",
          timer: 1200,
          showConfirmButton: false,
        });
      }
    });
  }

  function newGame() {
    Swal.fire({
      title: 'Start a New Game?',
      text: 'This will archive the current game and reset the scoreboard.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, start new game!',
    }).then((result) => {
      if (!result.isConfirmed) return;

      const timestamp = new Date().toISOString();

      // Step 1: Archive current scoreboard under /games/
      const archiveRef = dbRef(db, `/games`);
      const newGameRef = push(archiveRef); // auto-generates a key

      set(newGameRef, {
        archivedAt: timestamp,
        data: {
          score: score.value,
          timeouts: timeouts.value,
          gameClock: gameClock.value,
          shotClock: shotClock.value,
          isClockRunning: isClockRunning.value,
          quarter: quarter.value,
          home: home.value,
          away: away.value,
          playerStats: playerStats.value,
          activePenalties: activePenalties.value,
          expiredPenalties: expiredPenalties.value,
        },
      });

      // Step 2: Reset current game state
      score.value = { home: 0, away: 0 };
      timeouts.value = { home: 2, away: 2 };
      gameClock.value = 720;
      shotClock.value = 80;
      isClockRunning.value = false;
      quarter.value = 1;
      home.value = "Home";
      away.value = "Away";
      playerStats.value = [];
      activePenalties.value = [];
      expiredPenalties.value = [];

      // Clear any running interval
      if (clockInterval.value) {
        clearInterval(clockInterval.value);
        clockInterval.value = null;
      }

      updateFirebase();

      Swal.fire({
        title: 'New Game Started!',
        icon: 'success',
        timer: 1500,
        showConfirmButton: false,
      });
    });
  }

  function exportData() {
    const data = {
      score: score.value,
      playerStats: playerStats.value,
      home: home.value,
      away: away.value,
      activePenalties: activePenalties.value,
      expirePenalties: expiredPenalties.value,
      playerStats: playerStats.value,
    };
    const jsonData = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonData], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "game_data.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  function updateFirebase() {
    const scoreboardRef = dbRef(db, "/scoreboard");
    update(scoreboardRef, {
      score: score.value,
      timeouts: timeouts.value,
      gameClock: gameClock.value,
      shotClock: shotClock.value,
      isClockRunning: isClockRunning.value,
      quarter: quarter.value,
      home: home.value,
      away: away.value,
      playerStats: JSON.stringify(playerStats.value),
      activePenalties: JSON.stringify(activePenalties.value),
      expiredPenalties: JSON.stringify(expiredPenalties.value),
    });
  }

  function startListening() {
    const scoreboardRef = dbRef(db, "/scoreboard");
    unsubscribe = onValue(scoreboardRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        score.value = data.score || { home: 0, away: 0 };
        timeouts.value = data.timeouts || { home: 2, away: 2 };
        gameClock.value = data.gameClock ?? 720;
        shotClock.value = data.shotClock ?? 80;
        isClockRunning.value = data.isClockRunning ?? false;
        quarter.value = data.quarter ?? 1;
        home.value = data.home ?? "Home";
        away.value = data.away ?? "Away";
        playerStats.value = JSON.parse(data.playerStats || "[]");
        activePenalties.value = JSON.parse(data.activePenalties || "[]");
        expiredPenalties.value = JSON.parse(data.expiredPenalties || "[]");
      }
    });
  }

  function stopListening() {
    if (unsubscribe) unsubscribe(); // Firebase `onValue` returns a detach function
    if (clockInterval.value) {
      clearInterval(clockInterval.value);
      clockInterval.value = null;
    }
  }

  // Function to open the SweetAlert2 modal with the penalty form
  function openPenaltyForm() {
    Swal.fire({
      title: 'Add Penalty',
      html: `
      <div class="row g-2">
        <div class="col-4">
          <label>Player</label>
          <input id="player" class="form-control form-control-sm" type="text" placeholder="Player #" value="${localPenalty.player}" />
        </div>
        <div class="col-6 offset-2">
          <label>Releasable</label>
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-success active" id="yesBtn">Yes</button>
            <button class="btn btn-outline-success" id="noBtn">No</button>
          </div>
        </div>
        <div class="col-6">
          <label>Team</label>
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-primary active" id="homeBtn">Home</button>
            <button class="btn btn-outline-primary" id="awayBtn">Away</button>
          </div>
        </div>
        <div class="col-6">
          <label>Duration</label>
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-danger active" id="30sBtn">30s</button>
            <button class="btn btn-outline-danger" id="1minBtn">1:00</button>
            <button class="btn btn-outline-danger" id="2minBtn">2:00</button>
          </div>
        </div>
        <div class="col-12">
          <label>Penalty Category</label>
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-dark active" id="crosscheckBtn">Crosscheck</button>
            <button class="btn btn-outline-dark" id="slashBtn">Slash</button>
            <button class="btn btn-outline-dark" id="tripBtn">Trip</button>
            <button class="btn btn-outline-dark" id="roughnessBtn">Unnecessary Roughness</button>
            <button class="btn btn-outline-dark" id="otherBtn">Other</button>
          </div>
        </div>
      </div>
    `,
      showCancelButton: true,
      confirmButtonText: 'Add Penalty',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const player = document.getElementById("player").value;
        const releasable = localPenalty.releasable
        const team = localPenalty.team;
        const duration = localPenalty.duration;
        const category = localPenalty.category;

        // Check if the player already has an active penalty
        const activePenalty = activePenalties.value.find((penalty) => penalty.player === player);
        if (activePenalty) {
          Swal.showValidationMessage("This player already has an active penalty.");
          return false;
        }

        if (!player) {
          Swal.showValidationMessage("Player # is required");
          return false;
        }

        return { player, releasable, team, duration, category };
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Emit the new penalty to the parent component
        addPenalty({
          ...result.value,
          startGameClock: gameClock.value,
          endGameClock: gameClock.value - result.value.duration
        });
      }
    });

    // Add event listeners for buttons inside the SweetAlert2 popup
    setTimeout(() => {
      // Handle team selection
      document.getElementById("yesBtn").addEventListener("click", () => {
        localPenalty.releasable = true;
        updateActiveButtons("yesBtn", "noBtn");
      });
      document.getElementById("noBtn").addEventListener("click", () => {
        localPenalty.releasable = false;
        updateActiveButtons("noBtn", "yesBtn");
      });

      // Handle team selection
      document.getElementById("homeBtn").addEventListener("click", () => {
        localPenalty.team = "home";
        updateActiveButtons("homeBtn", "awayBtn");
      });
      document.getElementById("awayBtn").addEventListener("click", () => {
        localPenalty.team = "away";
        updateActiveButtons("awayBtn", "homeBtn");
      });

      // Handle duration selection
      document.getElementById("30sBtn").addEventListener("click", () => {
        localPenalty.duration = 30;
        updateActiveButtons("30sBtn", "1minBtn", "2minBtn");
      });
      document.getElementById("1minBtn").addEventListener("click", () => {
        localPenalty.duration = 60;
        updateActiveButtons("1minBtn", "30sBtn", "2minBtn");
      });
      document.getElementById("2minBtn").addEventListener("click", () => {
        localPenalty.duration = 120;
        updateActiveButtons("2minBtn", "30sBtn", "1minBtn");
      });

      // Handle penalty category selection
      document.getElementById("crosscheckBtn").addEventListener("click", () => {
        localPenalty.category = "crosscheck";
        updateActiveButtons("crosscheckBtn", "slashBtn", "tripBtn", "roughnessBtn", "otherBtn");
      });
      document.getElementById("slashBtn").addEventListener("click", () => {
        localPenalty.category = "slash";
        updateActiveButtons("slashBtn", "crosscheckBtn", "tripBtn", "roughnessBtn", "otherBtn");
      });
      document.getElementById("tripBtn").addEventListener("click", () => {
        localPenalty.category = "trip";
        updateActiveButtons("tripBtn", "crosscheckBtn", "slashBtn", "roughnessBtn", "otherBtn");
      });
      document.getElementById("roughnessBtn").addEventListener("click", () => {
        localPenalty.category = "unnecessaryroughness";
        updateActiveButtons("roughnessBtn", "crosscheckBtn", "slashBtn", "tripBtn", "otherBtn");
      });
      document.getElementById("otherBtn").addEventListener("click", () => {
        localPenalty.category = "other";
        updateActiveButtons("otherBtn", "crosscheckBtn", "slashBtn", "tripBtn", "roughnessBtn");
      });
    }, 100);
  };



  function openAddPlayerStatForm() {
    Swal.fire({
      title: 'Add Player Stat',
      html: `
        <div class="row g-2">
          <div class="col-4">
            <label>Player</label>
            <input id="player" class="form-control form-control-sm" v-model="local.player" placeholder="Player #" />
          </div>
          <div class="col-6 offset-2">
            <label>Team</label>
            <div class="btn-group btn-group-sm w-100">
              <button class="btn btn-outline-primary active" id="homeBtn">Home</button>
            <button class="btn btn-outline-primary" id="awayBtn">Away</button>
            </div>
          </div>
          <div class="col-12">
            <label>Category</label>
            <div class="btn-group btn-group-sm w-100">
              <button class="btn btn-outline-success active" id="goalBtn">Goal</button>
              <button class="btn btn-outline-success" id="assistBtn">Assist</button>
              <button class="btn btn-outline-success" id="shotBtn">Shot</button>
              <button class="btn btn-outline-success" id="shotOnBtn">Shot On</button>
            </div>
          </div>
          <div class="col-12">
            <div class="btn-group btn-group-sm w-100">
              <button class="btn btn-outline-dark" id="gbBtn">Ground Ball</button>
              <button class="btn btn-outline-dark" id="causedTOBtn">Caused TO</button>
              <button class="btn btn-outline-dark" id="saveBtn">Save</button>
              <button class="btn btn-outline-dark" id="faceOffBtn">Face Off</button>
              <button class="btn btn-outline-dark" id="faceOffWinBtn">FO Win</button>
            </div>
          </div>
        </div>
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Add Stat',
      cancelButtonText: 'Cancel',
      preConfirm: () => {
        const player = document.getElementById("player").value;
        if (!player) {
          Swal.showValidationMessage("Player # is required");
          return false;
        }
        return {
          player: player,
          team: localPlayerStat.team,
          type: localPlayerStat.type,
        }
      }
    }).then((result) => {
      if (result.isConfirmed) {
        // Emit the new penalty to the parent component
        addPlayerStat({
          ...result.value,
        });
      }
    })

    // Add event listeners for buttons inside the SweetAlert2 popup
    setTimeout(() => {
      // Handle team selection
      document.getElementById("homeBtn").addEventListener("click", () => {
        localPlayerStat.team = "home";
        updateActiveButtons("homeBtn", "awayBtn");
      });
      document.getElementById("awayBtn").addEventListener("click", () => {
        localPlayerStat.team = "away";
        updateActiveButtons("awayBtn", "homeBtn");
      });

      // Handle type selection
      document.getElementById("goalBtn").addEventListener("click", () => {
        localPlayerStat.type = "goal";
        updateActiveButtons("goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
      });
      document.getElementById("assistBtn").addEventListener("click", () => {
        localPlayerStat.type = "assist";
        updateActiveButtons("assistBtn", "goalBtn", "shotBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
      });
      document.getElementById("shotBtn").addEventListener("click", () => {
        localPlayerStat.type = "shot";
        updateActiveButtons("shotBtn", "goalBtn", "assistBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
      });
      document.getElementById("shotOnBtn").addEventListener("click", () => {
        localPlayerStat.type = "shotOn";
        updateActiveButtons("shotOnBtn", "goalBtn", "assistBtn", "shotBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
      });
      document.getElementById("gbBtn").addEventListener("click", () => {
        localPlayerStat.type = "groundBall";
        updateActiveButtons("gbBtn", "goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "causedTOBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
      });
      document.getElementById("causedTOBtn").addEventListener("click", () => {
        localPlayerStat.type = "causedTO";
        updateActiveButtons("causedTOBtn", "goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "gbBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
      });
      document.getElementById("saveBtn").addEventListener("click", () => {
        localPlayerStat.type = "save";
        updateActiveButtons("saveBtn", "goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "faceOffBtn", "faceOffWinBtn");
      });
      document.getElementById("faceOffBtn").addEventListener("click", () => {
        localPlayerStat.type = "faceOff";
        updateActiveButtons("faceOffBtn", "goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffWinBtn");
      });
      document.getElementById("faceOffWinBtn").addEventListener("click", () => {
        localPlayerStat.type = "faceOffWin";
        updateActiveButtons("faceOffWinBtn", "goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffBtn");
      });
    }, 100);

  };

  // Utility function to update the active button class
  const updateActiveButtons = (...buttonIds) => {
    buttonIds.forEach((id) => {
      const button = document.getElementById(id);
      button.classList.remove("active");
    });
    const activeButton = document.getElementById(`${buttonIds[0]}`);
    console.log(activeButton)
    if (activeButton) {
      activeButton.classList.add("active");
    }
  };

  function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, "0");
    const s = String(sec % 60).padStart(2, "0");
    return `${m}:${s}`;
  }

  onMounted(startListening);
  onUnmounted(stopListening);

  return {
    // State
    score,
    timeouts,
    quarter,
    gameClock,
    shotClock,
    isClockRunning,
    home,
    away,
    playerStats,
    activePenalties,
    expiredPenalties,
    newPenalty,
    newPlayerStat,
    // Actions
    toggleClocks,
    updateTeamName,
    updateClock,
    incrementScore,
    decrementScore,
    incrementQuarter,
    decrementQuarter,
    incrementTimeouts,
    decrementTimeouts,
    resetGameClock,
    resetShotClock,
    addPenalty,
    removePenalty,
    checkPenalties,
    clearExpiredPenalties,
    addPlayerStat,
    removePlayerStat,
    clearPlayerStat,
    newGame,
    exportData,
    updateFirebase,
    startListening,
    stopListening,
    openAddPlayerStatForm,
    openPenaltyForm,
    formatTime,
  };
});
