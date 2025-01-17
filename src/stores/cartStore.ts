import { defineStore } from 'pinia'

interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
  image: string
  size: string
  color: string
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
    addToCart(product: Omit<CartItem, 'quantity'>) {
      const existingItem = this.items.find(
        (item) =>
          item.id === product.id && item.size === product.size && item.color === product.color,
      )

      if (existingItem) {
        existingItem.quantity++
      } else {
        this.items.push({ ...product, quantity: 1 })
      }
      this.saveCart()
    },
    removeFromCart(productId: number, size: string, color: string) {
      this.items = this.items.filter(
        (item) => !(item.id === productId && item.size === size && item.color === color),
      )
      this.saveCart()
    },
    updateQuantity(productId: number, size: string, color: string, quantity: number) {
      const item = this.items.find(
        (item) => item.id === productId && item.size === size && item.color === color,
      )
      if (item) {
        if (quantity > 0) {
          item.quantity = quantity
        } else {
          this.removeFromCart(productId, size, color)
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
