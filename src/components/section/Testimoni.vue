<template>
  <section class="bg-white layout-container py-10">
    <div class="layout-child px-[20px]">
      <h1
        data-aos="zoom-in-down"
        class="text-black text-[32px] text-center flex justify-center items-center font-bold mb-[40px]"
        data-aos-duration="1500"
      >
        <div class="md:w-1/2">
          <span class="text-brand-orange">Komship </span>
          telah dipercaya oleh Pebisnis dan UMKM di Indonesia
        </div>
      </h1>
      <Carousel :items-to-show="3" :breakpoints="breakpoints" :autoplay="4000" :wrapAround="true">
        <Slide v-for="(item, key) in dataCardTestimoni" :key="key">
          <div class="carousel__item h-[350px] w-[350px] mb-10 rounded-[20px] shadow-md">
            <h2
              class="flex items-center pl-20 justify-center rounded-t-[20px] text-[20px] font-medium bg-[#FF6A3A] text-white h-20"
            >
              {{ item.name }}
            </h2>

            <div class="text-left py-[30px] px-[40px] text-[#212529] relative">
              <img
                :src="`https://xsgames.co/randomusers/assets/avatars/male/${20 + key}.jpg`"
                class="rounded-full border absolute -top-14 left-10 h-[80px]"
              />
              <p class="mt-5">{{ item.testimoni }}</p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script lang="ts">
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

export default {
  name: 'Testimoni',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      dataCardTestimoni: [
        {
          name: 'Diki Moh. Ghani',
          testimoni:
            'Komship lebih easy user, fitur-fiturnya juga bagus, kita bisa tahu secara otomatis CS yang jualannya paling kenceng dan yang paling kurang kenceng.Selain itu juga ada fitur keuangannya.'
        },
        {
          name: 'Rizki Ramadhan',
          testimoni:
            'Baru ada platform yang sekeren ini dan sangat menguntungkan bagi kami karena lebih murah biaya CODnya dan cashback super besar, uang bisa cair tiap hari dan mudah dipakainya.'
        },
        {
          name: 'Agil Ayasi',
          testimoni:
            'Komship bagus banget konsepnya, menciptakan kemudahan penjual untuk mengirim barang, apalagi ada fitur COD tanpa harus daftar ribet ke jasa kirim, UI nya juga mudah dipahami untuk pemula'
        },
        {
          name: 'Elda Airlangga',
          testimoni:
            'Komship Mantap👍👍👍 Cashbacknya besar, kalau bisa ditingkatkan lagi. Pencairan setiap hari bikin cash flow aman'
        }
      ],
      breakpoints: {
        // 700px and up
        200: {
          itemsToShow: 1,
          snapAlign: 'start'
        },
        // 1024 and up
        800: {
          itemsToShow: 2,
          snapAlign: 'start'
        },
        1080: {
          itemsToShow: 3,
          snapAlign: 'start'
        }
      }
    }
  }
}
</script>

<style scoped></style>
