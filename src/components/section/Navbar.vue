<template>
  <nav
    class="layout-container h-[75px] bg-white sticky top-0 z-[99] transition-shadow"
    :class="y === 0 ? null : 'shadow-md'"
  >
    <div class="layout-child relative">
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
        <div
          class="xl:hidden cursor-pointer border border-brand-orange px-2 py-1 rounded-md"
          @click="toggleNav"
        >
          <Icon icon="game-icons:hamburger-menu" width="23" color="red" />
        </div>
      </div>
      <div
        class="absolute w-full bg-brand-orange px-5 h-[100vh] transition-all duration-500 overflow-hidden -top-5 py-6"
        :class="toggle && 'hidden'"
      >
        <div @click="toggleNav" class="flex justify-end cursor-pointer">
          <Icon icon="ph:x-bold" width="30" color="white" />
        </div>
        <div class="flex flex-col gap-y-6 font-semibold text-white">
          <div>Layanan</div>
          <div>Alur Pengiriman</div>
          <div>Fitur</div>
          <div>Cek Ongkir</div>
        </div>
        <button class="text-brand-orange bg-white w-full rounded-md mt-4 py-2">Masuk</button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import Logo from '@/assets/svg/logo.vue'
import { Icon } from '@iconify/vue'
import { useWindowSize } from '@vueuse/core'
import { useWindowScroll } from '@vueuse/core'
import { ref, watch } from 'vue'

export default {
  name: 'Navbar',
  components: {
    Logo,
    Icon
  },

  setup() {
    const { y } = useWindowScroll()
    const { width } = useWindowSize()

    const toggle = ref(true)

    watch(width, (after) => {
      if (after > 600) {
        toggle.value = true
      }
    })

    function toggleNav() {
      toggle.value = !toggle.value
    }

    return { y, toggle, toggleNav, width }
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
