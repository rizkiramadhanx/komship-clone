<template>
  <section class="bg-[#f8f9fa] layout-container py-10">
    <div class="layout-child px-[20px] md:px-[30px] lg:px-[75px]">
      <h1 class="text-center text-[#222222] font-bold text-[32px]">Rekomendasi untuk Kamu</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 justify-items-center gap-x-6 gap-y-4 mt-[24px]">
        <template v-for="(item, key) in cardRecommendationData" :key="key">
          <CardRecommendation :image="item.image" :description="item.description" />
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Office from '@/assets/img/recommendation/office.png'
import Wallet from '@/assets/img/recommendation/wallet.png'
import Box from '@/assets/img/recommendation/box.png'
import Maps from '@/assets/img/recommendation/maps.png'
import CardRecommendation from '../card/CardRecommendation.vue'

export default {
  name: 'Recommendation',
  data() {
    return {
      cardRecommendationData: [
        {
          image: Office,
          description:
            'Makin tenang kirim orderan dengan gerai terbanyak dan cakupan terluas di Indonesia'
        },
        {
          image: Wallet,
          description:
            'Makin untung dan hemat kirim orderan bahkan ke pelosok Indonesia. Kirim pakai Cargo gak kalah hematnya!'
        },
        {
          image: Box,
          description:
            'Cocok bagi pebisnis dengan paket ringan. Kirim orderan makin hemat dan mantap'
        },
        {
          image: Maps,
          description: 'Jagonya COD dengan cakupan gerai terluas di Indonesia'
        }
      ]
    }
  },
  components: { CardRecommendation }
}
</script>

<style lang="scss" scoped></style>
