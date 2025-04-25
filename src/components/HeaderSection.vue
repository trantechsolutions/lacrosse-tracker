<template>
  <div class="container-fluid py-3">
    <div class="row sticky-topbar text-center mb-4">
      <div class="col-12 col-md-4">
        <TeamPanel teamLabel="home" :isPublicView="isPublicView" />
      </div>
      <div class="col-12 col-md-4">
        <div>Game Clock</div>

        <div class="clock-display">
          <span v-if="!isPublicView && !scoreboard.isClockRunning" class="editable"
            @click="scoreboard.updateClock('game')">{{ scoreboard.formatTime(scoreboard.gameClock) }}</span>
          <span v-else>{{ scoreboard.formatTime(scoreboard.gameClock) }}</span>
        </div>
        <div class="row">
          <div class="col-6">
            <div>Quarter</div>

            <div class="side-clock-display">{{ scoreboard.quarter }}</div>
          </div>
          <div class="col-6">
            <div>Shot Clock</div>

            <div class="side-clock-display shot-clock-seconds">
              <span v-if="!isPublicView && !scoreboard.isClockRunning" class="editable"
                @click="scoreboard.updateClock('shot')">{{ scoreboard.shotClock }}</span>
              <span v-else-if="!isPublicView" @click="scoreboard.resetShotClock">{{ scoreboard.shotClock }}</span>
              <span v-else>{{ scoreboard.shotClock }}</span>
            </div>
          </div>
          <div v-if="!isPublicView" class="text-center my-3 row">
            <div class="col-4">
              <div class="btn-group btn-group-sm">
                <button v-if="!isPublicView" class="btn btn-outline-dark" @click="scoreboard.decrementQuarter">
                  <i class="bi bi-dash"></i> QTR
                </button>
                <button v-if="!isPublicView" class="btn btn-outline-dark" @click="scoreboard.incrementQuarter">
                  <i class="bi bi-plus"></i> QTR
                </button>
              </div>
            </div>
            <div class="col-4">
              <div class="btn-group btn-group-sm">
                <button class="btn" :class="scoreboard.isClockRunning ? 'btn-danger' : 'btn-success'"
                  @click="scoreboard.toggleClocks">
                  <i :class="scoreboard.isClockRunning ? 'bi bi-pause-fill' : 'bi bi-play-fill'
                    "></i>
                  {{ scoreboard.isClockRunning ? "Stop" : "Start" }}
                </button>
              </div>
            </div>
            <div class="col-4">
              <div class="btn-group btn-group-sm">
                <button v-if="!isPublicView" class="btn btn-outline-danger" @click="scoreboard.resetGameClock">
                  <i class="bi bi-arrow-counterclockwise"></i> Game
                </button>
                <button v-if="!isPublicView" class="btn btn-outline-danger" @click="scoreboard.resetShotClock">
                  <i class="bi bi-arrow-counterclockwise"></i> Shot
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-4">
        <TeamPanel teamLabel="away" :isPublicView="isPublicView" />


      </div>
    </div>
  </div>
</template>

<script setup>
import { useScoreboardStore, useAuthStore } from '@/stores/store'

import TeamPanel from './TeamPanel.vue';

const scoreboard = useScoreboardStore();
const authStore = useAuthStore();

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
  font-size: 3rem;
  font-weight: bold;
}

.shot-clock-seconds {
  color: #dc3545;
}
</style>
