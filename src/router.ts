import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import AboutView from './pages/About.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})