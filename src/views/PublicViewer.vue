<template>
  <div class="container-fluid">
    <HeaderSection
      :quarter="scoreboard.quarter"
      :gameClock="scoreboard.gameClock"
      :shotClock="scoreboard.shotClock"
      :isClockRunning="scoreboard.isClockRunning"
      :isPublicView="true"
    />
    <ScoreSection
      :score="scoreboard.score"
      :timeouts="scoreboard.timeouts"
      :home="scoreboard.home"
      :away="scoreboard.away"
      :activePenalties="scoreboard.activePenalties"
      :isClockRunning="scoreboard.isClockRunning"
      :isPublicView="true"
    />
  </div>
</template>

<script setup>
import { useScoreboardStore } from '@/stores/scoreboard'

import HeaderSection from '@/components/HeaderSection.vue'
import ScoreSection from '@/components/ScoreSection.vue'

const scoreboard = useScoreboardStore()

</script>
