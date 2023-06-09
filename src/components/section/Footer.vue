<template>
  <section class="bg-white layout-container pt-[50px]">
    <div class="layout-child px-[20px] md:px-[30px] lg:px-[75px]">
      <div>
        <div class="mb-5"><logoVue /></div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 gap-x-[60px] gap-y-[60px] justify-items-stretch xl:grid-cols-3 text-brand-gray"
        >
          <div class="flex flex-col gap-y-[10px]">
            <div class="flex items-start gap-x-[15px]">
              <div>
                <locationVue />
              </div>
              <p>
                Head Office Komerce <br />
                Jln. Sawah Tengah No. 3 Desa Tunjungmuli Kecamatan Karangmoncol Kabupaten
                Purbalingga (53355)
              </p>
            </div>
            <div class="flex items-center gap-x-[15px]">
              <div>
                <emailVue />
              </div>
              <p>bd@komship.id</p>
            </div>
            <div class="flex items-center gap-x-[24px]">
              <div>
                <Phone />
              </div>
              <p>081328014170</p>
            </div>
          </div>
          <div>
            <h1 class="text-[#222222]">Perusahaan</h1>
            <ul class="flex flex-col gap-y-[10px] mt-[20px]">
              <li>Tentang Kami</li>
              <li>Syarat & Ketentuan</li>
              <li>Kebijakan privasi</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div>
            <div>
              <h1 class="text-[#222222]">Kerjasama Ekspedisi</h1>
              <div class="mt-[20px] grid grid-cols-4 md:grid-cols-2">
                <img src="@/assets/img/partner/jne.png" />
                <img src="@/assets/img/partner/sicepat.png" />
                <img src="@/assets/img/partner/idexpress.png" />
                <img src="@/assets/img/partner/sap.png" />
              </div>
            </div>
            <div class="mt-10">
              <h1 class="text-[#222222]">Segera Hadir</h1>
              <div class="mt-10">
                <img src="@/assets/img/partner/parcel.png" class="h-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="py-5 flex justify-between">
        <div class="text-brand-gray">Copyright 2022 Komship.id. All rights reserved.</div>
        <div class="flex">
          <Wa />
          <Ig />
          <Fb />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import emailVue from '@/assets/svg/footer/email.vue'
import locationVue from '@/assets/svg/footer/location.vue'
import Phone from '@/assets/svg/footer/phone.vue'
import logoVue from '@/assets/svg/logo.vue'
import Wa from '@/assets/svg/footer/wa.vue'
import Ig from '@/assets/svg/footer/ig.vue'
import Fb from '@/assets/svg/footer/fb.vue'

export default {
  name: 'FooterSection',
  components: { emailVue, locationVue, Phone, logoVue, Wa, Ig, Fb }
}
</script>

<style scoped></style>
