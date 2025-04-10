<template>
  <div class="mb-4">
    <div class="row g-2">
      <div class="col-12">
        <button class="btn btn-primary w-100 mb-2" @click="openPenaltyForm">
          Add Penalty
        </button>
      </div>
      <div v-if="expiredPenalties.length > 0" class="col-12">
        <div class="penalty-form mb-4">
          <h5 class="text-center">Expired Penalties</h5>
          <ul class="list-group">
            <li v-for="(p, i) in expiredPenalties" :key="i" class="list-group-item">
              {{ p.team }} {{ p.player ? `- #${p.player}` : '' }} | {{ p.category }} | {{ formatTime(p.startGameClock) }} → {{ formatTime(p.endGameClock) }}
            </li>
          </ul>
          <button v-if="expiredPenalties.length > 0" class="btn btn-outline-dark mt-2 w-100" @click="$emit('clearPenalties')">Clear Penalties</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, watch } from "vue";
import Swal from "sweetalert2";

// Props and emits for handling penalty data
const props = defineProps(['newPenalty', 'gameClock', 'expiredPenalties']);
const emit = defineEmits(['addPenalty', 'clearPenalties']);

const local = reactive({
  ...props.newPenalty,
});

watch(
  () => props.newPenalty,
  (val) => {
    Object.assign(local, val);
  }
);

// Function to open the SweetAlert2 modal with the penalty form
const openPenaltyForm = () => {
  Swal.fire({
    title: 'Add Penalty',
    html: `
      <div class="row g-2">
        <div class="col-12">
          <input id="player" class="form-control form-control-sm" type="text" placeholder="Player #" value="${local.player}" />
        </div>
        <div class="col-12">
          <label class="btn btn-outline-success btn-sm w-100" for="releasable">Releasable</label>
          <input class="btn-check" type="checkbox" id="releasable" ${local.releasable ? 'checked' : ''} />
        </div>
        <div class="col-6">
          <label>Team</label>
          <div class="btn-group w-100">
            <button class="btn btn-outline-primary active" id="homeBtn">Home</button>
            <button class="btn btn-outline-primary" id="awayBtn">Away</button>
          </div>
        </div>
        <div class="col-6">
          <label>Duration</label>
          <div class="btn-group w-100">
            <button class="btn btn-outline-danger active" id="30sBtn">30s</button>
            <button class="btn btn-outline-danger" id="1minBtn">1:00</button>
            <button class="btn btn-outline-danger" id="2minBtn">2:00</button>
          </div>
        </div>
        <div class="col-12">
          <label>Penalty Category</label>
          <div class="btn-group w-100">
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
      const releasable = document.getElementById("releasable").checked;
      const team = local.team;
      const duration = local.duration;
      const category = local.category;

      if (!player) {
        Swal.showValidationMessage("Player # is required");
        return false;
      }

      return { player, releasable, team, duration, category };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      // Emit the new penalty to the parent component
      emit('addPenalty', {
        ...result.value,
        startGameClock: props.gameClock,
        endGameClock: props.gameClock - result.value.duration
      });
    }
  });

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

    // Handle duration selection
    document.getElementById("30sBtn").addEventListener("click", () => {
      local.duration = 30;
      updateActiveButtons("30sBtn", "1minBtn", "2minBtn");
    });
    document.getElementById("1minBtn").addEventListener("click", () => {
      local.duration = 60;
      updateActiveButtons("1minBtn", "30sBtn", "2minBtn");
    });
    document.getElementById("2minBtn").addEventListener("click", () => {
      local.duration = 120;
      updateActiveButtons("2minBtn", "30sBtn", "1minBtn");
    });

    // Handle penalty category selection
    document.getElementById("crosscheckBtn").addEventListener("click", () => {
      local.category = "crosscheck";
      updateActiveButtons("crosscheckBtn", "slashBtn", "tripBtn", "roughnessBtn", "otherBtn");
    });
    document.getElementById("slashBtn").addEventListener("click", () => {
      local.category = "slash";
      updateActiveButtons("slashBtn", "crosscheckBtn", "tripBtn", "roughnessBtn", "otherBtn");
    });
    document.getElementById("tripBtn").addEventListener("click", () => {
      local.category = "trip";
      updateActiveButtons("tripBtn", "crosscheckBtn", "slashBtn", "roughnessBtn", "otherBtn");
    });
    document.getElementById("roughnessBtn").addEventListener("click", () => {
      local.category = "unnecessaryroughness";
      updateActiveButtons("roughnessBtn", "crosscheckBtn", "slashBtn", "tripBtn", "otherBtn");
    });
    document.getElementById("otherBtn").addEventListener("click", () => {
      local.category = "other";
      updateActiveButtons("otherBtn", "crosscheckBtn", "slashBtn", "tripBtn", "roughnessBtn");
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
  if (activeButton) {
    activeButton.classList.add("active");
  }
};

function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0')
  const s = String(sec % 60).padStart(2, '0')
  return `${m}:${s}`
}
</script>
