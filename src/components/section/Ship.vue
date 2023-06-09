<template>
  <section class="bg-white layout-container py-10">
    <div class="layout-child px-[20px] md:px-[30px] lg:px-[75px]">
      <h1 class="text-[32px] font-bold">
        Alur pengiriman <br />
        menggunakan <span class="text-brand-orange">Komship</span>
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-y-3 mt-[38px]">
        <template v-for="(item, key) in dataCardShip" :key="key">
          <div class="flex sm:flex-col">
            <div class="flex justify-center">
              <h1
                class="rounded-full font-bold bg-[#FFECE9] flex sm:order-none text-brand-orange items-center justify-center border-[#FF6A3A] border w-[30px] h-[30px] md:w-[50px] md:h-[50px]"
                :class="(key + 1) % 2 ? 'order-first' : 'order-last'"
              >
                {{ key + 1 }}
              </h1>
              <component :is="item.svg" class="w-[130px]" />
            </div>
            <div
              class="text-brand-orange text-center sm:order-none px-3 mt-2 flex items-center"
              :class="(key + 1) % 2 ? 'order-last' : 'order-first'"
            >
              <p class="w-full text-center md:pl-14">
                {{ item.description }}
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Ship1 from '@/assets/svg/ship/Ship-1.vue'
import Ship2 from '@/assets/svg/ship/Ship-2.vue'
import Ship3 from '@/assets/svg/ship/Ship-3.vue'
import Ship4 from '@/assets/svg/ship/Ship-4.vue'
import Ship5 from '@/assets/svg/ship/Ship-5.vue'
import Ship6 from '@/assets/svg/ship/Ship-6.vue'
import Ship7 from '@/assets/svg/ship/Ship-7.vue'

export default {
  name: 'Ship',
  components: {
    Ship1,
    Ship2,
    Ship3,
    Ship4,
    Ship5,
    Ship6,
    Ship7
  },
  data() {
    return {
      dataCardShip: [
        {
          svg: Ship1,
          description: 'Order masuk dari pelanggan'
        },
        {
          svg: Ship2,
          description: 'Seller menyiapkan orderan'
        },
        {
          svg: Ship3,
          description: 'Seller memasukan data di dashboard Komship'
        },
        {
          svg: Ship4,
          description: 'Ekspedisi menjemput barang ke lokasi seller'
        },
        {
          svg: Ship5,
          description: 'Barang diterima pelanggan'
        },
        {
          svg: Ship6,
          description: 'Non COD (selesai) / COD (uang diterima)'
        },
        {
          svg: Ship7,
          description: 'Dana dicairkan'
        }
      ]
    }
  }
}
</script>

<style scoped></style>
