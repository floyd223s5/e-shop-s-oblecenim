<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold text-center text-gray-900 mb-8">Hoodies</h1>
    <p class="text-center text-gray-600 mb-8">
      Browse our exclusive collection of hoodies, crafted for comfort and style.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <ProductCard v-for="product in filteredProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import products from '@/data/products.json'
import ProductCard from '@/components/ProductCard.vue'

export default defineComponent({
  name: 'HoodiesView',
  components: {
    ProductCard,
  },
  setup() {
    const filteredProducts = computed(() =>
      products.filter((product) => product.category === 'Hoodies'),
    )

    return { filteredProducts }
  },
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
