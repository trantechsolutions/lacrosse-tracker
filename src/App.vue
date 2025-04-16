<template>
  <div>
    <router-view />
    <nav class="navbar fixed-bottom bg-dark">
      <div class="container-fluid">
        <div class="float-start m-2">
          <button class="btn btn-secondary btn-sm me-2" @click="exportDataToFirebase">
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

<script>
import { computed } from 'vue';
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from "@/firebase";  // Import Firebase auth
import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

export default {
  data() {
    return {
      user: null,  // Will hold the authenticated user
      isAllowed: false,  // Flag to track if the user is allowed
      allowedEmails: ["jonny5v@gmail.com"], // List of allowed emails
      isPublicView: false
    };
  },
  created() {
    // Listen for authentication state changes
    auth.onAuthStateChanged((user) => {
      this.user = user;
      if (this.user) {
        // Check if the user's email is in the allowed list
        this.isAllowed = this.allowedEmails.includes(this.user.email);
      } else {
        this.isAllowed = false;
      }
    });
  },
  methods: {
    loginWithGoogle() {
      const provider = new GoogleAuthProvider();

      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log("User signed in: ", user);
          // Handle user data as needed (e.g., navigate to another page)
        })
        .catch((error) => {
          console.error("Error during Google sign-in: ", error);
        });
    },
    logout() {
      signOut(auth).then(() => {
        console.log("User signed out");
        // Handle post-logout actions (e.g., redirect to login page)
        this.$router.push('/');  // This redirects to the homepage (PublicViewer)
      }).catch((error) => {
        console.error("Error signing out:", error);
      });
    },
    async exportDataToFirebase() {
      const gameData = JSON.parse(localStorage.getItem("currentGame"))
      try {
        const docRef = await addDoc(collection(db, "games"), gameData);
        console.log("Game saved with ID:", docRef.id);
      } catch (error) {
        console.error("Failed to save game:", error);
      }
    },
    async newGame() {
      // Get the current game data from your source
      const gameData = JSON.parse(localStorage.getItem("currentGame")) || {
        game: "Untitled",
        score: { home: 0, away: 0 },
        created: new Date().toISOString(),
      };

      // Save it to Firebase
      await this.exportDataToFirebase(gameData);

      // Clear the current game and prepare for new one
      localStorage.removeItem("currentGame");
      console.log("Starting new game...");

      // Redirect to Control page (or however you initialize a new game)
      this.$router.push('/control');
    }
  }
};
</script>