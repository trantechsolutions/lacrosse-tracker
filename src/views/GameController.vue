<template>
  <div class="container-fluid py-3">
    <HeaderSection
      :quarter="quarter"
      :gameClock="gameClock"
      :shotClock="shotClock"
      :isClockRunning="isClockRunning"
      :isPublicView="false"
      @toggleClocks="toggleClocks"
      @resetClock="resetClock"
      @adjustQuarter="adjustQuarter"
      @editClock="editClock"
    />

    <ScoreSection
      :score="score"
      :timeouts="timeouts"
      :home="home"
      :away="away"
      :activePenalties="activePenalties"
      :isClockRunning="isClockRunning"
      @adjustScore="adjustScore"
      @adjustTimeout="adjustTimeout"
      @editName="editName"
      @removePenalty="removePenalty"
      :isPublicView="false"
    />
    <div class="row">
      <div class="col-6">
        <PenaltyForm :newPenalty="newPenalty" @addPenalty="addPenalty" />
      </div>
      <div class="col-6">
        <ExpiredPenalties :expiredPenalties="expiredPenalties" />
      </div>
    </div>

    <div class="position-fixed bottom-0 start-0 m-2">
      <button
        class="btn btn-secondary btn-sm me-2"
        @click="exportData"
      >
        Export Data
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { ref as dbRef, onValue, update } from "firebase/database";
import { db } from "../firebase.js";
import HeaderSection from "../components/HeaderSection.vue";
import ScoreSection from "../components/ScoreSection.vue";
import PenaltyForm from "../components/PenaltyForm.vue";
import ExpiredPenalties from "../components/ExpiredPenalties.vue";
import PlayerStatsForm from "../components/PlayerStatsForm.vue";
import PlayerStatsList from "../components/PlayerStatsList.vue";

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
    }
  });
});

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
  });
}

function toggleClocks() {
  if (clockInterval.value) {
    clearInterval(clockInterval.value);
    clockInterval.value = null;
    isClockRunning.value = false;
  } else {
    clockInterval.value = setInterval(() => {
      if (shotClock.value > 0) shotClock.value--;
      if (gameClock.value > 0) gameClock.value--;
      checkPenalties();
      updateFirebase();
    }, 1000);
    isClockRunning.value = true;
  }
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
  const name = prompt(
    `Set ${type} Team Name:`,
    type === "home" ? home.value : away.value
  );
  if (type === "home") home.value = name;
  else away.value = name;
  updateFirebase();
}

function editClock(type) {
    const input = prompt(
      `Set ${type === 'gameClock' ? 'Game' : 'Shot'} Clock (in seconds):`,
      this[type]
    );
    const value = parseInt(input);
    if (!isNaN(value)) {
        if (type === "gameClock") gameClock.value = value
        else shotClock.value = value
    }
    updateFirebase();
  }

function addPenalty() {
  const p = { ...newPenalty.value };
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
}

function removePenalty(index) {
  const removed = activePenalties.value.splice(index, 1)[0];
  expiredPenalties.value.push(removed);
}

function checkPenalties() {
  const remaining = [];
  for (const p of activePenalties.value) {
    p.remaining--;
    if (p.remaining <= 0) expiredPenalties.value.push({ ...p });
    else remaining.push(p);
  }
  activePenalties.value = remaining;
}

function addPlayerStat() {
  const stat = {
    ...newPlayerStat.value,
    gameClock: gameClock.value,
    quarter: quarter.value,
  };
  playerStats.value.push(stat);
  updateFirebase();
}

function removePlayerStat(index) {
  playerStats.value.splice(index, 1);
  updateFirebase();
}

function clearPlayerStat() {
  playerStats.value = [];
  updateFirebase();
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
