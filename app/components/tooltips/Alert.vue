<template>
  <div
    class="relative flex w-full max-w-sm items-start gap-4 rounded-xl border p-4 shadow-lg pointer-events-auto backdrop-blur-sm bg-opacity-95"
    :class="alertStyles[type].container"
    role="alert"
  >
    <div 
      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-full"
      :class="alertStyles[type].iconWrapper"
    >
        <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" /></svg>
        <svg v-else-if="type === 'error'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clip-rule="evenodd" /></svg>
        <svg v-else-if="type === 'warning'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="h-6 w-6"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clip-rule="evenodd" /></svg>
    </div>

    <div class="flex-1">
      <h3 class="font-bold text-base leading-6" :class="alertStyles[type].title">
        {{ title }}
      </h3>
      <p v-if="message" class="mt-1 text-sm font-medium leading-5 opacity-90" :class="alertStyles[type].message">
        {{ message }}
      </p>
    </div>

    <button 
      @click="emit('close')"
      class="ml-auto -mr-1 -mt-1 p-1 transition-opacity hover:opacity-70 focus:outline-none"
      :class="alertStyles[type].title"
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="h-5 w-5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
export type AlertVariant = 'success' | 'error' | 'warning' | 'info';

defineProps<{
  title: string;
  message?: string;
  type?: AlertVariant;
}>();

const emit = defineEmits<{
  (e: 'close'): void;
}>();

const alertStyles: Record<AlertVariant, { container: string; iconWrapper: string; title: string; message: string }> = {
  success: {
    container: 'bg-green-50 border-green-200 shadow-green-100',
    iconWrapper: 'text-green-500 bg-white shadow-sm ring-1 ring-green-100',
    title: 'text-green-900',
    message: 'text-green-700'
  },
  error: {
    container: 'bg-red-50 border-red-200 shadow-red-100',
    iconWrapper: 'text-red-500 bg-white shadow-sm ring-1 ring-red-100',
    title: 'text-red-900',
    message: 'text-red-700'
  },
  warning: {
    container: 'bg-orange-50 border-orange-200 shadow-orange-100', 
    iconWrapper: 'text-orange-500 bg-white shadow-sm ring-1 ring-orange-100',
    title: 'text-orange-900',
    message: 'text-orange-700'
  },
  info: {
    container: 'bg-blue-50 border-blue-200 shadow-blue-100',
    iconWrapper: 'text-blue-500 bg-white shadow-sm ring-1 ring-blue-100',
    title: 'text-blue-900',
    message: 'text-blue-700'
  }
};
</script>