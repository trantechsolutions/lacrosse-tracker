<template>
  <div class="container-fluid py-3">
    <div class="row">
      <div class="col-6">
        <PenaltyForm :newPenalty="newPenalty" :gameClock="gameClock" @addPenalty="addPenalty" />
      </div>
      <div class="col-6">
        <ExpiredPenalties :expiredPenalties="expiredPenalties" />
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted, reactive } from "vue";
import { db } from "../firebase";
import { ref as dbRef, onValue, update } from "firebase/database";
import PenaltyForm from "../components/PenaltyForm.vue";
import ExpiredPenalties from "../components/ExpiredPenalties.vue";

const props = defineProps({
  gameClock: Number
})

const newPenalty = reactive({
  player: "",
  team: "home",
  duration: 30,
  category: "crosscheck",
  releasable: true,
  startGameClock: 0,
  endGameClock: 0,
});

const expiredPenalties = ref([]);

function addPenalty(localPenalty) {
  const penalty = {
    ...localPenalty,
    startGameClock: props.gameClock, // Assuming the penalty starts at 0 seconds
    endGameClock: props.gameClock - localPenalty.duration, // End time based on the duration
  };

  expiredPenalties.value.push(penalty);

  // After adding, reset the newPenalty form
  Object.assign(newPenalty, {
    player: "",
    team: "",
    duration: 30,
    category: "crosscheck",
    releasable: false,
    startGameClock: 0,
    endGameClock: 0,
  });
}

// Function to update penalty end times based on the game clock
function updatePenaltiesClock(currentGameClock) {
  expiredPenalties.value.forEach((penalty) => {
    if (penalty.endGameClock > currentGameClock) {
      penalty.endGameClock = currentGameClock;
    }
  });
}

// Example of using a setInterval to decrement game clock and update expired penalties
setInterval(() => {
  const currentTime = Date.now() / 1000; // For example: use current time to update clock
  updatePenaltiesClock(currentTime);
}, 1000);
</script>
