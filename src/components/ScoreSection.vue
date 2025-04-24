<template>
  <div class="row text-center align-items-start mb-4">
    <TeamPanel
      teamLabel="home"
      :isPublicView="isPublicView"
    />
    <TeamPanel
      teamLabel="away"
      :isPublicView="isPublicView"
    />
  </div>
</template>
<script setup>
import TeamPanel from "./TeamPanel.vue";
import { onMounted, onUnmounted } from "vue";
import { useScoreboardStore } from "@/stores/scoreboard";

const scoreboard = useScoreboardStore();

onMounted(() => {
  scoreboard.startListening();
});

onUnmounted(() => {
  scoreboard.stopListening();
});

const props = defineProps([
  "isPublicView",
]);
</script>
