<template>
  <footer class="bg-gray-50 text-gray-800 py-12">
    <div class="container mx-auto px-6">
      <div
        class="flex flex-col md:flex-row justify-between items-center md:items-start space-y-12 md:space-y-0"
      >
        <!-- About Section -->
        <div class="w-full md:w-1/3 text-center md:text-left">
          <h2 class="text-2xl font-extrabold text-gray-900 mb-4">Otaruwear</h2>
          <p class="text-gray-600 leading-relaxed">
            Discover the latest trends in fashion. High-quality clothing that makes you stand out.
          </p>
        </div>

        <!-- Quick Links -->
        <div class="w-full md:w-1/3 text-center md:text-left">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <ul class="space-y-3">
            <li>
              <router-link to="/" class="text-gray-600 hover:text-gray-900 transition duration-200">
                Home
              </router-link>
            </li>
            <li>
              <router-link
                to="/shop"
                class="text-gray-600 hover:text-gray-900 transition duration-200"
              >
                Shop
              </router-link>
            </li>
            <li>
              <router-link
                to="/about"
                class="text-gray-600 hover:text-gray-900 transition duration-200"
              >
                About Us
              </router-link>
            </li>
            <li>
              <router-link
                to="/contact"
                class="text-gray-600 hover:text-gray-900 transition duration-200"
              >
                Contact Us
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Section -->
        <div class="w-full md:w-1/3 text-center md:text-left">
          <h3 class="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
          <ul class="space-y-3">
            <li class="text-gray-600">Email: support@otaruwear.com</li>
            <li class="text-gray-600">Phone: +123 456 789</li>
            <li class="text-gray-600">Address: 123 Fashion Street, NY</li>
          </ul>
        </div>
      </div>

      <div class="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
        <p>&copy; 2025 Otaruwear. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: 'FooterBar',
}
</script>

<style scoped>
/* Importing modern font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');

:root {
  font-family: 'Inter', sans-serif;
}
</style>
