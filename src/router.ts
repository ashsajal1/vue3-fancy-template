import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './pages/Home.vue'
import AboutView from './pages/About.vue'
import NotFound from './pages/NotFound.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/:pathMatch(.*)*', component: NotFound },
]

export const router = createRouter({
  history: createMemoryHistory(),
  routes,
})