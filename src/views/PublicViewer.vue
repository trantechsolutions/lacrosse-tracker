<template>
  <div class="container-fluid">
    <HeaderSection isPublicView="true" />
    <!-- <ScoreSection
      :score="scoreboard.score"
      :timeouts="scoreboard.timeouts"
      :home="scoreboard.home"
      :away="scoreboard.away"
      :activePenalties="scoreboard.activePenalties"
      :isClockRunning="scoreboard.isClockRunning"
      :isPublicView="true"
    /> -->
  </div>
</template>

<script setup>
import { useScoreboardStore } from '@/stores/store'

import HeaderSection from '@/components/HeaderSection.vue'

</script>
