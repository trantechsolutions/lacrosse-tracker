import { createRouter, createWebHistory } from 'vue-router'
import PublicViewer from '@/views/PublicViewer.vue'
import GameController from '@/views/GameController.vue'
import { auth } from '@/firebase'; // Import Firebase auth

// Simulate authentication check based on Firebase auth state
const isAuthenticated = () => {
  return new Promise((resolve, reject) => {
    auth.onAuthStateChanged(user => {
      if (user) {
        // Check if the user's email is in the allowed list
        resolve(user);
      } else {
        reject('Not authenticated');
      }
    });
  });
};

const routes = [
  { path: '/', name: 'PublicViewer', component: PublicViewer },
  {
    path: '/control',
    name: 'GameController',
    component: GameController,
    props: route => ({ isPublicView: route.query.isPublicView }),
    beforeEnter: async (to, from, next) => {
      try {
        const user = await isAuthenticated(); // Check if the user is authenticated
        const allowedEmails = ["jonny5v@gmail.com"]; // Define allowed emails
        if (allowedEmails.includes(user.email)) {
          next(); // Allow access to the GameController page
        } else {
          next({ name: 'PublicViewer' }); // Redirect to public viewer if not allowed
        }
      } catch (error) {
        next({ name: 'PublicViewer' }); // Redirect to public viewer if not authenticated
      }
    }
  }
];

const router = createRouter({
  history: createWebHistory('/lacrosse-tracker/'),
  routes,
})

export default router
