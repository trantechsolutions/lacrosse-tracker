<template>
    <div class="penalty-form mb-4">
      <h5 class="text-center">Player Stats</h5>
      <ul class="list-group">
        <li v-for="(p, i) in playerStats" :key="i" class="list-group-item">
          {{ p.team }} - #{{ p.player }} | {{ p.type }} | Time: {{ formatTime(p.gameClock) }}
          <button class="btn btn-sm btn-outline-danger float-end" @click="$emit('removePlayerStat', i)">X</button>
        </li>
      </ul>
      <button class="btn btn-outline-secondary mt-3 w-100" @click="$emit('clearPlayerStat')">Clear All</button>
    </div>
  </template>
  <script setup>
  const props = defineProps(['playerStats'])
  function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, '0')
    const s = String(sec % 60).padStart(2, '0')
    return `${m}:${s}`
  }
  </script>