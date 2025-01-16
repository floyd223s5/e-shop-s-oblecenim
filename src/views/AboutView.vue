<template>
  <div class="container mx-auto px-6 py-12">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-6">About Otaruwear</h1>
      <p class="text-gray-700 text-lg leading-relaxed">
        Welcome to Otaruwear, where anime meets fashion. We create custom-made, embroidered clothing
        inspired by your favorite anime characters.
      </p>
    </div>
    <div>
      <h2 class="text-3xl font-bold text-gray-900 text-center mb-8">In 2024, we achieved:</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-5">
        <div class="bg-blue-100 border-l-4 border-blue-500 p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold text-blue-900 mb-2">1M Followers on Instagram</h3>
          <p class="text-blue-800">
            Our designs captured hearts worldwide, and our Instagram community reached 1 million
            anime fashion enthusiasts.
          </p>
        </div>
        <div class="bg-green-100 border-l-4 border-green-500 p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold text-green-900 mb-2">100K Custom Orders Shipped</h3>
          <p class="text-green-800">
            Over 100,000 custom embroidered pieces were shipped to happy customers, bringing their
            favorite anime closer to their hearts.
          </p>
        </div>
        <div class="bg-yellow-100 border-l-4 border-yellow-500 p-6 rounded-lg shadow-lg">
          <h3 class="text-2xl font-semibold text-yellow-900 mb-2">
            Sustainable Practices Launched
          </h3>
          <p class="text-yellow-800">
            We took a step towards sustainability by introducing eco-friendly packaging and reducing
            waste in our production process.
          </p>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center mb-16">
      <div class="md:w-1/2">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Past</h2>
        <p class="text-gray-700 text-lg leading-relaxed mb-4">
          Otaruwear began in 2020 with a small group of anime enthusiasts passionate about creating
          unique, personalized clothing. Starting from a tiny workshop, we spent countless nights
          designing and perfecting embroidery that would bring anime fans closer to their favorite
          characters.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed">
          With a dedication to craftsmanship and individuality, we turned simple hoodies and
          T-shirts into wearable pieces of art. Our first big milestone came when our online
          community embraced us, and we started shipping worldwide.
        </p>
      </div>
      <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0">
        <div class="overflow-hidden rounded-lg shadow-md h-80">
          <img
            src="/src/assets/IMG_6758.jpg"
            alt="Otaruwear Workshop"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
    <div class="flex flex-col md:flex-row items-center mb-16">
      <div class="md:w-1/2 md:order-2">
        <h2 class="text-3xl font-bold text-gray-900 mb-4">Our Future</h2>
        <p class="text-gray-700 text-lg leading-relaxed mb-4">
          At Otaruwear, our journey is just beginning. We aim to expand our collection with more
          intricate designs, new anime-inspired themes, and eco-friendly materials. Our goal is to
          remain the top choice for anime fans looking to express their passion through fashion.
        </p>
        <p class="text-gray-700 text-lg leading-relaxed">
          By 2025, we plan to introduce augmented reality (AR) previews, allowing customers to see
          how their custom pieces will look before production. Otaruwear is also committed to
          sustainability, ensuring every product is crafted responsibly.
        </p>
      </div>
      <div class="md:w-1/2 md:pl-8 mt-8 md:mt-0 px-5">
        <div class="overflow-hidden rounded-lg shadow-md h-80">
          <img
            src="/src/assets/IMG_0898.jpeg"
            alt="Otaruwear Workshop"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AboutView',
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
