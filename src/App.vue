<template>
  <div>
    <router-view />
    <div class="container mb-2">
      <div class="position-fixed bottom-0 end-0 m-2">
          <router-link to="/" class="btn btn-outline-secondary btn-sm me-2">Public</router-link>
          <router-link v-if="user && isAllowed" to="/control" class="btn btn-outline-primary btn-sm me-2">Control</router-link>
          <router-link v-if="user && isAllowed" to="/stats" class="btn btn-outline-success btn-sm me-2">Stats</router-link>
          <button class="btn btn-secondary btn-sm" v-if="!user" @click="loginWithGoogle">Login to Access Controls</button>
          <p v-if="user && !isAllowed">You are not authorized to access this content.</p>
          <button v-if="user" class="btn btn-danger btn-sm" @click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, GoogleAuthProvider, signInWithPopup, signOut } from "@/firebase";  // Import Firebase auth

export default {
  data() {
    return {
      user: null,  // Will hold the authenticated user
      isAllowed: false,  // Flag to track if the user is allowed
      score: 0,
      gameTime: "12:00",
      allowedEmails: ["jonny5v@gmail.com"], // List of allowed emails
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
    startGame() {
      // Logic to start the game
    },
    pauseGame() {
      // Logic to pause the game
    },
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
      }).catch((error) => {
        console.error("Error signing out:", error);
      });
    }
  }
};
</script>

<style scoped>
.navbar a.router-link-exact-active {
  font-weight: bold;
  text-decoration: underline;
}
</style>
