<template>
  <div class="container-fluid py-3">
    <HeaderSection :isPublicView="false" />

    <ScoreSection :isPublicView="false" />
    <div class="row">
      <div class="col-6">
        <PenaltyForm />
      </div>
      <div class="col-6">
        <!-- <PlayerStatsForm /> -->
      </div>
    </div>
    <nav class="navbar fixed-bottom bg-dark">
      <div class="container-fluid">
        <div class="float-start m-2">
        <button class="btn btn-secondary btn-sm me-2" @click="scoreboard.exportData">
          Export Data
        </button>
        <button class="btn btn-success btn-sm" @click="newGame">
          New Game
        </button>
      </div>
      <div class="float-end m-2">
          <router-link to="/" class="btn btn-secondary btn-sm me-2">Public</router-link>
          <router-link v-if="user && isAllowed" to="/control" class="btn btn-primary btn-sm me-2">Control</router-link>
          <button class="btn btn-danger btn-sm" v-if="!user" @click="loginWithGoogle">Login to Access Controls</button>
          <p v-if="user && !isAllowed">You are not authorized to access this content.</p>
          <button v-if="user" class="btn btn-danger btn-sm" @click="logout">Logout</button>
      </div>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
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

const props = defineProps({ isPublicView: Boolean, user: String })

const newPenalty = ref({
  team: "home",
  player: "",
  duration: 30,
  category: "crosscheck",
  releasable: true,
});
const newPlayerStat = ref({ player: "", team: "home", type: "goal" });

onMounted(() => {
  scoreboard.startListening();
});

onUnmounted(() => {
  scoreboard.stopListening();
});



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

function loginWithGoogle() {
  const provider = new GoogleAuthProvider();
  
  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in: ", user);
      user.value = user
      // Handle user data as needed (e.g., navigate to another page)
    })
    .catch((error) => {
      console.error("Error during Google sign-in: ", error);
  });
}

function logout() {
  signOut(auth).then(() => {
    console.log("User signed out");
    // Handle post-logout actions (e.g., redirect to login page)
    this.$router.push('/');  // This redirects to the homepage (PublicViewer)
  }).catch((error) => {
    console.error("Error signing out:", error);
  });
}

// async function newGame() {
//   const result = await Swal.fire({
//     title: 'Start a New Game?',
//     text: 'This will archive the current game and reset the scoreboard.',
//     icon: 'warning',
//     showCancelButton: true,
//     confirmButtonColor: '#d33',
//     cancelButtonColor: '#3085d6',
//     confirmButtonText: 'Yes, start new game!',
//   });

//   if (!result.isConfirmed) return;

//   const timestamp = new Date().toISOString();

//   // Step 1: Archive current scoreboard under /games/
//   const archiveRef = dbRef(db, `/games`);
//   const newGameRef = push(archiveRef); // auto-generates a key

//   await set(newGameRef, {
//     archivedAt: timestamp,
//     data: {
//       score: score.value,
//       timeouts: timeouts.value,
//       gameClock: gameClock.value,
//       shotClock: shotClock.value,
//       isClockRunning: isClockRunning.value,
//       quarter: quarter.value,
//       home: home.value,
//       away: away.value,
//       playerStats: playerStats.value,
//       activePenalties: activePenalties.value,
//       expiredPenalties: expiredPenalties.value,
//     },
//   });

//   // Step 2: Reset current game state
//   score.value = { home: 0, away: 0 };
//   timeouts.value = { home: 2, away: 2 };
//   gameClock.value = 720;
//   shotClock.value = 80;
//   isClockRunning.value = false;
//   quarter.value = 1;
//   home.value = "Home";
//   away.value = "Away";
//   playerStats.value = [];
//   activePenalties.value = [];
//   expiredPenalties.value = [];

//   // Clear any running interval
//   if (clockInterval.value) {
//     clearInterval(clockInterval.value);
//     clockInterval.value = null;
//   }

//   updateFirebase();

//   Swal.fire({
//     title: 'New Game Started!',
//     icon: 'success',
//     timer: 1500,
//     showConfirmButton: false,
//   });
// }

// function removePenalty(index, team) {
//   // Filter penalties by team
//   const teamPenalties = activePenalties.value.filter(penalty => penalty.team === team);

//   // Make sure the index is valid for the filtered penalties array
//   if (index < 0 || index >= scoreboard.teamPenalties.length) {
//     Swal.fire({
//       title: "Error",
//       text: "Invalid index for the selected team.",
//       icon: "error",
//       showConfirmButton: true,
//     });
//     return; // Exit function if the index is invalid
//   }

//   // Find the penalty from the filtered penalties array using the given index
//   const penalty = teamPenalties[index];

//   Swal.fire({
//     title: "Remove Penalty?",
//     html: `
//       <strong>Player:</strong> ${penalty.player}<br>
//       <strong>Team:</strong> ${penalty.team}<br>
//       <strong>Duration:</strong> ${penalty.duration} sec
//     `,
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, remove it",
//     cancelButtonText: "Cancel",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       // Get the actual index of the penalty in the original array (activePenalties)
//       const originalIndex = activePenalties.value.findIndex(
//         (p) => p.player === penalty.player && p.team === penalty.team && p.duration === penalty.duration
//       );

//       // Remove the penalty from the original array
//       const removed = activePenalties.value.splice(originalIndex, 1)[0];
//       expiredPenalties.value.push(removed); // Push it to expired penalties
//       updateFirebase();

//       Swal.fire({
//         toast: true,
//         position: "bottom",
//         title: "Removed",
//         text: "The penalty has been moved to expired.",
//         icon: "success",
//         timer: 1200,
//         showConfirmButton: false,
//       });
//     }
//   });
// }



// function checkPenalties() {
//   const remaining = [];
//   for (const p of activePenalties.value) {
//     p.remaining--;
//     if (p.remaining <= 0) expiredPenalties.value.push({ ...p });
//     else remaining.push(p);
//   }
//   activePenalties.value = remaining;
//   updateFirebase();
// }

// function clearPenalties() {
//   Swal.fire({
//     title: "Clear All Expired Penalties?",
//     text: "This will permanently remove all expired penalties from the list.",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, clear them",
//     cancelButtonText: "Cancel",
//   }).then((result) => {

//   if (result.isConfirmed) {
//     expiredPenalties.value = [];
//     updateFirebase();

//     Swal.fire({
//       toast: true,
//       position: "bottom",
//       title: "Cleared",
//       text: "Expired penalties have been removed.",
//       icon: "success",
//       timer: 1200,
//       showConfirmButton: false,
//     });
//   }
// });
// }

// function addPlayerStat(stat) {
//   const enriched = { ...stat, gameClock: gameClock.value, quarter: quarter.value }; // or bring gameClock/quarter from Firebase
//   playerStats.value.push(enriched);
//   updateFirebase();
// }

// // Remove a single player stat without waiting for confirmation
// function removePlayerStat(index) {
//   const playerStat = playerStats.value[index];
//   Swal.fire({
//     title: "Remove Player Stat?",
//     html: `
//       <strong>Player:</strong> ${playerStat.player}<br>
//       <strong>Type:</strong> ${playerStat.type}<br>
//       <strong>Quarter:</strong> ${playerStat.quarter}<br>
//     `,
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, remove it",
//     cancelButtonText: "Cancel",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       playerStats.value.splice(index, 1);
//       updateFirebase();
//       Swal.fire({
//         title: "Removed",
//         text: "Player stat has been removed.",
//         icon: "success",
//         timer: 1200,
//         showConfirmButton: false,
//       });
//     }
//   });
// }

// // Clear all player stats without waiting for confirmation
// function clearPlayerStat() {
//   Swal.fire({
//     title: "Clear All Player Stats?",
//     text: "This will permanently remove all player statistics.",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonText: "Yes, clear them",
//     cancelButtonText: "Cancel",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       playerStats.value = [];
//       updateFirebase();
//       Swal.fire({
//         toast: true,
//         position: "bottom",
//         title: "Cleared",
//         text: "All player stats have been removed.",
//         icon: "success",
//         timer: 1200,
//         showConfirmButton: false,
//       });
//     }
//   });
// }
</script>
