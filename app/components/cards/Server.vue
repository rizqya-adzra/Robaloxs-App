<template>
  <div class="flex flex-col h-full overflow-hidden rounded-[30px] border border-accent/30 bg-tertiary w-full max-w-[336px] font-inter relative">
    <div v-if="variant === 1" class="flex flex-col h-full">
      <div class="relative w-full h-[180px] overflow-hidden bg-gray-100 shrink-0">
        <img :src="image" alt="Item Image" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-tertiary via-white/10 to-transparent pointer-events-none"></div>
      </div>
      <div class="p-5 flex flex-col grow">
        <div class="mb-3 -space-y-2">
          <h3 class="font-inter text-2xl font-bold text-black mb-2">{{ title }}</h3>
          <p class="font-inter text-xs text-gray-500">
            {{ description }}
          </p>
        </div>
        <div class="w-full h-0.5 bg-gray-100 rounded-full mb-3">
          <div class="h-full bg-gray-200 rounded-full"></div>
        </div>
        <div class="mb-3">
          <div class="flex justify-between items-center">
            <p class="font-inter text-xs text-gray-400 mb-0.5">Mulai Dari</p>
            <p class="font-inter text-lg font-bold text-primary">Rp{{ formatPrice(price) }}</p>
          </div>
        </div>
          <NuxtLink to="/server/items">
            <ButtonsPrimary variant="solid" color="secondary" icon="mdi:arrow-top-right" class="w-full">
              Beli Sekarang
            </ButtonsPrimary>
          </NuxtLink>
      </div>
    </div>
    <div v-else-if="variant === 2" class="flex flex-col h-full">
      <div class="relative w-full h-[180px] overflow-hidden bg-gray-100 shrink-0">
        <img :src="image" alt="Item Image" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-tertiary via-white/10 to-transparent pointer-events-none"></div>
      </div>
      <div class="p-5 flex flex-col grow">
        <div class="flex flex-col justify-between items-center mb-5">
          <h3 class="font-inter text-xl font-bold text-black mb-1">{{ title }}</h3>
          <p class="font-inter text-lg font-bold text-primary">Rp{{ formatPrice(price) }}</p>
        </div>
        <div class="flex items-center gap-2">
          <NuxtLink to="/server/items">
            <ButtonsPrimary variant="solid" color="secondary">
              Ke Keranjang
            </ButtonsPrimary>
          </NuxtLink>
          <ButtonsToggle :modelValue="stock" class="h-max py-2.5" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  variant?: number
  image?: string
  title?: string
  description?: string
  price?: number | string
  stock?: number | string
}

const props = withDefaults(defineProps<Props>(), {
  variant: 1,
  image: 'https://placehold.co/400x300',
  title: 'Nama Item',
  description: 'lorem ipsum',
  price: 20000,
  stock: 1
})

const qty = ref<number>(1)

const increaseQty = () => {
  qty.value++
}

const decreaseQty = () => {
  if (qty.value > 1) qty.value--
}

const formatPrice = (value: number | string): string => {
  return new Intl.NumberFormat('id-ID').format(Number(value))
}
</script>