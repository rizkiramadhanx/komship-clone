<script setup lang="ts">
import Hero from '@/components/section/Hero.vue'
import Navbar from '@/components/section/Navbar.vue'
</script>

<script lang="ts">
export default {
  name: 'Home',
  components: { Navbar, Hero }
}
</script>

<template><Navbar /><Hero /></template>
