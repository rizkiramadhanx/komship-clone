<template>
  <nav
    class="layout-container h-[75px] bg-white sticky top-0 z-[99]"
    :class="y === 0 ? null : 'shadow-md'"
  >
    <div class="layout-child">
      <div class="flex justify-between px-[20px] md:px-[30px] lg:px-[75px] items-center gap-[30px]">
        <Logo class="h-[41px] md:h-full" />
        <ul class="xl:flex text-[#000000] font-medium text-base gap-16 hidden text-opacity-50">
          <li>Beranda</li>
          <li>Layanan</li>
          <li>Alur Pengiriman</li>
          <li>Fitur</li>
          <li>Cek Ongkir</li>
        </ul>
        <button
          class="bg-transparent font-light rounded-xl w-[127px] justify-center h-[44px] text-brand-orange hidden xl:flex px-3 border items-center border-brand-orange"
        >
          Masuk
        </button>
        <div class="xl:hidden border border-brand-orange px-2 py-1 rounded-md">
          <Icon icon="game-icons:hamburger-menu" width="23" color="red" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Logo from '@/assets/svg/logo.vue'
import { Icon } from '@iconify/vue'
import { useWindowScroll } from '@vueuse/core'

export default {
  name: 'Navbar',
  components: {
    Logo,
    Icon
  },
  setup() {
    const { y } = useWindowScroll()

    return { y }
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
