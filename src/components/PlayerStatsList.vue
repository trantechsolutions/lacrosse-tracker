<template>
  <div class="penalty-form mb-4">
    <h5 class="text-center">Player Stats</h5>
    <ul class="list-group">
      <li
        v-for="(p, i) in playerStats"
        :key="i"
        class="list-group-item d-flex justify-content-between align-items-center"
      >
        <div class="row w-100">
          <div class="col-11">
            {{ p.team }} - #{{ p.player }} | {{ p.type }} | Time:
            {{ formatTime(p.gameClock) }} | Quarter: {{ p.quarter }}
          </div>
          <div class="col-1 text-end">
            <button class="btn btn-danger btn-sm float-end" @click="$emit('removePlayerStat', i)"
              >X</button
            >
          </div>
        </div>
      </li>
    </ul>
    <button
      class="btn btn-outline-secondary mt-3 w-100"
      @click="$emit('clearPlayerStat')"
    >
      Clear All
    </button>
  </div>
</template>
<script setup>
const props = defineProps(["playerStats"]);
function formatTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, "0");
  const s = String(sec % 60).padStart(2, "0");
  return `${m}:${s}`;
}
</script>
