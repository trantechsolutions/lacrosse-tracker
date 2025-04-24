<template>
  <div>
    <router-view />
    <nav v-if="!authStore.authenticated" class="navbar fixed-bottom bg-dark">
      <div class="container-fluid">
        <div class="float-end m-2">
          <button v-if="!authStore.authenticated" class="btn btn-secondary btn-sm" @click="authStore.loginWithGoogle">Log In</button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { useScoreboardStore, useAuthStore } from "@/stores/store";

const scoreboard = useScoreboardStore();
const authStore = useAuthStore();

onMounted(() => {
  scoreboard.startListening
})

onUnmounted(() => {
  scoreboard.stopListening
})

</script>