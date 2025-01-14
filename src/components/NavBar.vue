<template>
  <nav class="bg-white shadow-md">
    <div class="container mx-auto flex justify-between items-center px-6 py-4">
      <router-link to="/" class="text-3xl font-extrabold text-gray-900 tracking-wide">
        OTARUWEAR
      </router-link>

      <div class="hidden md:flex space-x-8 text-lg font-medium">
        <router-link
          to="/shop"
          class="text-gray-600 hover:text-gray-900 transition duration-200"
          :class="{ 'text-gray-900 font-semibold': isActive('/shop') }"
        >
          Shop
        </router-link>
        <router-link
          to="/about"
          class="text-gray-600 hover:text-gray-900 transition duration-200"
          :class="{ 'text-gray-900 font-semibold': isActive('/about') }"
        >
          About
        </router-link>
        <router-link
          to="/contact"
          class="text-gray-600 hover:text-gray-900 transition duration-200"
          :class="{ 'text-gray-900 font-semibold': isActive('/contact') }"
        >
          Contact
        </router-link>
      </div>

      <button class="md:hidden" @click="toggleMenu" aria-label="Toggle Menu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      <div
        v-if="mobileMenuOpen"
        class="absolute top-16 left-0 w-full bg-white shadow-md p-6 md:hidden"
      >
        <router-link
          to="/shop"
          class="block py-2 text-gray-600 hover:text-gray-900 transition duration-200"
          @click="toggleMenu"
        >
          Shop
        </router-link>
        <router-link
          to="/about"
          class="block py-2 text-gray-600 hover:text-gray-900 transition duration-200"
          @click="toggleMenu"
        >
          About
        </router-link>
        <router-link
          to="/contact"
          class="block py-2 text-gray-600 hover:text-gray-900 transition duration-200"
          @click="toggleMenu"
        >
          Contact
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavBar',
  data() {
    return {
      mobileMenuOpen: false,
    }
  },
  computed: {
    route() {
      return this.$route
    },
  },
  methods: {
    toggleMenu() {
      this.mobileMenuOpen = !this.mobileMenuOpen
    },
    isActive(path: string) {
      return this.route.path === path
    },
  },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  font-family: 'Inter', sans-serif;
}
</style>
