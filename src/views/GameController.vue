<template>
  <div class="container-fluid py-3">
    <HeaderSection :quarter="quarter" :gameClock="gameClock" :shotClock="shotClock" :isClockRunning="isClockRunning"
      :isPublicView="false" @toggleClocks="toggleClocks" @resetClock="resetClock" @adjustQuarter="adjustQuarter"
      @editClock="editClock" />

    <ScoreSection :score="score" :timeouts="timeouts" :home="home" :away="away" :activePenalties="activePenalties"
      :isClockRunning="isClockRunning" @adjustScore="adjustScore" @adjustTimeout="adjustTimeout" @editName="editName"
      @removePenalty="removePenalty" :isPublicView="false" />
    <div class="row">
      <div class="col-6">
        <PenaltyForm :newPenalty="newPenalty" :gameClock="gameClock" :expiredPenalties="expiredPenalties"
          @clearPenalties="clearPenalties" @addPenalty="addPenalty" />
      </div>
      <div class="col-6">
        <PlayerStatsForm :newPlayerStat="newPlayerStat" :playerStats="playerStats" @addPlayerStat="addPlayerStat"
          @removePlayerStat="removePlayerStat" @clearPlayerStat="clearPlayerStat" />
      </div>
    </div>

    <div class="position-fixed bottom-0 start-0 m-2">
      <button class="btn btn-secondary btn-sm me-2" @click="exportData">
        Export Data
      </button>
      <button class="btn btn-dark btn-sm" @click="newGame">
        New Game
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { ref as dbRef, onValue, update, push, set, remove } from "firebase/database";
import { db } from "../firebase.js";
import Swal from 'sweetalert2';

import HeaderSection from "../components/HeaderSection.vue";
import ScoreSection from "../components/ScoreSection.vue";
import PenaltyForm from "../components/PenaltyForm.vue";
import PlayerStatsForm from "../components/PlayerStatsForm.vue";

const score = ref({ home: 0, away: 0 });
const timeouts = ref({ home: 2, away: 2 });
const gameClock = ref(720);
const shotClock = ref(80);
const isClockRunning = ref(false);
const clockInterval = ref(null);
const quarter = ref(1);
const home = ref("Home");
const away = ref("Away");
const activePenalties = ref([]);
const expiredPenalties = ref([]);
const playerStats = ref([]);

const props = defineProps({ isPublicView: Boolean })

const newPenalty = ref({
  team: "home",
  player: "",
  duration: 30,
  category: "crosscheck",
  releasable: true,
});
const newPlayerStat = ref({ player: "", team: "home", type: "goal" });

onMounted(() => {
  const scoreboardRef = dbRef(db, "/scoreboard");
  onValue(scoreboardRef, (snapshot) => {
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
});

onUnmounted(() => {
  if (clockInterval.value) {
    clearInterval(clockInterval.value);
    clockInterval.value = null;
  }
});

async function newGame() {
  const result = await Swal.fire({
    title: 'Start a New Game?',
    text: 'This will archive the current game and reset the scoreboard.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#d33',
    cancelButtonColor: '#3085d6',
    confirmButtonText: 'Yes, start new game!',
  });

  if (!result.isConfirmed) return;

  const timestamp = new Date().toISOString();

  // Step 1: Archive current scoreboard under /games/
  const archiveRef = dbRef(db, `/games`);
  const newGameRef = push(archiveRef); // auto-generates a key

  await set(newGameRef, {
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

function resetClock(type) {
  if (type === "shotClock") shotClock.value = 80;
  if (type === "gameClock") gameClock.value = 720;
  updateFirebase();
}

function adjustScore(team, amount) {
  score.value[team] = Math.max(0, score.value[team] + amount);
  updateFirebase();
}

function adjustTimeout(team, amount) {
  timeouts.value[team] = Math.max(
    0,
    Math.min(2, timeouts.value[team] + amount)
  );
  updateFirebase();
}

function adjustQuarter(amount) {
  quarter.value = Math.max(1, Math.min(4, quarter.value + amount));
  updateFirebase();
}

function editName(type) {
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



function editClock(type) {
  const currentValue = type === "gameClock" ? gameClock.value : shotClock.value;

  Swal.fire({
    title: `Set ${type === "gameClock" ? "Game" : "Shot"} Clock`,
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

      updateFirebase();

      Swal.fire({
        toast: true,
        position: "bottom",
        title: "Clock Updated",
        text: `${type === "gameClock" ? "Game" : "Shot"} clock set to ${parsedValue} seconds.`,
        icon: "success",
        timer: 1500,
        showConfirmButton: false,
      });
    }
  });
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

function removePenalty(index, team) {
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

function clearPenalties() {
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
      title: "Cleared",
      text: "Expired penalties have been removed.",
      icon: "success",
      timer: 1200,
      showConfirmButton: false,
    });
  }
});
}

function addPlayerStat(stat) {
  const enriched = { ...stat, gameClock: gameClock.value, quarter: quarter.value }; // or bring gameClock/quarter from Firebase
  playerStats.value.push(enriched);
  updateFirebase();
}

// Remove a single player stat with confirmation
async function removePlayerStat(index) {
  const playerStat = playerStats.value[index];
  const result = await Swal.fire({
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
  });

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
}

// Clear all player stats with confirmation
async function clearPlayerStat() {
  const result = await Swal.fire({
    title: "Clear All Player Stats?",
    text: "This will permanently remove all player statistics.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Yes, clear them",
    cancelButtonText: "Cancel",
  });

  if (result.isConfirmed) {
    playerStats.value = [];
    updateFirebase();

    Swal.fire({
      title: "Cleared",
      text: "All player stats have been removed.",
      icon: "success",
      timer: 1200,
      showConfirmButton: false,
    });
  }
}


function exportData() {
  const data = {
    score: score.value,
    timeouts: timeouts.value,
    gameClock: gameClock.value,
    shotClock: shotClock.value,
    isClockRunning: isClockRunning.value,
    quarter: quarter.value,
    playerStats: playerStats.value,
    home: home.value,
    away: away.value,
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
</script>
