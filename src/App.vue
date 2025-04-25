<template>
  <div>
    <router-view />
    <Footer />
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useScoreboardStore } from "@/stores/store";

import Footer from './components/Footer.vue';

const scoreboard = useScoreboardStore();

onMounted(() => {
  scoreboard.startListening
})

onUnmounted(() => {
  scoreboard.stopListening
})

</script>