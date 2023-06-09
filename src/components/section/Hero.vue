<template>
  <section class="layout-container min-h-[calc(100vh_-_75px)] lg:min-h-[500px] relative pb-10">
    <div class="layout-child px-[20px] md:px-[30px] lg:px-[75px]">
      <div class="py-[25px] grid grid-cols-1 gap-y-8 md:grid-cols-2 gap-x-8">
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
        <div class="flex items-center justify-center mb-20 sm:mb-0">
          <img src="@/assets/img/hero.png" />
        </div>
      </div>
    </div>
    <div
      class="absolute bg-[#F0C101] -bottom-12 flex flex-col items-center justify-center w-11/12 md:w-[700px] rounded-[30px] px-7 md:rounded-full md:px-[30px] py-[20px] z-10"
    >
      <p class="font-medium text-normal md:text-[20px]">
        *khusus kamu yang tiap hari kirim <span class="font-bold">COD</span>
      </p>
      <p class="font-bold text-[20px] md:text-[24px]">KLIK DISINI buat Lihat Fitur Powerfulnya</p>
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
