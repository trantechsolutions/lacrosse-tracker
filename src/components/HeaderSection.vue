<template>
  <div class="container-fluid py-3">
    <div class="row sticky-topbar text-center mb-4">
      <div class="col-4">
        <div>Quarter</div>
        <button
          v-if="!isPublicView"
          class="btn btn-outline-dark mt-2 me-2"
          @click="$emit('adjustQuarter', -1)"
        >
          <i class="bi bi-dash"></i>
        </button>
        <button
          v-if="!isPublicView"
          class="btn btn-outline-dark mt-2"
          @click="$emit('adjustQuarter', 1)"
        >
          <i class="bi bi-plus"></i>
        </button>
        <div class="side-clock-display">{{ quarter }}</div>
      </div>
      <div class="col-4">
        <div>Game Clock</div>
        <button
          v-if="!isPublicView"
          class="btn btn-danger btn-sm mx-1"
          @click="$emit('resetClock', 'gameClock')"
        >
          Reset Game
        </button>
        <div class="clock-display">
          <span v-if="!isPublicView && !isClockRunning" class="editable" @click="handleSubmit('gameClock')">{{ formatTime(props.gameClock) }}</span>
          <span v-else>{{ formatTime(props.gameClock) }}</span>
        </div>
      </div>
      <div class="col-4">
        <div>Shot Clock</div>
        <button
          v-if="!isPublicView"
          class="btn btn-warning btn-sm mx-1"
          @click="$emit('resetClock', 'shotClock')"
        >
          Reset Shot
        </button>
        <div class="side-clock-display shot-clock-seconds">
          <span v-if="!isPublicView && !isClockRunning" class="editable" @click="handleSubmit('shotClock')">{{ props.shotClock }}</span>
          <span v-else>{{ props.shotClock }}</span>
        </div>
      </div>
      <div v-if="!isPublicView" class="text-center my-3">
        <button
          class="btn btn-primary btn-sm mx-1"
          @click="$emit('toggleClocks')"
        >
          <i
            :class="
              props.isClockRunning ? 'bi bi-pause-fill' : 'bi bi-play-fill'
            "
          ></i>
          {{ props.isClockRunning ? "Stop" : "Start" }}
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
const props = defineProps([
  "quarter",
  "gameClock",
  "shotClock",
  "isClockRunning",
  "isPublicView",
]);
function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}

const emit = defineEmits(["editClock"]);

const handleSubmit = (type) => {
  // Emit the new penalty to the parent component
  console.log(type)
  emit('editClock', type)
};

</script>
<style scoped>
.clock-display {
  font-size: 8rem;
  font-weight: 700;
}

.side-clock-display {
  font-size: 6rem;
  font-weight: bold;
}

.shot-clock-seconds {
  color: #dc3545;
}
</style>
