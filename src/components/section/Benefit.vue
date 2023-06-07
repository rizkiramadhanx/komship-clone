<template>
  <section class="bg-[#f8f9fa] layout-container">
    <div class="layout-child px-[20px] md:px-[30px] lg:px-[75px] pt-[156px]">
      <div class="grid grid-cols-1 md:grid-cols-benefitText gap-y-[10px]">
        <div class="flex items-center md:justify-center">
          <h1 class="font-bold text-[32px] text-center">Sering kirim barang?</h1>
        </div>
        <p class="text-brand-gray">
          Sudah saatnya kamu beralih ke platform yang bisa memberikan berlipat keuntungan dan
          kenyamanan dalam melakukan pengiriman barang. Komship kini hadir untuk memudahkan
          pengiriman kamu dengan berbagai benefit TANPA MINIMUM JUMLAH PENGIRIMAN.
        </p>
      </div>
      <div
        class="rounded-[20px] gap-y-[50px] bg-gradient-to-r from-[#FF6A3A] to-[#FBA63C] px-8 py-20 mt-12 gap-x-[24px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
      >
        <template v-for="(item, key) of CardBenefitData" :key="key">
          <CardBenefit :title="item.title" :description="item.description" :image="item.image" />
        </template>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import CardBenefit from '@/components/card/CardBenefit.vue'
import WalletIcon from '@/assets/img/benefit/wallet.png'
import EmptyWallet from '@/assets/img/benefit/empty-wallet.png'
import Calendar from '@/assets/img/benefit/calender.png'
import Packet from '@/assets/img/benefit/packet.png'
import Retur from '@/assets/img/benefit/image.png'
import Grow from '@/assets/img/benefit/grow.png'

export default {
  name: 'Benefit',
  components: { CardBenefit },
  data() {
    return {
      CardBenefitData: [
        {
          title: 'Terima Pembayaran COD Instan',
          description:
            'Semua bisa COD di Komship. Otomatis dan tanpa ribet urus persyaratan kerjasama satu persatu ke ekspedisi',
          image: WalletIcon
        },
        {
          title: 'Pencairan Setiap Hari',
          description:
            'Kamu bisa tarik dana COD kapanpun karen pencairan dapat dilakukan setiap hari.',
          image: Calendar
        },
        {
          title: 'Lebih Hemat',
          description:
            'Dapatkan diskon kirim MULAI dari 25% <b class="text-black">(COD dan Non-COD)</b> Lebih hemat dibandingkan dengan yang lain',
          image: Grow
        },
        {
          title: 'Biaya COD Termurah',
          description: 'Biaya COD cuma <b class="text-black">2,8%</b> ,ngga pake mahal !',
          image: EmptyWallet
        },
        {
          title: 'Gratis Biaya Retur',
          description:
            'Khawatir kamu rugi karena retur pelanggan? Tenang, Komship bebas biaya retur atau pengembalian COD seluruh Indonesia.<b class="text-black">*S&K berlaku.</b> ',
          image: Retur
        },
        {
          title: 'Gratis Jemput Paket',
          description:
            'Cukup tunggu saja di rumah, kurir akan mendatangi lokasimu untuk mengambil paket <b>TANPA MINIMUM ORDER.</b>',
          image: Packet
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
