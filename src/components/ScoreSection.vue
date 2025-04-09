<template>
    <div class="row text-center align-items-start mb-4">
      <TeamPanel
        teamLabel="home" :score="score.home" :timeouts="timeouts.home" :penalties="activePenalties.filter(p => p.team === 'home')"
        :isClockRunning="isClockRunning" :teamName="home" :isPublicView="isPublicView"
        @adjustScore="amt => $emit('adjustScore', 'home', amt)"
        @adjustTimeout="amt => $emit('adjustTimeout', 'home', amt)"
        @editName="() => $emit('editName', 'home')"
        @removePenalty="i => $emit('removePenalty', i)"
      />
      <TeamPanel
        teamLabel="away" :score="score.away" :timeouts="timeouts.away" :penalties="activePenalties.filter(p => p.team === 'away')"
        :isClockRunning="isClockRunning" :teamName="away" :isPublicView="isPublicView"
        @adjustScore="amt => $emit('adjustScore', 'away', amt)"
        @adjustTimeout="amt => $emit('adjustTimeout', 'away', amt)"
        @editName="() => $emit('editName', 'away')"
        @removePenalty="i => $emit('removePenalty', i)"        
      />
    </div>
  </template>
  <script setup>
  import TeamPanel from './TeamPanel.vue'
  const props = defineProps(['score', 'timeouts', 'home', 'away', 'activePenalties', 'isClockRunning', 'isPublicView'])
  </script>