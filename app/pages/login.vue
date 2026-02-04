<template>
  <form @submit.prevent="handleLogin" class="flex justify-start items-center p-5 w-screen h-screen">
    
    <img src="@/assets/images/gradient.png" alt="" class="hidden md:flex lg:hidden absolute inset-0 w-screen h-screen">
    
    <div class="hidden lg:flex relative w-[1330px]">
      <img src="@/assets/images/gradient.png" alt="" class="w-[100%] h-[100%]">
      <div class="absolute inset-0 p-10 md:p-16 flex flex-col justify-between z-10 text-white"> 
        <div class="flex items-center gap-6">
          <h1 class="font-inter font-bold text-3xl tracking-wide">ROBALOXS</h1>
          <div class="h-[1px] w-32 md:w-64 bg-white/50"></div> 
        </div>
        <div class="max-w-md">
          <p class="font-inter text-lg leading-relaxed font-medium">
            Nikmati pengalaman top up Robux instan dengan harga bersahabat dan proses super aman. 
            Layanan cepat 24/7, hanya di sini!
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col bg-white backdrop-blur-md rounded-3xl py-20 lg:w-[1200px] px-10 md:px-32 lg:px-64 mx-auto gap-5 md:gap-10">
      <div class="space-y-2">
        <p class="font-inter text-4xl">Login Sekarang.</p>
        <p class="font-inter text-sm text-black/50">Login ke akunmu agar bisa menang banyak diskon</p>
      </div>

      <div class="flex flex-col gap-3">
        <InputsDefault 
          v-model="form.email"
          placeholder="Masukan Email" 
          type="email" 
          label="Email" 
          variant="default" 
          color="black" 
          :error="errors.email"
        />

        <InputsDefault 
          v-model="form.password"
          placeholder="Masukan Password" 
          type="password" 
          label="Buat Password" 
          variant="default" 
          color="black" 
          :error="errors.password"
        >
          <template #action>
             <NuxtLink to="/forgot-password" class="text-xs text-blue-600 cursor-pointer font-bold hover:underline">Lupa Password?</NuxtLink>
          </template>
        </InputsDefault>
      </div>

      <div class="flex flex-col gap-8 text-center">
        <div class="flex flex-col gap-3">
          <ButtonsPrimary 
            type="submit"
            variant="solid" 
            color="black" 
            class="rounded-lg flex justify-center items-center gap-2"
            :disabled="isLoading"
            :class="{ 'opacity-70 cursor-not-allowed': isLoading }"
          >
            <span v-if="isLoading" class="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></span>
            {{ isLoading ? 'Memproses...' : 'Masuk' }}
          </ButtonsPrimary>
          
          <p class="font-inter text-sm text-black/70">
            Belum punya akun? 
            <NuxtLink to="/register" class="font-bold underline hover:text-black transition">Daftar</NuxtLink>
          </p>
        </div>
        
        <div class="space-y-4">
          <div class="border-2 border-tertiary rounded-full"></div>
          <div class="flex justify-evenly px-16">
            <a href="/" class="font-inter font-bold hover:text-black/60 text-sm text-accent transition-all duration-300">Terms of Service</a>
            <p class="font-inter font-bold text-accent transition-all duration-300">-</p>
            <a href="/" class="font-inter font-bold hover:text-black/60 text-sm text-accent transition-all duration-300">Contact Us</a>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import { AuthenticationStore } from '~/stores/authentication' 
import { useToastStore } from '~/stores/items/toast'

definePageMeta({
  layout: 'guest'
})

const authStore = AuthenticationStore()
const router = useRouter()
const toast = useToastStore()
const isLoading = ref(false)

const form = reactive({
  email: '',
  password: '',
})

const errors = reactive({
  email: '',
  password: ''
})

const resetErrors = () => {
  errors.email = ''
  errors.password = ''
}

const handleLogin = async () => {
  resetErrors()
  
  isLoading.value = true 

  try {
    await authStore.login({
      email: form.email,
      password: form.password
    })

    toast.add({
      title: 'Login Berhasil!',
      message: `Selamat datang ${form.email}`,
      type: 'success',
      duration: 3000
    })

    router.push('/') 
    
  } catch (err: any) {
    const errorMsg = err?.message || 'Terjadi kesalahan pada server'
    
    toast.add({
      title: 'Login Gagal',
      message: errorMsg, 
      type: 'error',
      duration: 3000
    })

    if (err?.errors) {
      if (err.errors.email) {
        errors.email = Array.isArray(err.errors.email) ? err.errors.email[0] : err.errors.email
      }
      if (err.errors.password) {
        errors.password = Array.isArray(err.errors.password) ? err.errors.password[0] : err.errors.password
      }
    }
  } finally {
    isLoading.value = false 
  }
}
</script>