<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg bg-white">
    <img :src="product.image" :alt="product.name" class="w-full h-48 object-cover" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ product.name }}</div>
      <p class="text-gray-700 text-base truncate">
        {{ product.description }}
      </p>
      <div class="mt-4">
        <span class="text-lg font-semibold text-gray-900">${{ product.price }}</span>
      </div>
    </div>
    <div class="px-6 py-4 flex flex-wrap items-center">
      <span
        v-for="color in product.colors"
        :key="color"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >
        {{ color }}
      </span>
    </div>
    <div class="px-6 py-4 flex flex-wrap items-center">
      <span
        v-for="size in product.sizes"
        :key="size"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >
        Size: {{ size }}
      </span>
    </div>
    <div class="px-6 py-4">
      <router-link
        :to="`/product/${product.id}`"
        class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
      >
        View Product
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'

interface Product {
  id: number
  name: string
  description: string
  price: number
  sizes: string[]
  colors: string[]
  image: string
}

export default defineComponent({
  name: 'ProductCard',
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
})
</script>

<style scoped>
.truncate {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
