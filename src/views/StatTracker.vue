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
import Swal from 'sweetalert2';

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

</script>
