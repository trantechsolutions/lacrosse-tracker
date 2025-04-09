import { createRouter, createWebHistory } from 'vue-router'
import PublicViewer from '../views/PublicViewer.vue'
import GameController from '../views/GameController.vue'
import StatTracker from '../views/StatTracker.vue'
import Penalties from '@/views/Penalties.vue'

const routes = [
  { path: '/', name: 'PublicViewer', component: PublicViewer },
  { path: '/control', name: 'GameController', component: GameController },
  { path: '/penalties', name: 'Penalties', component: Penalties },
  { path: '/stats', name: 'StatTracker', component: StatTracker },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
