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
          <button class="btn btn-secondary btn-sm me-2" @click="exportData">
            Export Data
          </button>
          <button class="btn btn-success btn-sm" @click="newGame">
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
import { ref } from "vue";
import { useScoreboardStore } from "@/stores/scoreboard";
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from "@/firebase";  // Import Firebase auth

import HeaderSection from "@/components/HeaderSection.vue";
import ScoreSection from "@/components/ScoreSection.vue";
import PenaltyForm from "@/components/PenaltyForm.vue";
import PlayerStatsForm from "@/components/PlayerStatsForm.vue";

const user = ref(null);  // Will hold the authenticated user
const isAllowed = ref(false);  // Flag to track if the user is allowed
const allowedEmails = ref(["jonny5v@gmail.com"]); // List of allowed emails
const isPublicView = ref(false);

const scoreboard = useScoreboardStore();

const { exportData, newGame, startListening, stopListening } = scoreboard

const props = defineProps({ isPublicView: Boolean, user: String })

// Listen for authentication state changes
auth.onAuthStateChanged((user) => {
  console.log(user)
  user.value = user;
  if (user.value) {
    // Check if the user's email is in the allowed list
    isAllowed.value = allowedEmails.value.includes(user.value.email);
  } else {
    isAllowed.value = false;
  }
});


</script>
