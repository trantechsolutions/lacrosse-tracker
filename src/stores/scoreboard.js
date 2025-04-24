// stores/scoreboard.js
import { defineStore } from 'pinia';
import { ref, onMounted, onUnmounted } from 'vue';
import { db } from '@/firebase';
import { ref as dbRef, onValue, update } from 'firebase/database';
import Swal from 'sweetalert2';

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

  function resetGameClock() {
    gameClock.value = 720;
    isClockRunning.value = false;
    updateFirebase();
  }

  function resetShotClock() {
    shotClock.value = 80;
    updateFirebase();
  }

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

  function expirePenalty(index) {
    const expired = activePenalties.value.splice(index, 1);
    if (expired.length > 0) {
      expiredPenalties.value.push(expired[0]);
    }
    updateFirebase();
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
    expiredPenalties.value = [];
    updateFirebase();
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
    expirePenalty,
    checkPenalties,
    clearExpiredPenalties,
    exportData,
    updateFirebase,
    startListening,
    stopListening,
  };
});
