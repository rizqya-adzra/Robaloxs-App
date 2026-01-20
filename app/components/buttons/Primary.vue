<template>
  <button :class="[base, variant, color]">
    <slot />
    <Icon v-if="icon" :name="icon" size="28" />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  variant?: 'solid' | 'outlined'
  color?: 'secondary' | 'primary' | 'black' | 'gray'
  icon?: string
}>()

const base = 'font-inter flex justify-center items-center gap-3 font-inter font-bold py-2 px-8 rounded-3xl transition-all duration-300'

const variant = computed(() => {
  if (props.variant === 'outlined') {
    return 'border-4 bg-transparent'
  } return 'border-4'
})

const color = computed(() => {
  switch (props.color) {
    case 'secondary':
      if (props.variant === 'outlined') {
        return 'border-secondary text-black hover:bg-secondary'
      }
      return 'border-secondary bg-secondary hover:bg-secondary/80 text-black'
    case 'primary':
      if (props.variant === 'outlined') {
        return 'border-primary text-primary hover:bg-primary hover:text-white'
      }
      return 'border-primary bg-primary hover:bg-primary/80 text-white'
    case 'black':
      if (props.variant === 'outlined') {
        return 'border-black text-black hover:bg-black hover:text-white'
      }
      return 'border-black bg-black hover:bg-black/80 text-white'
    case 'gray':
      if (props.variant === 'outlined') {
        return 'border-gray-300 text-gray-500 hover:text-gray-800 hover:bg-gray-300'
      }
      return 'border-gray-300 bg-gray-300 hover:bg-gray-400 text-gray-800 hover:text-white'
    default:
      return ''
  }
})
</script>