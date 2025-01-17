<template>
  <div class="container mx-auto px-6 py-12">
    <div class="flex flex-col md:flex-row items-center md:items-start">
      <img
        :src="product?.image"
        :alt="product?.name"
        class="w-full md:w-1/2 h-96 object-cover rounded-lg shadow-md"
      />
      <div class="md:ml-8 mt-6 md:mt-0">
        <h1 class="text-3xl font-extrabold text-gray-900">{{ product?.name }}</h1>
        <p class="text-gray-600 mt-4">{{ product?.description }}</p>
        <p class="text-xl font-semibold text-gray-900 mt-4">Price: ${{ product?.price }}</p>

        <div class="mt-6">
          <h3 class="text-lg font-medium text-gray-900">Available Sizes</h3>
          <div class="flex space-x-2 mt-2">
            <span
              v-for="size in product?.sizes"
              :key="size"
              @click="selectSize(size)"
              :class="[
                'px-4 py-2 rounded-full text-sm cursor-pointer',
                selectedSize === size ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800',
              ]"
            >
              {{ size }}
            </span>
          </div>
        </div>

        <div class="mt-6">
          <h3 class="text-lg font-medium text-gray-900">Available Colors</h3>
          <div class="flex space-x-2 mt-2">
            <span
              v-for="color in product?.colors"
              :key="color"
              @click="selectColor(color)"
              :class="[
                'w-8 h-8 rounded-full border-2 cursor-pointer',
                selectedColor === color ? 'border-blue-500' : 'border-gray-300',
              ]"
              :style="{ backgroundColor: color.toLowerCase() }"
            ></span>
          </div>
        </div>

        <div class="relative mt-8">
          <LoadingSpinner :visible="isLoading" />
          <button
            v-if="!isLoading"
            class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
            @click="addToCart"
            :disabled="!selectedSize || !selectedColor"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>

    <AlertMessage
      v-if="alertVisible"
      :message="alertMessage"
      type="success"
      @close="alertVisible = false"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cartStore.ts'
import AlertMessage from '@/components/AlertMsg.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'
import products from '@/data/products.json'

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
  name: 'ProductDetailsView',
  components: {
    AlertMessage,
    LoadingSpinner,
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      product: null as Product | null,
      selectedSize: null as string | null,
      selectedColor: null as string | null,
      alertVisible: false,
      alertMessage: '',
      isLoading: false,
    }
  },
  computed: {
    cartStore() {
      return useCartStore()
    },
  },
  methods: {
    selectSize(size: string) {
      this.selectedSize = size
    },
    selectColor(color: string) {
      this.selectedColor = color
    },
    addToCart() {
      if (!this.product) {
        console.error('Product is null')
        return
      }

      if (!this.selectedSize || !this.selectedColor) {
        console.error('Size or color not selected')
        return
      }

      this.isLoading = true

      setTimeout(() => {
        this.cartStore.addToCart({
          id: this.product!.id,
          name: this.product!.name,
          price: this.product!.price,
          image: this.product!.image,
          size: this.selectedSize as string,
          color: this.selectedColor as string,
        })

        this.alertMessage = `${this.product!.name} (${this.selectedSize}, ${this.selectedColor}) has been added to the cart!`
        this.alertVisible = true
        this.isLoading = false

        setTimeout(() => {
          this.alertVisible = false
        }, 3000)
      }, 2000)
    },
  },
  created() {
    this.product = products.find((p) => p.id === parseInt(this.id, 10)) || null
    if (!this.product) {
      this.$router.push('/')
    }
  },
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}

button[disabled] {
  cursor: not-allowed;
  opacity: 0.6;
}
</style>
