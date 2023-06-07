<template>
  <div class="h-[230px] bg-white px-[10px] rounded-[10px] py-[24px] relative">
    <div class="absolute -top-[45px]">
      <img :src="image" />
    </div>
    <h3 class="text-[#212529] font-medium">{{ title }}</h3>
    <p v-html="description" class="mt-[10px] text-[14px] text-brand-gray font-light" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardBenefit',
  props: {
    title: String,
    description: String,
    image: String
  }
}
</script>

<style lang="scss" scoped></style>
