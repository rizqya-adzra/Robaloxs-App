<template>
  <div class="relative w-full h-screen overflow-hidden bg-white">
    <video 
      autoplay 
      loop 
      muted 
      playsinline
      class="absolute inset-0 w-full h-full object-cover"
    >
      <source src="@/assets/videos/hero.mp4" type="video/mp4">
    </video>
    <div class="relative flex flex-col-reverse -mt-12 lg:flex-row h-screen justify-center items-center gap-8 lg:gap-44 px-6 lg:px-0">
      <div class="flex flex-col items-center lg:items-start justify-start gap-8 lg:gap-10 w-full md:w-[80%] lg:w-auto">  
        <p class="font-inter text-4xl text-[2rem] md:text-[clamp(3rem,4vw,6rem)] leading-none text-center lg:text-left">
          Beli <span class="font-extrabold">Robux</span> <br class="hidden lg:block"> 
          dengan berbagai <br class="hidden lg:block">
          metode disini! <br class="hidden lg:block">
          <span class="text-primary block mt-2 lg:mt-0">Top Up Sekarang</span>
        </p>
        <div class="flex flex-col gap-3 w-full lg:w-auto items-center lg:items-start">
          <div class="flex flex-wrap justify-center lg:justify-start gap-2 w-full">
            <NuxtLink to="/robux/gamepass">
              <ButtonsSecondary class="flex-1 lg:flex-none min-w-[120px]">
                Gamepass
              </ButtonsSecondary>
            </NuxtLink>
            <NuxtLink to="/robux/via-login">
              <ButtonsSecondary class="flex-1 lg:flex-none min-w-[120px]">
                Via Login
              </ButtonsSecondary>
            </NuxtLink>
          </div>
          <div class="flex flex-wrap justify-center lg:justify-start gap-2 w-full whitespace-nowrap">
            <NuxtLink to="/robux/giftcard">
              <ButtonsSecondary class="flex-1 lg:flex-none min-w-[120px]">
                Gift Card
              </ButtonsSecondary>
            </NuxtLink>
            <NuxtLink to="/server">
              <ButtonsSecondary variant="gradient" class="flex-1 lg:flex-none min-w-[120px]">
                Beli Item in-game
              </ButtonsSecondary>
            </NuxtLink>
          </div>
        </div>

        <div class="flex flex-wrap justify-evenly md:justify-center lg:justify-start gap-6 lg:gap-8 w-full text-left">
          <div class="flex flex-col">
            <p class="font-inter text-xs md:text-sm text-gray-500">Mulai dari</p>
            <p class="font-inter font-bold text-sm md:text-lg text-primary">10k - 100 Robux</p>
          </div>
          <div class="flex flex-col">
            <p class="font-inter text-xs md:text-sm text-gray-500">Terjual</p>
            <p class="font-inter font-bold text-sm md:text-lg text-primary">65.000+</p>
          </div>
          <div class="flex flex-col">
            <p class="font-inter text-xs md:text-sm text-gray-500">Tersisa</p>
            <p class="font-inter font-bold text-sm md:text-lg text-primary">105.000+</p>
          </div>
        </div>
      </div>
      <div class="w-full lg:w-auto flex justify-center">
        <img 
          src="@/assets/images/image.png" 
          alt="Roblox Character" 
          class="w-[60%] md:w-[40%] lg:w-[340px] max-w-[500px] h-auto object-contain"
        >
      </div>
    </div>
  </div>

  <div class="w-full overflow-hidden bg-gradient-to-b from-tertiary to-white mb-32 py-7 group relative z-10">
    <div ref="marqueeRef" class="flex w-max items-center">
      <div class="flex items-center gap-24 px-5">
        <template v-for="(item, index) in seamlessItems" :key="`orig-${index}`">
          <p class="font-inter font-bold text-lg text-black whitespace-nowrap">{{ item }}</p>
          <Icon name="mdi:star" size="24" class="text-accent flex-shrink-0" />
        </template>
      </div>
    </div>
  </div>

  <div class="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10 lg:gap-24 px-6 lg:px-0 w-full">   
    <div class="flex flex-col items-center lg:items-start gap-2 text-center lg:text-left">
      <p class="font-inter font-bold text-2xl">Mengapa Harus Kami?</p>
      <p class="font-inter text-gray-600">Lorem ipsum dolor sit amet</p>
    </div>
    <div class="flex flex-col md:flex-row gap-4 md:gap-3 text-center w-full md:w-auto">    
      <div class="flex flex-col gap-6 md:gap-10 items-center justify-center rounded-xl py-10 md:py-24 w-full md:w-[220px] bg-gradient-to-br from-tertiary from-[60%] to-secondary bg-[length:200%_100%] bg-left hover:bg-right scale-[1] hover:scale-[1.020] hover:-translate-y-3 transition-all duration-500 ease-out">
        <Icon name="mdi-money" size="82" class="text-primary" />
        <p class="font-inter font-bold">Harga Terjangkau</p>
      </div>
      <div class="hidden lg:flex flex-col gap-6 md:gap-10 items-center justify-center rounded-xl py-10 md:py-24 w-full md:w-[220px] bg-gradient-to-tl from-tertiary from-[60%] to-secondary bg-[length:200%_100%] bg-right hover:bg-left scale-[1] hover:scale-[1.020] hover:-translate-y-3 transition-all duration-500 ease-out">
        <p class="font-inter font-bold order-2 md:order-1">Pelayanan setiap hari <br> 24 jam</p>
        <Icon name="mdi-clock" size="82" class="text-primary order-1 md:order-2" />
      </div>
      <div class="lg:hidden flex flex-col gap-6 md:gap-10 items-center justify-center rounded-xl py-10 md:py-24 w-full md:w-[220px] bg-gradient-to-tl from-tertiary from-[60%] to-secondary bg-[length:200%_100%] bg-right hover:bg-left scale-[1] hover:scale-[1.020] hover:-translate-y-3 transition-all duration-500 ease-out">
        <Icon name="mdi-clock" size="82" class="text-primary" />
        <p class="font-inter font-bold">Pelayanan setiap hari <br> 24 jam</p>
      </div>
      <div class="flex flex-col gap-6 md:gap-10 items-center justify-center rounded-xl py-10 md:py-24 w-full md:w-[220px] bg-gradient-to-br from-tertiary from-[60%] to-secondary bg-[length:200%_100%] bg-left hover:bg-right scale-[1] hover:scale-[1.020] hover:-translate-y-3 transition-all duration-500 ease-out">
        <Icon name="mdi-shield" size="82" class="text-primary" />
        <p class="font-inter font-bold">Aman dan terpercaya</p>
      </div>
    </div>
  </div>

  <div class="flex flex-col justify-center items-center gap-12 my-32 overflow-hidden">
    <div class="flex flex-col items-center gap-2">
      <p class="font-inter font-bold text-2xl">Apa Kata Pelanggan?</p>
      <p class="font-inter text-center px-20 text-gray-600">Berdasarkan testimoni nyata dari pelanggan robaloxs</p>
    </div>
    <div class="flex items-center w-full">
      <div class="flex" :style="{ gap: `${GAP}px` }" ref="carouselRef">
        <div v-for="(item, index) in clonedReviews" :key="`${item.id}-${index}`" class="transition-all duration-500 ease-out flex-shrink-0 flex flex-col gap-5 items-start justify-center rounded-3xl p-8 shadow-sm"
          :class="[
            'w-[300px] md:w-[700px] lg:w-[800px]', 
               'h-[360px] md:h-[260px]', 
            (index === activeOriginalIndex + 1) 
              ? 'bg-gradient-to-br from-tertiary from-50% to-secondary scale-100 shadow-md translate-y-0'
              : 'bg-tertiary scale-90 mt-12' 
          ]">
          <div class="flex gap-2">
            <div class="text-primary">
              <Icon name="mdi:star" size="20" />
              <Icon name="mdi:star" size="20" />
              <Icon name="mdi:star" size="20" />
              <Icon name="mdi:star" size="20" />
              <Icon name="mdi:star" size="20" />
            </div>
            <p class="font-inter">5.0</p>
          </div>
          <p class="font-inter">{{ item.text }}</p>
          <div class="flex items-start justify-between w-full">
            <p class="font-inter font-bold text-end">{{ index }}</p>
            <p class="font-inter font-bold text-end">- {{ item.name }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="flex gap-5 -mt-20">
      <ButtonsIcon icon="mdi:arrow-left-circle-outline" @click="prev" />
      <ButtonsIcon icon="mdi:arrow-right-circle-outline" @click="next" />
    </div>
  </div>

  <div class="flex flex-col items-center justify-center gap-12 mb-32">   
    <div class="text-center w-full">
      <p class="font-inter font-bold text-2xl">Pertanyaan Populer</p>
      <p class="font-inter text-center px-4 lg:px-20 text-gray-600">
        Pertanyaan dengan jawaban yang sering diajukan
      </p>
    </div>
    <div class="flex flex-col lg:flex-row gap-6 lg:gap-7 w-full px-10 md:px-20 lg:w-auto">   
      <div class="hidden lg:flex flex-col items-start justify-start p-8 bg-tertiary w-[610px] h-max rounded-3xl transition-all duration-300">
        <span class="font-bold mb-4 text-lg text-gray-900">Jawaban kami</span>
        <div ref="faqAnswerRef" class="w-full">
          <p class="font-inter leading-loose text-gray-600 text-[15px]">
            {{ activeAnswer }}
          </p>
        </div>
      </div>
      <div class="flex flex-col gap-3 w-full lg:w-auto">     
        <div v-for="(item, index) in faqList" :key="item.id" class="flex flex-col group"> 
          <ButtonsSecondary 
            @click="selectFaq(index)"
            class="rounded-full w-full lg:w-max text-left justify-start px-6 py-3 z-10 relative transition-transform active:scale-[0.99]"
            :variant="activeIndex === index ? 'gradient' : 'solid'"
          >
            <span :class="activeIndex === index ? 'font-semibold' : 'font-medium'">
              {{ item.question }}
            </span>
          </ButtonsSecondary>
          <Transition 
            enter-active-class="transition-all duration-500 ease-in-out overflow-hidden"
            enter-from-class="max-h-0 opacity-0 -translate-y-4"
            enter-to-class="max-h-[500px] opacity-100 translate-y-0"
            leave-active-class="transition-all duration-500 ease-in-out overflow-hidden"
            leave-from-class="max-h-[500px] opacity-100 translate-y-0"
            leave-to-class="max-h-0 opacity-0 -translate-y-4"
          >
            <div 
              v-if="activeIndex === index" 
              class="lg:hidden mt-2 ml-2 mr-2 p-5 bg-tertiary/50 border-l-4 border-secondary rounded-r-2xl rounded-bl-2xl text-sm text-gray-600 font-inter leading-relaxed"
            >
              <span class="font-bold block mb-2 text-gray-900">Jawaban:</span>
              {{ item.answer }}
            </div>
          </Transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed} from 'vue'
import { useCarousel } from '~/composables/gsap/useInfiniteCarousel' 
import { useMarquee } from '~/composables/gsap/useInfiniteMarquee' 
import { useFaqAnimation } from '~/composables/gsap/useFaqAnimation' 

const reviews = [
  { id: 1, name: '@aagus', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }, 
  { id: 2, name: '@Qya', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat..' },     
  { id: 3, name: '@Budi', text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' },      
]

const faqList = [
  {
    id: 1,
    question: 'Apa itu ROBALOXS?',
    answer: 'ROBALOXS adalah platform penyedia layanan top-up game terpercaya yang menawarkan harga kompetitif, proses instan, dan layanan pelanggan 24/7.'
  },
  {
    id: 2,
    question: 'Bagaimana cara Top Up disini?',
    answer: 'Caranya sangat mudah: 1. Pilih game yang diinginkan. 2. Masukkan ID Player Anda. 3. Pilih nominal top-up. 4. Lakukan pembayaran melalui metode yang tersedia. Item akan masuk secara otomatis dalam hitungan detik!'
  },
  {
    id: 3,
    question: 'Metode pembayaran apa saja yang tersedia?',
    answer: 'Kami mendukung berbagai metode pembayaran mulai dari Transfer Bank (BCA, Mandiri, dll), E-Wallet (GoPay, OVO, Dana), hingga pembayaran melalui Minimarket (Alfamart/Indomaret) dan QRIS.'
  },
  {
    id: 4,
    question: 'Apakah layanan ini aman?',
    answer: 'Tentu saja. Keamanan data dan transaksi Anda adalah prioritas utama kami.'
  }
]

const bannerItems = [
  'Via Gamepass', 'Via Login', 'Diskon Spesial', 'Gift Card', 
]
const seamlessItems = computed(() => [...bannerItems, ...bannerItems])
const clonedReviews = computed(() => {
  const first = reviews[0]
  const last = reviews[reviews.length - 1]
  return [last, ...reviews, first]
})
const GAP = 28

const marqueeRef = ref<HTMLElement | null>(null)
const carouselRef = ref<HTMLElement | null>(null)
const faqAnswerRef = ref<HTMLElement | null>(null)

const { activeOriginalIndex, next, prev } = useCarousel(carouselRef, {
  totalItems: reviews.length,                
  duration: 0.6
})

const { activeIndex, activeAnswer, selectFaq } = useFaqAnimation(faqAnswerRef, faqList)

useMarquee(marqueeRef, {
  duration: 25,      
  pauseOnHover: false,
  direction: 'left'   
})
</script>