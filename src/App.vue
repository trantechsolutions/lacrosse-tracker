<template>
  <div>
    <router-view />
    <button v-if="showInstallButton" @click="installApp" class="install-btn">
      📲 Download App
    </button>
    <Footer />
    <div class="m-3 position-absolute bottom-0 end-0" @click="authStore.loginWithGoogle">&nbsp;</div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useScoreboardStore, useAuthStore} from "@/stores/store";

import Footer from './components/Footer.vue';

const scoreboard = useScoreboardStore();
const authStore = useAuthStore();

const deferredPrompt = ref(null);
const showInstallButton = ref(false);

onMounted(() => {
  scoreboard.startListening
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();             // Prevent automatic prompt
    deferredPrompt.value = e;       // Save the event for later
    showInstallButton.value = true; // Show the install button
  });
})

onUnmounted(() => {
  scoreboard.stopListening
})

const installApp = async () => {
  if (deferredPrompt.value) {
    deferredPrompt.value.prompt();
    const result = await deferredPrompt.value.userChoice;
    if (result.outcome === 'accepted') {
      console.log('PWA installed');
    } else {
      console.log('PWA install dismissed');
    }
    deferredPrompt.value = null;
    showInstallButton.value = false;
  }
};

</script>

<style scoped>
.install-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 14px;
  background: #007bff;
  color: white;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0,0,0,0.2);
}
</style>