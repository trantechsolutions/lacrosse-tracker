<template>
    <div class="penalty-form mb-4">
      <h5 class="text-center">Expired Penalties</h5>
      <ul class="list-group">
        <li v-for="(p, i) in expiredPenalties" :key="i" class="list-group-item">
          {{ p.team }} {{ p.player ? `- #${p.player}` : '' }} | {{ p.category }} | {{ formatTime(p.startGameClock) }} → {{ formatTime(p.endGameClock) }}
        </li>
      </ul>
      <button v-if="expiredPenalties.length > 0" class="btn btn-danger mt-2" @click="$emit('clearPenalties')">Clear Penalties</button>
    </div>
  </template>
  <script setup>
  const props = defineProps(['expiredPenalties'])
  function formatTime(sec) {
    const m = String(Math.floor(sec / 60)).padStart(2, '0')
    const s = String(sec % 60).padStart(2, '0')
    return `${m}:${s}`
  }
  </script>