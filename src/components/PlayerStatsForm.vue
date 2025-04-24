<template>
  <div class="mb-4">
    <div class="row g-2">
      <div v-if="scoreboard.playerStats.length > 0" class="col-12">
        <div class="penalty-form mb-4">
          <h5 class="text-center">Player Stats</h5>
          <ul class="list-group">
            <li v-for="(p, i) in scoreboard.playerStats" :key="i"
              class="list-group-item d-flex justify-content-between align-items-center">
              <span>{{ p.team }} - #{{ p.player }} | {{ p.type }} | Time: {{ scoreboard.formatTime(p.gameClock) }} | Quarter: {{
                p.quarter }}</span>
              <button class="btn btn-danger btn-sm ml-auto removeBtn" @click="scoreboard.removePlayerStat(i)"><i
                  class="bi bi-x"></i></button>

            </li>
          </ul>
          <button class="btn btn-outline-dark mt-3 w-100" @click="scoreboard.clearPlayerStat">
            Clear All
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useScoreboardStore } from "@/stores/store";

const scoreboard = useScoreboardStore();
</script>

<style scoped>
.removeBtn {
  width: 30px;
  height: 30px;
  padding: 0;
}
</style>