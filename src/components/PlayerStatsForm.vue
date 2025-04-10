<template>
  <div class="mb-4">
    <div class="row g-2">
      <div class="col-6 offset-3 mb-2">
        <button class="btn btn-primary w-100" @click="openAddPlayerStatForm">Add Player Stat</button>
      </div>
      <div v-if="playerStats.length > 0" class="col-12">
        <div class="penalty-form mb-4">
          <h5 class="text-center">Player Stats</h5>
          <ul class="list-group">
            <li v-for="(p, i) in playerStats" :key="i"
              class="list-group-item d-flex justify-content-between align-items-center">
              <span>{{ p.team }} - #{{ p.player }} | {{ p.type }} | Time: {{ formatTime(p.gameClock) }} | Quarter: {{
                p.quarter }}</span>
              <button class="btn btn-danger btn-sm ml-auto removeBtn" @click="$emit('removePlayerStat', i)"><i
                  class="bi bi-x"></i></button>

            </li>
          </ul>
          <button class="btn btn-outline-dark mt-3 w-100" @click="$emit('clearPlayerStat')">
            Clear All
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, watch } from 'vue'
import Swal from 'sweetalert2'

const props = defineProps(['newPlayerStat', 'playerStats'])
const local = reactive({ ...props.newPlayerStat })

const emit = defineEmits(['addPlayerStat', 'clearPlayerStat']);

watch(() => props.newPlayerStat, val => Object.assign(local, val))

const openAddPlayerStatForm = () => {
  Swal.fire({
    title: 'Add Player Stat',
    html: `
      <div class="row g-2">
        <div class="col-4">
          <input id="player" class="form-control form-control-sm" v-model="local.player" placeholder="Player #" />
        </div>
        <div class="col-6 offset-2">
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-primary active" id="homeBtn">Home</button>
          <button class="btn btn-outline-primary" id="awayBtn">Away</button>
          </div>
        </div>
        <div class="col-12">
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
        team: local.team,
        type: local.type,
      }
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Emit the new penalty to the parent component
      emit('addPlayerStat', {
        ...result.value,
      });
    }
  })

  // Add event listeners for buttons inside the SweetAlert2 popup
  setTimeout(() => {
    // Handle team selection
    document.getElementById("homeBtn").addEventListener("click", () => {
      local.team = "home";
      updateActiveButtons("homeBtn", "awayBtn");
    });
    document.getElementById("awayBtn").addEventListener("click", () => {
      local.team = "away";
      updateActiveButtons("awayBtn", "homeBtn");
    });

    // Handle type selection
    document.getElementById("goalBtn").addEventListener("click", () => {
      local.type = "goal";
      updateActiveButtons("goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
    });
    document.getElementById("assistBtn").addEventListener("click", () => {
      local.type = "assist";
      updateActiveButtons("assistBtn", "goalBtn", "shotBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
    });
    document.getElementById("shotBtn").addEventListener("click", () => {
      local.type = "shot";
      updateActiveButtons("shotBtn", "goalBtn", "assistBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
    });
    document.getElementById("shotOnBtn").addEventListener("click", () => {
      local.type = "shotOn";
      updateActiveButtons("shotOnBtn", "goalBtn", "assistBtn", "shotBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
    });
    document.getElementById("gbBtn").addEventListener("click", () => {
      local.type = "groundBall";
      updateActiveButtons("gbBtn", "goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "causedTOBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
    });
    document.getElementById("causedTOBtn").addEventListener("click", () => {
      local.type = "causedTO";
      updateActiveButtons("causedTOBtn", "goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "gbBtn", "saveBtn", "faceOffBtn", "faceOffWinBtn");
    });
    document.getElementById("saveBtn").addEventListener("click", () => {
      local.type = "save";
      updateActiveButtons("saveBtn", "goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "faceOffBtn", "faceOffWinBtn");
    });
    document.getElementById("faceOffBtn").addEventListener("click", () => {
      local.type = "faceOff";
      updateActiveButtons("faceOffBtn", "goalBtn", "assistBtn", "shotBtn", "shotOnBtn", "gbBtn", "causedTOBtn", "saveBtn", "faceOffWinBtn");
    });
    document.getElementById("faceOffWinBtn").addEventListener("click", () => {
      local.type = "faceOffWin";
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
</script>
<style scoped>
.removeBtn {
  width: 30px;
  height: 30px;
  padding: 0;
}
</style>