<template>
  <div class="col-6 border-end">
    <h4><span v-if="!isPublicView && !scoreboard.isClockRunning" @click="scoreboard.updateTeamName(teamLabel)" class="editable">{{ scoreboard[teamLabel] }}</span>
      <span v-else>{{ scoreboard[teamLabel] }}</span>
    </h4>
    <div class="score-display position-relative mb-2 p-4 border rounded text-center">
  <!-- Centered Score -->
  <div class="display-2 fw-bold">
    {{ scoreboard.score[teamLabel] }}
  </div>

  <!-- Floating Controls (Top-Right) -->
  <div
    class="position-absolute top-0 end-0 p-3 d-flex flex-column align-items-end"
    style="min-width: 140px;"
  >
    <!-- Timeout Count -->
    <div class="small mb-2">Timeouts: {{ scoreboard.timeouts[teamLabel] }}</div>

    <!-- Buttons -->
    <div v-if="!isPublicView" class="btn-group btn-group-sm mb-3">
      <!-- Score Buttons -->
      <button class="btn btn-success btn-sm" @click="scoreboard.incrementScore(teamLabel)">
        <i class="bi bi-plus-circle"></i> Score
      </button>
      <button class="btn btn-danger btn-sm" @click="scoreboard.decrementScore(teamLabel)">
        <i class="bi bi-dash-circle"></i> Score
      </button>
    </div>
    <div v-if="!isPublicView" class="btn-group btn-group-sm mb-3">
      <!-- Timeout Buttons -->
      <button class="btn btn-outline-light btn-sm" @click="scoreboard.incrementTimeouts(teamLabel)">
        <i class="bi bi-plus"></i> Timeout
      </button>
      <button class="btn btn-outline-light btn-sm" @click="scoreboard.decrementTimeouts(teamLabel)">
        <i class="bi bi-dash"></i> Timeout
      </button>
    </div>
  </div>
</div>


    <h6>Penalties</h6>
    <ul class="list-group">
      <li v-for="(p, i) in scoreboard.activePenalties.filter(penalty => penalty.team === teamLabel)" :key="i"
        class="list-group-item d-flex justify-content-between align-items-center" :class="{ 'blink-red': p.remaining <= 10 }">
        {{ p.player ? `#${p.player}` : 'Player' }} - {{ p.category }} ({{ p.remaining }}s)
        <span v-if="p.releasable" class="badge bg-success">Releasable</span>
        <button v-if="p.releasable" class="btn btn-sm btn-danger removeBtn" @click="scoreboard.removePenalty(teamLabel, i)"><i
            class="bi bi-x"></i></button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { useScoreboardStore } from '@/stores/scoreboard'

const scoreboard = useScoreboardStore()

const props = defineProps(['teamLabel', 'isPublicView'])
</script>

<style scoped>
.score-display {
  background-color: #212529;
  color: #fff;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: inset 0 -4px 8px rgba(0, 0, 0, 0.3);
}

.removeBtn {
  width: 30px;
  height: 30px;
  padding: 0;
}

@keyframes blink {
  0%, 100% { background-color: #fff; color: #000; }
  50% { background-color: #dc3545; color: #fff; }
}

.blink-red {
  animation: blink 1s step-start infinite;
}
</style>