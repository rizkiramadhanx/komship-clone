<template>
  <nav class="layout-container bg-[#160E33] h-[100px]">
    <div class="layout-child">
      <div
        class="flex justify-between px-[20px] md:px-[100px] lg:px-[165px] items-center gap-[30px]"
      >
        <div class="mt-2">
          <Logo />
        </div>
        <ul class="md:flex text-white gap-[30px] hidden">
          <li class="whitespace-nowrap">How it works</li>
          <li>Cryptos</li>
          <li>Features</li>
          <li>Testimonial</li>
          <li>University</li>
        </ul>
        <select
          class="bg-transparent hidden md:flex p-1 text-white border border-red-400 focus:outline-none rounded-full"
        >
          <option>English</option>
          <option>Indonesia</option>
        </select>
        <div class="md:hidden">
          <Icon icon="game-icons:hamburger-menu" width="30" color="red" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Logo from '@/assets/svg/logo.vue'
import { Icon } from '@iconify/vue'

export default {
  name: 'Navbar',
  components: {
    Logo,
    Icon
  }
}
</script>

<style scoped>
.option-bg {
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;

  background-color: red;
}
</style>
