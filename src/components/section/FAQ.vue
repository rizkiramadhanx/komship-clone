<template>
  <section class="bg-[#f8f9fa] layout-container py-10">
    <div class="layout-child px-[20px] md:px-[30px] lg:px-[75px]">
      <template v-for="(item, key) in toggle ? dataFaq.concat(newData) : dataFaq" :key="key">
        <AccordionPanel
          :title="item.title"
          :ariaTitle="item.title"
          :type="key === 0 ? 'first' : dataFaq.length === key + 1 ? 'last' : 'else'"
          >{{ item.description }}</AccordionPanel
        >
      </template>
      <div @click="toggleFAQ" class="w-full cursor-pointer justify-end gap-2 mt-5 flex px-[15px]">
        <h2 class="text-brand-orange">Lihat FAQ Lainya</h2>
        <IconMinus class="text-brand-orange duration-[10s] hover:animate-spin" v-if="toggle" />
        <IconPlus class="text-brand-orange duration-[10s] hover:animate-spin" v-else />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import AccordionPanel from '../other/AccordionPanel.vue'

import { ref } from 'vue'
import IconMinus from '../other/IconMinus.vue'
import IconPlus from '../other/IconPlus.vue'

export default {
  name: 'FAQ',
  components: { AccordionPanel, IconMinus, IconPlus },
  setup() {
    const toggle = ref(false)
    const dataFaq = ref([
      {
        title: 'Apa itu Komship ?',
        description:
          'Komship merupakan platform layanan pengiriman untuk membantu kamu dalam pengiriman paket baik COD atau Non-COD tanpa minimum pengiriman.'
      },
      {
        title: 'Bagaimana cara daftar Komship?',
        description:
          'Komship merupakan platform layanan pengiriman untuk membantu kamu dalam pengiriman paket baik COD atau Non-COD tanpa minimum pengiriman.'
      },
      {
        title: 'Apakah ada biaya retur di Komship? Jika ada, berapa biayanya?',
        description:
          'Biaya retur (Pengembelian COD) gratis se-Indonesia. Biaya yang di gratiskan mencakup ongkir pengembalian paket, pelanggan cukup membayar ongkir pengiriman di awal saja.'
      },
      {
        title: 'Apakah ada diskon ongkir di Komship?',
        description: `Tentu saja ada, berikut diskon ongkir yang bisa kamu dapatkan dengan menggunakan Komship JNE Reg 25%. Si Cepat Reg 30%, Cargo mulai dari 2.500/kg + diskon 5% ( min. 10kg ) ID Express Reg 25% ( >½ kg ), ½ kg bayar ½-nya + diskon 15% Contoh simulasi: Ongkir untuk ekspedisi JNE Reg yang dibayarkan oleh customer sebesar 20.000, 25% dari 20.000 adalah 5.000. Maka, kamu dapat diskon ongkir sebesar 5.000 rupiah.`
      },
      {
        title: 'Apakah ada biaya administrasi bulanan ?',
        description:
          'Tidak, kamu bisa menggunakan Komship tanpa harus membayar biaya administrasi bulanan.'
      }
    ])

    const newData = ref([
      {
        title: 'Apa itu Komship ?',
        description:
          'Komship merupakan platform layanan pengiriman untuk membantu kamu dalam pengiriman paket baik COD atau Non-COD tanpa minimum pengiriman.'
      },
      {
        title: 'Bagaimana cara daftar Komship?',
        description:
          'Komship merupakan platform layanan pengiriman untuk membantu kamu dalam pengiriman paket baik COD atau Non-COD tanpa minimum pengiriman.'
      }
    ])

    return { dataFaq, toggle, newData }
  },
  methods: {
    toggleFAQ() {
      this.toggle = !this.toggle
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="less" scoped></style>
