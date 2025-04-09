<template>
  <div class="container-fluid py-3">
    <div class="row">
      <div class="col-6">
        <PlayerStatsForm
          :newPlayerStat="newPlayerStat"
          @addPlayerStat="addPlayerStat"          
        />
      </div>
      <div class="col-6">
        <PlayerStatsList
          :playerStats="playerStats"
          @removePlayerStat="removePlayerStat"
          @clearPlayerStat="clearPlayerStat"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { db } from "../firebase";
import { ref as dbRef, onValue, update } from "firebase/database";
import PlayerStatsForm from "../components/PlayerStatsForm.vue";
import PlayerStatsList from "../components/PlayerStatsList.vue";

const playerStats = ref([]);
const gameClock = ref();
const quarter = ref();

const newPlayerStat = ref({
  player: "",
  team: "home",
  type: "goal",
});

onMounted(() => {
  const scoreboardRef = dbRef(db, "/scoreboard");
  onValue(scoreboardRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      playerStats.value = JSON.parse(data.playerStats);
      gameClock.value = data.gameClock;
      quarter.value = data.quarter;
    }
  });
});

function updateFirebase() {
  const scoreboardRef = dbRef(db, "/scoreboard");
  update(scoreboardRef, {
    playerStats: JSON.stringify(playerStats.value),
  });
}

function addPlayerStat(stat) {
  const enriched = { ...stat, gameClock: gameClock.value, quarter: quarter.value }; // or bring gameClock/quarter from Firebase
  playerStats.value.push(enriched);
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
</script>
