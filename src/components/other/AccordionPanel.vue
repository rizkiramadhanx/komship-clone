<script lang="ts" setup>
import { ref } from 'vue'
import iconPlusVue from './IconPlus.vue'
import IconMinusVue from './IconMinus.vue'
const props = defineProps({
  title: { type: String, required: true },
  ariaTitle: { type: String, required: true }
})
const showPanel = ref(false)
const togglePanel = (event: any) => {
  showPanel.value = !showPanel.value
}
</script>

<template>
  <div class="panel container border shadow-sm rounded-lg">
    <button
      :arial-controls="'accordion-content-' + props.ariaTitle"
      :id="'accordion-control-' + props.ariaTitle"
      @click.prevent="togglePanel"
      class="p-4 w-full text-brand-orange font-semibold flex flex-row items-start text-left justify-between"
    >
      {{ props.title }}
      <div>
        <IconMinusVue class="text-brand-orange duration-[2s] hover:animate-spin" v-if="showPanel" />
        <iconPlusVue class="text-brand-orange duration-[2s] hover:animate-spin" v-else />
      </div>
    </button>
    <div
      :aria-hidden="!showPanel"
      :id="'content-' + props.ariaTitle"
      class="p-4 transition-all text-[14px] font-normal"
      v-if="showPanel"
    >
      <slot></slot>
    </div>
  </div>
</template>
