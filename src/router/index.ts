import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue'
import About from '@/views/AboutView.vue'
import Contact from '@/views/ContactView.vue'
import ProductDetailsView from '@/views/ProductDetailsView.vue'
import CartView from '@/views/CartView.vue'
import SweatshirtsView from '@/views/SweatshirtsView.vue'
import TShirtsView from '@/views/TShirtsView.vue'
import HoodiesView from '@/views/HoodiesView.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/contact', name: 'Contact', component: Contact },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetailsView,
    props: true,
  },
  { path: '/cart', name: 'Cart', component: CartView },
  { path: '/products/hoodies', component: HoodiesView },
  { path: '/products/t-shirts', component: TShirtsView },
  { path: '/products/sweatshirts', component: SweatshirtsView },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
