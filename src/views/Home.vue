<script setup lang="ts">
import Benefit from '@/components/section/Benefit.vue'
import Hero from '@/components/section/Hero.vue'
import Navbar from '@/components/section/Navbar.vue'
// import BenefitTable from '@/components/section/BenefitTable.vue'
import Recommendation from '@/components/section/Recommendation.vue'
import Ship from '@/components/section/Ship.vue'
</script>

<script lang="ts">
export default {
  name: 'Home',
  components: { Navbar, Hero, Benefit, Recommendation, Ship }
}
</script>

<template><Navbar /><Hero /><Benefit /><Recommendation /><Ship /></template>
