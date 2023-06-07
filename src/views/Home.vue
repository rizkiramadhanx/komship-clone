<script setup lang="ts">
import Benefit from '@/components/section/Benefit.vue'
import Hero from '@/components/section/Hero.vue'
import Navbar from '@/components/section/Navbar.vue'
</script>

<script lang="ts">
export default {
  name: 'Home',
  components: { Navbar, Hero, Benefit }
}
</script>

<template><Navbar /><Hero /><Benefit /></template>
