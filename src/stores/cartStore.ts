import { defineStore } from 'pinia'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: JSON.parse(localStorage.getItem('cartItems') || '[]') as CartItem[],
  }),
  getters: {
    totalItems(state) {
      return state.items.reduce((count, item) => count + item.quantity, 0)
    },
    totalPrice(state) {
      return state.items.reduce((total, item) => total + item.price * item.quantity, 0)
    },
  },
  actions: {
    addToCart(product: CartItem) {
      const existingItem = this.items.find((item) => item.id === product.id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        product.quantity = 1
        this.items.push(product)
      }
      this.saveCart()
    },
    removeFromCart(productId: number) {
      this.items = this.items.filter((item) => item.id !== productId)
      this.saveCart()
    },
    updateQuantity(productId: number, quantity: number) {
      const item = this.items.find((item) => item.id === productId)
      if (item) {
        if (quantity > 0) {
          item.quantity = quantity
        } else {
          this.removeFromCart(productId)
        }
      }
      this.saveCart()
    },
    clearCart() {
      this.items = []
      this.saveCart()
    },
    saveCart() {
      localStorage.setItem('cartItems', JSON.stringify(this.items))
    },
  },
})
