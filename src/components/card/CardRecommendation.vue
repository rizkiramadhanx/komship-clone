<template>
  <div class="shadow-md rounded-md w-[450px]">
    <div class="flex justify-center h-[200px]">
      <img :src="image" />
    </div>
    <p v-html="description" class="border-t-2 border-t-black py-3 px-[10px] text-center" />
  </div>
</template>

<script lang="ts">
export default {
  name: 'CardRecommendation',
  props: {
    description: String,
    image: String
  }
}
</script>

<style scoped></style>
