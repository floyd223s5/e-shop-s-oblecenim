<template>
  <div class="container mx-auto px-6 py-12">
    <h1 class="text-3xl font-bold text-center text-gray-900 mb-8">Contact Us</h1>
    <p class="text-center text-gray-600 mb-8">
      We'd love to hear from you! Fill out the form below, and we'll get back to you as soon as
      possible.
    </p>

    <AlertMessage
      v-if="alertVisible"
      :message="alertMessage"
      type="success"
      @close="alertVisible = false"
    />

    <form class="max-w-lg mx-auto bg-white shadow-md rounded-lg p-6" @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          v-model="name"
          class="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        />
      </div>

      <div class="mb-4">
        <label for="message" class="block text-sm font-medium text-gray-700">Message</label>
        <textarea
          id="message"
          v-model="message"
          rows="5"
          class="w-full mt-1 px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          required
        ></textarea>
      </div>

      <div class="relative">
        <LoadingSpinner :visible="isLoading" />
        <button
          v-if="!isLoading"
          type="submit"
          class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
        >
          Send Message
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AlertMessage from '@/components/AlertMsg.vue'
import LoadingSpinner from '@/components/LoadingSpinner.vue'

export default defineComponent({
  name: 'ContactView',
  components: {
    AlertMessage,
    LoadingSpinner,
  },
  data() {
    return {
      name: '',
      email: '',
      message: '',
      alertVisible: false,
      alertMessage: '',
      isLoading: false,
    }
  },
  methods: {
    handleSubmit() {
      this.isLoading = true

      setTimeout(() => {
        this.alertMessage = 'Your message has been sent successfully!'
        this.alertVisible = true

        console.log('Name:', this.name)
        console.log('Email:', this.email)
        console.log('Message:', this.message)

        this.name = ''
        this.email = ''
        this.message = ''

        this.isLoading = false

        setTimeout(() => {
          this.alertVisible = false
        }, 3000)
      }, 2000) // Simulates a 2-second delay for form submission
    },
  },
})
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
