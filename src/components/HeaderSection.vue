<template>
  <div class="container-fluid py-3">
    <div class="row sticky-topbar text-center mb-4">
      <div class="col-12 col-md-4">
        <div>Quarter</div>
        <button
          v-if="!isPublicView"
          class="btn btn-outline-dark mt-2 me-2"
          @click="scoreboard.decrementQuarter"
        >
          <i class="bi bi-dash"></i>
        </button>
        <button
          v-if="!isPublicView"
          class="btn btn-outline-dark mt-2"
          @click="scoreboard.incrementQuarter"
        >
          <i class="bi bi-plus"></i>
        </button>
        <div class="side-clock-display">{{ scoreboard.quarter }}</div>
      </div>
      <div class="col-12 col-md-4">
        <div>Game Clock</div>
        <button
          v-if="!isPublicView"
          class="btn btn-danger btn-sm mx-1"
          @click="scoreboard.resetGameClock"
        >
          Reset Game
        </button>
        <div class="clock-display">
          <span v-if="!isPublicView && !scoreboard.isClockRunning" class="editable" @click="scoreboard.updateClock('game')">{{ scoreboard.formatTime(scoreboard.gameClock) }}</span>
          <span v-else>{{ scoreboard.formatTime(scoreboard.gameClock) }}</span>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <div>Shot Clock</div>
        <button
          v-if="!isPublicView"
          class="btn btn-warning btn-sm mx-1"
          @click="scoreboard.resetShotClock"
        >
          Reset Shot
        </button>
        <div class="side-clock-display shot-clock-seconds">
          <span v-if="!isPublicView && !scoreboard.isClockRunning" class="editable" @click="scoreboard.updateClock('shot')">{{ scoreboard.shotClock }}</span>
          <span v-else>{{ scoreboard.shotClock }}</span>
        </div>
      </div>
      <div v-if="!isPublicView" class="text-center my-3">
        <button
          class="btn btn-primary btn-sm mx-1"
          @click="scoreboard.toggleClocks"
        >
          <i
            :class="
              scoreboard.isClockRunning ? 'bi bi-pause-fill' : 'bi bi-play-fill'
            "
          ></i>
          {{ scoreboard.isClockRunning ? "Stop" : "Start" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useScoreboardStore } from '@/stores/store'

const scoreboard = useScoreboardStore()

const props = defineProps([
  "isPublicView",
]);


</script>

<style scoped>
.clock-display {
  font-size: 4rem;
  font-weight: 700;
}

.side-clock-display {
  font-size: 4rem;
  font-weight: bold;
}

.shot-clock-seconds {
  color: #dc3545;
}

@media (max-width: 576px) {
  .clock-display {
    font-size: 6rem;
  }

  .side-clock-display {
    font-size: 4rem;
  }

  .btn {
    font-size: 0.9rem;
    padding: 10px 15px;
  }

  .sticky-topbar {
    padding-top: 10px;
    padding-bottom: 10px;
  }
}

@media (max-width: 768px) {
  .clock-display {
    font-size: 7rem;
  }

  .side-clock-display {
    font-size: 5rem;
  }
}
</style>
