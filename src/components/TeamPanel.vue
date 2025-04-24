<template>
  <div class="col-6 border-end">
    <h4><span v-if="!isPublicView && !scoreboard.isClockRunning" @click="scoreboard.updateTeamName(teamLabel)" class="editable">{{ scoreboard[teamLabel] }}</span>
      <span v-else>{{ scoreboard[teamLabel] }}</span>
    </h4>
    <div class="score-display mb-2">{{ scoreboard.score[teamLabel] }}</div>
    <div v-if="!isPublicView" class="btn-group btn-group-sm mb-2">
      <button class="btn btn-danger btn-lg" @click="scoreboard.decrementScore(teamLabel)"><i class="bi bi-dash-circle"></i></button>
      <button class="btn btn-success btn-lg" @click="scoreboard.incrementScore(teamLabel)"><i class="bi bi-plus-circle"></i></button>
    </div>
    <div class="mb-2">Timeouts: {{ scoreboard.timeouts[teamLabel] }}</div>
    <div v-if="!isPublicView" class="btn-group btn-group-sm mb-3">
      <button class="btn btn-outline-secondary" @click="scoreboard.decrementTimeouts(teamLabel)"><i class="bi bi-dash"></i></button>
      <button class="btn btn-outline-secondary" @click="scoreboard.incrementTimeouts(teamLabel)"><i class="bi bi-plus"></i></button>
    </div>
    <h6>Penalties</h6>
    <ul class="list-group">
      <li v-for="(p, i) in scoreboard.activePenalties.filter(penalty => penalty.team === teamLabel)" :key="i"
        class="list-group-item d-flex justify-content-between align-items-center">
        {{ p.player ? `#${p.player}` : 'Player' }} - {{ p.category }} ({{ p.remaining }}s)
        <span v-if="p.releasable" class="badge bg-success">Releasable</span>
        <button class="btn btn-sm btn-danger removeBtn" @click="$emit('removePenalty', i)"><i
            class="bi bi-x"></i></button>
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted, onUnmounted } from 'vue'
import { useScoreboardStore } from '@/stores/scoreboard'

const scoreboard = useScoreboardStore()

onMounted(() => {
  scoreboard.startListening()
})

onUnmounted(() => {
  scoreboard.stopListening()
})

const props = defineProps(['teamLabel', 'score', 'timeouts', 'penalties', 'teamName', 'isClockRunning', 'isPublicView'])
</script>

<style scoped>
.score-display {
  font-size: 5rem;
  font-weight: bold;
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
</style>