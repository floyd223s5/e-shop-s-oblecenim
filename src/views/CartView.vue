<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold text-center text-gray-900 mb-8">Shopping Cart</h1>

    <p v-if="cartStore.items.length === 0" class="text-center text-gray-600">
      Your cart is empty. Start shopping!
    </p>

    <div v-else>
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div
          v-for="item in cartStore.items"
          :key="item.id"
          class="flex items-center bg-white rounded-lg shadow-md p-4"
        >
          <img
            :src="item.image"
            alt="Product Image"
            class="w-24 h-24 object-cover rounded-lg mr-4"
          />

          <div class="flex-1">
            <h2 class="text-lg font-bold text-gray-900">{{ item.name }}</h2>
            <p class="text-gray-600 mt-1">Price: ${{ item.price.toFixed(2) }}</p>
            <div class="mt-4 flex items-center">
              <label for="quantity" class="text-sm font-medium text-gray-700 mr-2">Quantity:</label>
              <input
                id="quantity"
                type="number"
                v-model.number="item.quantity"
                min="1"
                class="w-16 px-2 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
                @change="updateQuantity(item.id, item.quantity)"
              />
            </div>
          </div>

          <button
            @click="removeFromCart(item.id)"
            class="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
          >
            Remove
          </button>
        </div>
      </div>

      <div class="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
        <h2 class="text-xl font-bold text-gray-900 mb-4">Cart Summary</h2>
        <div class="flex justify-between text-gray-700">
          <p>Total Items:</p>
          <p>{{ cartStore.totalItems }}</p>
        </div>
        <div class="flex justify-between text-gray-700 mt-2">
          <p>Total Price:</p>
          <p>${{ cartStore.totalPrice.toFixed(2) }}</p>
        </div>
        <button class="mt-6 w-full bg-blue-600 text-white py-3 px-4 rounded-md hover:bg-blue-700">
          Proceed to Checkout
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '@/stores/cartStore'

export default defineComponent({
  name: 'CartView',
  data() {
    return {
      cartStore: useCartStore(),
    }
  },
  methods: {
    removeFromCart(id: number) {
      this.cartStore.removeFromCart(id)
    },
    updateQuantity(id: number, quantity: number) {
      if (quantity > 0) {
        this.cartStore.updateQuantity(id, quantity)
      }
    },
  },
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
