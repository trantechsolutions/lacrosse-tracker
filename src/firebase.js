import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut  } from 'firebase/auth';  // Import Firebase Authentication

const firebaseConfig = {
  apiKey: "AIzaSyBA6z3KtW9-3XxqvvsudpSPOls0isD7xx8",
  authDomain: "lax-scoreboard.firebaseapp.com",
  databaseURL: "https://lax-scoreboard-default-rtdb.firebaseio.com",
  projectId: "lax-scoreboard",
  storageBucket: "lax-scoreboard.appspot.com",
  messagingSenderId: "560143102921",
  appId: "1:560143102921:web:6e3a5d98726cecceeeae18"
}

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Firebase Realtime Database
export const db = getDatabase(app);

// Initialize Firebase Authentication
export const auth = getAuth(app);  // Export the auth instance for use in your app

// Export the signInWithPopup and signOut methods for use in other files
export { GoogleAuthProvider, signInWithPopup, signOut };