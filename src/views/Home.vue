<script setup lang="ts">
import Benefit from '@/components/section/Benefit.vue'
import FAQ from '@/components/section/FAQ.vue'
import FooterSec from '@/components/section/Footer.vue'
import Hero from '@/components/section/Hero.vue'
import Navbar from '@/components/section/Navbar.vue'
// import BenefitTable from '@/components/section/BenefitTable.vue'
import Recommendation from '@/components/section/Recommendation.vue'
import Register from '@/components/section/Register.vue'
import Ship from '@/components/section/Ship.vue'
import Testimoni from '@/components/section/Testimoni.vue'
</script>

<script lang="ts">
export default {
  name: 'Home',
  components: { Navbar, Hero, Benefit, Recommendation, Ship, Register, Testimoni, FooterSec, FAQ }
}
</script>

<template>
  <Navbar /><Hero /><Benefit /><Recommendation /><Ship /><Register /><Testimoni /><FAQ /><FooterSec />
</template>
