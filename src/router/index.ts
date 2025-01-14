import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import Shop from '@/views/ShopView.vue'
import About from '@/views/AboutView.vue'
import Contact from '@/views/ContactView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/shop', name: 'Shop', component: Shop },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
