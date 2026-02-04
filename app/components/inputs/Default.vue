<template>
  <div class="w-full space-y-2">
    <div v-if="label || $slots.action || error" class="flex items-center justify-between">
      
      <div class="flex items-center gap-2">
        <label v-if="label" class="text-sm font-semibold text-black/70">
          {{ label }}
        </label>
        
        <span v-if="error" class="text-xs font-bold text-red-500 animate-pulse">
          *{{ error }}
        </span>
      </div>

      <slot name="action">
        <span v-if="actionText" class="text-xs text-blue-600 cursor-pointer font-bold">{{ actionText }}</span>
      </slot>
    </div>

    <div class="relative w-full">
      <input
        :type="inputType"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
        :class="[
          base,
          variantClass,
          borderColorClass, // Logic warna border dipisah ke computed baru
          type === 'password' ? 'pr-12' : '' 
        ]"
      />

      <button
        v-if="type === 'password'"
        type="button"
        @click="togglePassword"
        class="absolute right-4 top-1/2 -translate-y-1/2 text-black/50 hover:text-black transition-colors"
      >
        <svg v-if="showPassword" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  modelValue?: string | number 
  type?: string
  placeholder?: string
  label?: string
  action?: string 
  variant?: 'default' | 'focus'
  color?: 'primary' | 'secondary' | 'black'
  error?: string 
}>()

const emit = defineEmits(['update:modelValue'])

const base = 'font-inter w-full rounded-lg bg-white outline-none transition-all duration-200 placeholder:text-accent/70 text-black h-12 px-5'

const showPassword = ref(false)

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const inputType = computed(() => {
  if (props.type === 'password' && showPassword.value) {
    return 'text'
  }
  return props.type || 'text'
})

const actionText = computed(() => props.action)

const variantClass = computed(() =>
  props.variant === 'focus' ? 'border-4' : 'border-2'
)

const borderColorClass = computed(() => {
  if (props.error) {
    return 'border-red-500 text-red-900 focus:shadow-[inset_0_0_0_2px_#ef4444] bg-red-50 placeholder:text-red-300'
  }

  if (props.color === 'primary') {
    return 'border-primary/50 focus:shadow-[inset_0_0_0_2px_#0300B8]'
  }
  if (props.color === 'secondary') {
    return 'border-secondary/50 focus:shadow-[inset_0_0_0_2px_#4AF5C5]'
  }
  if (props.color === 'black') {
    return 'border-accent/70 focus:shadow-[inset_0_0_0_2px_black]'
  }
  return ''
})
</script>

<style scoped>
input::-ms-reveal,
input::-ms-clear {
  display: none;
}
</style>