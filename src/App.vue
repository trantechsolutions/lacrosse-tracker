<template>
  <div>
    <router-view />
    <Footer />
    <div class="m-3 position-absolute bottom-0 end-0" @click="authStore.loginWithGoogle">&nbsp;</div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useScoreboardStore, useAuthStore} from "@/stores/store";

import Footer from './components/Footer.vue';

const scoreboard = useScoreboardStore();
const authStore = useAuthStore();

onMounted(() => {
  scoreboard.startListening
})

onUnmounted(() => {
  scoreboard.stopListening
})

</script>