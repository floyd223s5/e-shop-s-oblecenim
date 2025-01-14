<template>
  <div id="app">
    <Navbar />
    <router-view />
    <FooterBar />
  </div>
</template>

<script lang="ts">
import Navbar from '@/components/NavBar.vue'
import FooterBar from './components/FooterBar.vue'

export default {
  components: {
    Navbar,
    FooterBar,
  },
}
</script>

<style>
/* Add global styles or reset CSS */
</style>
