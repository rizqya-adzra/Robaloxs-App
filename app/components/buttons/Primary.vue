<template>
  <button 
    :disabled="loading || disabled" 
    :class="[base, variantClass, colorClass, (loading || disabled) ? 'opacity-70 cursor-not-allowed' : '']"
  >
    <svg 
      v-if="loading" 
      class="animate-spin h-5 w-5 text-current" 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 24 24"
    >
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>

    <slot />

    <Icon v-if="icon && !loading" :name="icon" size="28" />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  variant?: 'solid' | 'outlined'
  color?: 'secondary' | 'primary' | 'black' | 'gray'
  icon?: string
  loading?: boolean 
  disabled?: boolean 
}>()

const base = 'font-inter flex justify-center items-center gap-3 font-bold py-2 px-8 rounded-3xl transition-all duration-300'

const variantClass = computed(() => {
  if (props.variant === 'outlined') {
    return 'border-4 bg-transparent'
  } 
  return 'border-4'
})

const colorClass = computed(() => {
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