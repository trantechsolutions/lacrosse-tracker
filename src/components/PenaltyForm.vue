<template>
  <div class="mb-4">
    <div class="row g-2">
      <div v-if="scoreboard.expiredPenalties.length > 0" class="col-12">
        <div class="penalty-form mb-4">
          <h5 class="text-center">Expired Penalties</h5>
          <ul class="list-group">
            <li v-for="(p, i) in scoreboard.expiredPenalties" :key="i" class="list-group-item">
              {{ p.team }} {{ p.player ? `- #${p.player}` : '' }} | {{ p.category }} | {{ scoreboard.formatTime(p.startGameClock) }} → {{ scoreboard.formatTime(p.endGameClock) }}
            </li>
          </ul>
          <button v-if="scoreboard.expiredPenalties.length > 0" class="btn btn-outline-dark mt-2 w-100" @click="scoreboard.clearExpiredPenalties">Clear Penalties</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useScoreboardStore } from "@/stores/scoreboard";

const scoreboard = useScoreboardStore();
</script>
