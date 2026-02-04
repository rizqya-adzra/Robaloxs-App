<template>
  <div class="fixed bottom-5 right-5 z-[9999] flex flex-col gap-3 pointer-events-none">
    
    <TransitionGroup
      tag="div"
      class="flex flex-col gap-3 items-end"
      enter-active-class="transform transition duration-300 ease-out"
      enter-from-class="translate-x-10 opacity-0 scale-95"
      enter-to-class="translate-x-0 opacity-100 scale-100"
      
      leave-active-class="transform transition duration-200 ease-in absolute"
      leave-from-class="translate-x-0 opacity-100"
      leave-to-class="translate-x-10 opacity-0 scale-95"
      
      move-class="transition-all duration-300 ease-in-out"
    >
      <TooltipsAlert
        v-for="item in toastStore.items"
        :key="item.id"
        :title="item.title"
        :message="item.message"
        :type="item.type"
        @close="toastStore.remove(item.id)"
      />
    </TransitionGroup>

  </div>
</template>

<script setup lang="ts">
import { useToastStore } from '~/stores/items/toast'

const toastStore = useToastStore()
</script>