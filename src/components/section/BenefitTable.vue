<template>
  <section class="bg-[#f8f9fa] layout-container mt-5">
    <div class="layout-child px-[20px] md:px-[30px] lg:px-[75px]">
      <table class="bg-red-300 w-full">
        <thead>
          <tr>
            <th class="bg-slate-500">Benefit</th>
            <th>JNE</th>
            <th>Si Cepat</th>
            <th>ID Express</th>
            <th>SAP</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(item, key) in BenefitParnerDesktop" :key="key">
            <tr class="bg-red-800 col-width">
              <td v-html="item.benefit" class="text-center" />
              <td v-html="item.JNE" class="text-center" />
              <td v-html="item.Sicepat" class="text-center" />
              <td v-html="item.IDExpress" class="text-center" />
              <td v-html="item.SAP" class="text-center" />
            </tr>
          </template>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script lang="ts">
export default {
  name: 'BenefitTable',
  data() {
    return {
      BenefitParnerDesktop: [
        {
          benefit: 'Diskon Ongkir',
          JNE: 'Reg 25%',
          Sicepat:
            '<ul><li>Reg 30%</li><li>Cargo mulai dari 2.500/kg + diskon 5% (min. 10Kg)</li></ul>',
          IDExpress:
            '<ul><li>Reg 25% (>1/2 kg)</li><li><1/2 Kg bayar 1/2-nya* +diskon 15%</li></ul>',
          SAP: 'Reg 35%'
        }
      ]
    }
  }
}
</script>

<style scoped>
.col-width {
  border: 16px 0 solid transparent;
}
</style>
