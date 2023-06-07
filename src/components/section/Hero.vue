<template>
  <section class="layout-container min-h-[calc(100vh_-_75px)] lg:min-h-[500px] relative pb-10">
    <div class="layout-child px-[20px] md:px-[30px] lg:px-[75px]">
      <div class="py-[25px] grid grid-cols-1 md:grid-cols-2 gap-x-8">
        <div
          class="flex items-start min-h-[calc(100vh_-_75px)] sm:min-h-fit gap-4 justify-center flex-col"
        >
          <h1
            class="font-bold text-[32px] leading-[38px] text-brand-black text-center md:text-left"
          >
            Juaranya Platform Kirim Barang, Mudah dan Murah dengan
            <span class="text-brand-orange">Komship</span>
          </h1>
          <p class="font-medium leading-[24px] text-brand-gray text-center md:text-left">
            Dapatkan diskon ongkir <span class="text-black"> mulai dari 25%</span> dan GRATIS biaya
            <span class="text-black">retur se- Indonesia!</span> Pelajari lebih lanjut untuk dapat
            tawaran menarik
          </p>
          <div class="flex items-center gap-x-4">
            <h2 class="text-brand-orange text-[34px] md:text-[48px] font-semibold">13000+</h2>
            <h2 class="md:text-[20px] text-[14px]">
              Pebisnis online sudah bergabung dengan <span class="text-brand-orange">Komship</span>
            </h2>
          </div>
          <button
            class="font-semibold bg-brand-orange py-4 px-7 text-white w-full sm:w-auto rounded-xl"
          >
            Mulai Sekarang
          </button>
        </div>
        <div class="flex items-center justify-center">
          <img src="@/assets/img/hero.png" />
        </div>
      </div>
    </div>
    <div
      class="absolute h-20 bg-gray-600 -bottom-7 flex flex-col items-center justify-center w-full sm:w-[500px] rounded-2xl md:px-[30px] py-[20px]"
    >
      <p>*khusus kamu yang tiap hari kirim COD</p>
      <p>KLIK DISINI buat Lihat Fitur Powerfulnya</p>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'Hero',
  components: {}
}
</script>

<style lang="scss" scoped></style>
