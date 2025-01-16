<template>
  <div
    v-if="visible"
    :class="[
      'p-4 rounded shadow-md text-white',
      type === 'success' ? 'bg-green-500' : '',
      type === 'error' ? 'bg-red-500' : '',
      type === 'info' ? 'bg-blue-500' : '',
    ]"
  >
    <p>{{ message }}</p>
    <button class="ml-4 text-white underline" @click="closeAlert">Close</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'AlertMessage',
  props: {
    message: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: 'info',
    },
  },
  data() {
    return {
      visible: true,
    }
  },
  methods: {
    closeAlert() {
      this.visible = false
    },
  },
})
</script>

<style scoped>
.alert {
  transition: opacity 0.3s ease;
}
.alert.hidden {
  opacity: 0;
  pointer-events: none;
}
</style>
