<template>
  <div>
    <router-view />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useScoreboardStore } from "@/stores/scoreboard";

const scoreboard = useScoreboardStore();

const { startListening, stopListening } = scoreboard

onMounted(() => {
  startListening
})

onUnmounted(() => {
  stopListening
})

</script>