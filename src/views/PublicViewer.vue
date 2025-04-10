<template>
    <div class="container-fluid py-3">
      <HeaderSection :quarter="quarter" :gameClock="gameClock" :shotClock="shotClock" :isClockRunning="isClockRunning" :isPublicView=true />
      <ScoreSection :score="score" :timeouts="timeouts" :home="home" :away="away" :activePenalties="[]" :isClockRunning="true" :isPublicView=true  />
    </div>
  </template>
  
  <script setup>
  import HeaderSection from '@/components/HeaderSection.vue'
  import ScoreSection from '@/components/ScoreSection.vue'
  
  import { ref, onMounted } from 'vue'
  import { db } from '@/firebase'
  import { ref as dbRef, onValue } from 'firebase/database'
  
  const score = ref({ home: 0, away: 0 })
  const timeouts = ref({ home: 2, away: 2 })
  const gameClock = ref(720)
  const shotClock = ref(80)
  const isClockRunning = ref(false)
  const quarter = ref(1)
  const home = ref('Home')
  const away = ref('Away')
  
  onMounted(() => {
    const scoreboardRef = dbRef(db, '/scoreboard')
    onValue(scoreboardRef, (snapshot) => {
      const data = snapshot.val()
      if (data) {
        score.value = data.score
        timeouts.value = data.timeouts
        gameClock.value = data.gameClock
        shotClock.value = data.shotClock
        isClockRunning.value = data.isClockRunning
        quarter.value = data.quarter
        home.value = data.home
        away.value = data.away
      }
    })
  })
  </script>
  