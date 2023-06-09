<template>
  <section class="bg-[#f8f9fa] layout-container relative">
    <div class="layout-child px-[20px] md:px-[30px] lg:px-[75px] py-6">
      <h1 class="font-bold text-[32px]">Fitur</h1>
      <div class="flex gap-4 mt-[23px]">
        <button
          @click="setToggle('UNGULAN')"
          class="p-2 font-medium border rounded-md bg-[#F0F0F0]"
          :class="
            toggle === 'UNGULAN'
              ? 'text-brand-orange border-brand-orange'
              : 'text-[#C2C2C2] border-[#C2C2C2]'
          "
        >
          Fitur Unggulan
        </button>
        <button
          @click="setToggle('TAMBAHAN')"
          class="p-2 font-medium border rounded-md bg-[#F0F0F0]"
          :class="
            toggle === 'TAMBAHAN'
              ? 'text-brand-orange border-brand-orange'
              : 'text-[#C2C2C2] border-[#C2C2C2]'
          "
        >
          Fitur Tambahan
        </button>
      </div>
      <div
        v-if="toggle === 'UNGULAN'"
        class="mt-[50px] grid gap-y-[50px] gap-x-[50px] grid-cols-1 md:grid-cols-2"
      >
        <div class="flex flex-col gap-y-4">
          <template v-for="(item, key) in dataUnggulan" :key="key">
            <div
              class="flex flex-col gap-y-6"
              @click="setToggleDataUnggulan(item.type as TDataUnggulanToggle)"
            >
              <h2
                :class="item.type === dataUnggulanToggle ? 'text-brand-orange' : ''"
                class="text-base font-semibold cursor-pointer hover:text-brand-orange"
              >
                {{ item.title }}
              </h2>
              <p class="text-[14px] text-[#99999A]">{{ item.description }}</p>
            </div>
          </template>
        </div>
        <img
          src="@/assets/svg/feature/order-massal.png"
          v-if="dataUnggulanToggle === 'INPUT'"
          alt="Order massal"
        />
        <img
          src="@/assets/svg/feature/pantau.png"
          v-if="dataUnggulanToggle === 'PANTAU'"
          alt="Order massal"
        />
        <img
          src="@/assets/svg/feature/tarik-data.png"
          v-if="dataUnggulanToggle === 'TARIK'"
          alt="Order massal"
        />
      </div>
      <div
        class="-ml-4 grid mt-[50px] grid-cols-1 md:grid-cols-2 place-items-stretch"
        v-if="toggle === 'TAMBAHAN'"
      >
        <div class="flex flex-col gap-y-[13px]">
          <template v-for="(item, key) in dataTambahan" :key="key">
            <div>
              <div class="flex items-start gap-x-2">
                <img :src="item.image" :alt="item.title" />
                <div>
                  <div class="mt-2">
                    <h3 class="text-brand-orange">{{ item.title }}</h3>
                    <p class="text-[#212529]">{{ item.description }}</p>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </div>
        <img src="@/assets/svg/feature/TambahanHero.png" class="h-[600px]" alt="Tambahan" />
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { ref } from 'vue'
type Toggle = 'UNGULAN' | 'TAMBAHAN'
type TDataTambahan = {
  title: string
  description: string
  image: any
}[]

type TDataUnggulanToggle = 'INPUT' | 'TARIK' | 'PANTAU'
const tambahan1 = new URL('@/assets/svg/feature/tambahan-1.svg', import.meta.url)
const tambahan2 = new URL('@/assets/svg/feature/tambahan-2.svg', import.meta.url)
const tambahan3 = new URL('@/assets/svg/feature/tambahan-3.svg', import.meta.url)

export default {
  name: 'Feature',
  data() {
    return {
      dataUnggulan: [
        {
          title: 'Input Order Masal',
          description:
            'Anti ribet untuk kamu yang harus input orderan cukup banyak setiap hari, Gak perlu lagi input data manual satu persatu.',
          type: 'INPUT'
        },
        {
          title: 'Tarik Data Otomatis dan Mudah',
          description:
            'Data di dashboard akan semakin mudah kamu olah dengan memanfaatkan menu download. Kamu tinggal pilih klasifikasi data yang dibutuhkan.',
          type: 'TARIK'
        },
        {
          title: 'Pantau Kendala Pengiriman',
          description:
            'Kendala pengiriman akan makin mudah dan cepat teratasi karena terhubung langsung dengan ekspedisi terkait.',
          type: 'PANTAU'
        }
      ],
      dataTambahan: [
        {
          image: tambahan1,
          title: 'Produk Terlaris',
          description:
            'Jika kamu memiliki produk dengan variasi yang berbeda, maka fitur produk terlaris ini dapat membantu kamu mengetahui produk mana yang menjadi best seller dalam kurun waktu 1 bulan atau 7 hari terakhir.'
        },
        {
          image: tambahan2,
          title: 'Customer Loyal',
          description:
            'Merupakan data Customer yang sering melakukan order kembali (repeat order). Dengan mengetahui Customer Loyal kita, maka proses orderan akan semakin cepat.'
        },
        {
          image: tambahan3,
          title: 'Top Admin Order',
          description:
            'Fitur yang akan mempermudah para pebisnis memantau produktifitas para admin dengan melihat data akumulasi performa masing-masing admin yang ada. Makin mudah juga untuk mengambil keputusan seperti pemberian bonus dan meningkatkan semangat kerja para admin.'
        }
      ] as TDataTambahan
    }
  },
  computed: {
    getImage(path: string) {
      return new URL(path, import.meta.url)
    }
  },
  setup() {
    const toggle = ref<Toggle>('TAMBAHAN')
    const dataUnggulanToggle = ref<TDataUnggulanToggle>('INPUT')

    const setToggle = (e: Toggle) => {
      toggle.value = e
    }

    const setToggleDataUnggulan = (e: TDataUnggulanToggle) => {
      dataUnggulanToggle.value = e
    }

    return { toggle, setToggle, setToggleDataUnggulan, dataUnggulanToggle }
  }
}
</script>

<style lang="stylus" scoped></style>
