<template>
  <form @submit.prevent="handleRegister" class="flex justify-start items-center p-5 w-screen h-screen">
    
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

    <div class="flex flex-col bg-white backdrop-blur-md rounded-3xl py-10 lg:w-[1200px] px-10 md:px-32 lg:px-64 mx-auto gap-5 md:gap-7">
      <div class="space-y-2">
        <p class="font-inter text-4xl">Buat Akun.</p>
        <p class="font-inter text-sm text-black/50">Buat akun buat dapetin banyak kelebihan robaloxs</p>
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
        />

        <InputsDefault 
          v-model="form.confirmPassword"
          placeholder="Masukan Konfirmasi Password" 
          type="password" 
          label="Konfirmasi Password" 
          variant="default" 
          color="black" 
          :error="errors.confirmPassword"
        />
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
            {{ isLoading ? 'Memproses...' : 'Daftar' }}
          </ButtonsPrimary>
          
          <p class="font-inter text-sm text-black/70">
            Udah punya akun? 
            <NuxtLink to="/login" class="font-bold underline hover:text-black transition-colors">Masuk</NuxtLink>
          </p>
        </div>
        
        <div class="space-y-4">
          <div class="border-2 border-tertiary rounded-full"></div>
          <div class="flex justify-between md:justify-evenly items-center px-16">
            <a href="/" class="font-inter font-bold hover:text-black/60 text-xs md:text-sm text-accent transition-all duration-300">Terms of Service</a>
            <p class="font-inter font-bold text-accent transition-all duration-300">-</p>
            <a href="/" class="font-inter font-bold hover:text-black/60 text-xs md:text-sm text-accent transition-all duration-300">Contact Us</a>
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

const form = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

const isLoading = ref(false)
const localError = ref<string | null>(null)

const errors = reactive({
  email: '',
  password: '',
  confirmPassword: ''
})

const resetErrors = () => {
  errors.email = ''
  errors.password = ''
  errors.confirmPassword = ''
  localError.value = null
}

const handleRegister = async () => {
  resetErrors()

  let isValid = true
  
  if (form.password && form.confirmPassword && form.password !== form.confirmPassword) {
    errors.confirmPassword = "Password tidak cocok!"
    isValid = false
  }

  isLoading.value = true
  
  try {
    await authStore.register({
      email: form.email,
      password: form.password
    })

    toast.add({
      title: 'Registrasi berhasil!',
      message: `Selamat datang ${form.email}`,
      type: 'success',
      duration: 3000
    })
    
    router.push('/') 

  } catch (err: any) {
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