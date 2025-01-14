<template>
  <div>
    <div class="relative overflow-hidden">
      <div
        class="carousel w-full flex transition-transform duration-700 ease-in-out"
        :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
      >
        <div
          v-for="(image, index) in carouselImages"
          :key="index"
          class="carousel-item w-full flex-shrink-0"
        >
          <img :src="image" alt="Carousel Image" class="w-full h-64 md:h-96 object-cover" />
        </div>
      </div>

      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <button
          v-for="(image, index) in carouselImages"
          :key="'indicator-' + index"
          @click="currentSlide = index"
          :class="['w-3 h-3 rounded-full', currentSlide === index ? 'bg-blue-600' : 'bg-gray-400']"
        ></button>
      </div>
    </div>

    <div class="container mx-auto px-4 py-12">
      <h1 class="text-3xl font-bold text-center text-gray-900 mb-4">Latest Products</h1>
      <p class="text-center text-gray-600 mb-8">
        Check out the newest additions to our collection.
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import products from '@/data/products.json'
import ProductCard from '@/components/ProductCard.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    ProductCard,
  },
  data() {
    return {
      products: products.slice(0, 8),
      carouselImages: [
        '/src/assets/carousel/car_1.jpg',
        '/src/assets/carousel/car_2.jpg',
        '/src/assets/carousel/car_3.jpg',
      ],
      currentSlide: 0,
    }
  },
  mounted() {
    this.startCarousel()
  },
  methods: {
    startCarousel() {
      setInterval(() => {
        this.currentSlide = (this.currentSlide + 1) % this.carouselImages.length
      }, 3000)
    },
  },
})
</script>

<style scoped>
.carousel {
  display: flex;
}
.carousel-item {
  flex: 0 0 100%;
}
</style>
