<template>
  <div class="container-fluid py-3">
    <HeaderSection :isPublicView="false" />

    <ScoreSection :isPublicView="false" />
    <div class="row">
      <div class="col-6">
        <PenaltyForm />
      </div>
      <div class="col-6">
        <PlayerStatsForm />
      </div>
    </div>
    <nav class="navbar fixed-bottom bg-dark">
      <div class="container-fluid">
        <div class="float-start m-2">
          <button v-if="authStore.authenticated" class="btn btn-danger btn-sm me-2" @click="authStore.logout">
            Logout
          </button>
          <button class="btn btn-secondary btn-sm me-2" @click="scoreboard.exportData">
            Export Data
          </button>
          <button class="btn btn-success btn-sm" @click="scoreboard.newGame">
            New Game
          </button>
        </div>
        <div class="float-end m-2">
          <button class="btn btn-primary btn-sm me-2" @click="scoreboard.openPenaltyForm"><i class="bi bi-plus"></i> Add Penalty</button>
          <button class="btn btn-primary btn-sm" @click="scoreboard.openAddPlayerStatForm"><i class="bi bi-plus"></i> Add Player Stat</button>
            <!-- <router-link to="/" class="btn btn-secondary btn-sm me-2">Public</router-link>
            <router-link v-if="user && isAllowed" to="/control" class="btn btn-primary btn-sm me-2">Control</router-link>
            <button class="btn btn-danger btn-sm" v-if="!user" @click="scoreboard.loginWithGoogle">Login to Access Controls</button>
            <p v-if="user && !isAllowed">You are not authorized to access this content.</p>
            <button v-if="user" class="btn btn-danger btn-sm" @click="scoreboard.logout">Logout</button> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { useScoreboardStore, useAuthStore } from "@/stores/store";

import HeaderSection from "@/components/HeaderSection.vue";
import ScoreSection from "@/components/ScoreSection.vue";
import PenaltyForm from "@/components/PenaltyForm.vue";
import PlayerStatsForm from "@/components/PlayerStatsForm.vue";

const scoreboard = useScoreboardStore();
const authStore = useAuthStore();

const props = defineProps({ isPublicView: Boolean })
</script>
