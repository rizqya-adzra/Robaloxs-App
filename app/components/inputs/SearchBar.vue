<template>
  <div class="w-full relative group">
    <div class="flex items-center w-full bg-tertiary border border-gray-200 rounded-full p-2 transition-all duration-300 focus-within:ring-4 focus-within:ring-primary shadow-sm">

      <div class="flex items-center justify-center w-12 h-12 bg-primary rounded-full shrink-0 shadow-md">
        <Icon name="mdi:magnify" size="28" class="text-white" />
      </div>

      <input 
        type="text"
        :value="modelValue"
        :placeholder="placeholder"
        @input="handleInput"
        @keydown.enter="$emit('submit')"
        class="w-full bg-transparent border-none outline-none text-gray-700 placeholder-gray-400 text-lg font-inter px-4 h-full focus:ring-0"
      />

    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  modelValue: string
  placeholder?: string
}

interface Emits {
  (e: 'update:modelValue', value: string): void
  (e: 'submit'): void
}

withDefaults(defineProps<Props>(), {
  modelValue: '',
  placeholder: 'Cari Item BloxFruits...'
})

const emit = defineEmits<Emits>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped>
input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration {
  display: none;
}
</style>