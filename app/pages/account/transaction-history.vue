<template>
  <div class="font-inter mx-auto lg:max-w-[1050px] py-20 md:max-w-[650px]">
    <div class="flex justify-between gap-2 items-start my-5">
      <p class="font-bold text-4xl mb-5 lg:text-start">Riwayat <span class="text-primary">Pesanan</span></p>
      <div class="flex gap-2">
        <ButtonsPrimary variant="solid" color="gray">Selesai</ButtonsPrimary>
        <ButtonsPrimary variant="outlined" color="gray">Pending</ButtonsPrimary>
        <ButtonsPrimary variant="outlined" color="gray">Dibatalkan</ButtonsPrimary>
      </div>
    </div>
    <div class="bg-tertiary border border-accent/50 rounded-3xl w-full h-fit p-10">
      <div class="flex justify-between items-center">
        <div class="-space-y-4">
          <p class="font-bold text-xl mb-5 text-center lg:text-start">Detail Pembelian</p>
          <p class="text-xs">Dipesan pada 01-01-2026</p>
        </div>
        <p class="font-bold text-primary">SELESAI</p>
      </div>
      <div class="flex flex-col gap-3 mt-7">
        <div class="flex items-center gap-4 px-4 py-6 bg-white rounded-3xl">
          <img :src="robux" alt="Robux" class="w-10">
          <div class="flex-1">
            <p class="font-bold">Top-up Robux via Login</p>
            <p class="text-xs mt-1 text-gray-500">15000 Robux</p>
          </div>
          <div class="text-right">
            <p class="font-bold">Rp2.100.000</p>
            <p class="text-xs mt-1 text-gray-400">3x</p>
          </div>
        </div>
        <div class="flex items-center gap-4 px-4 py-6 bg-white rounded-3xl">
          <img :src="robux" alt="Robux" class="w-10">
          <div class="flex-1">
            <p class="font-bold">Top-up Robux via Login</p>
            <p class="text-xs mt-1 text-gray-500">15000 Robux</p>
          </div>
          <div class="text-right">
            <p class="font-bold">Rp2.100.000</p>
            <p class="text-xs mt-1 text-gray-400">3x</p>
          </div>
        </div>
      </div>
      <div class="border-2 border-accent/50 w-full rounded-full my-5"></div>
      <div class="flex justify-between items-start">
        <div>
          <p class="text-xs">Total Pesanan:</p>
          <p class="text-xl font-bold">Rp2.219.000</p>
        </div>
        <ButtonsPrimary variant="solid" color="secondary" class="w-44 md:w-72 lg:w-96">Beli Lagi</ButtonsPrimary>
      </div>
    </div>
    <div class="bg-tertiary border border-accent/50 rounded-3xl w-full h-fit p-10 mt-10">
      <div class="flex justify-between items-center">
        <div class="-space-y-4">
          <p class="font-bold text-xl mb-5 text-center lg:text-start">Detail Pembelian</p>
          <p class="text-xs">Dipesan pada 01-01-2026</p>
        </div>
        <p class="font-bold text-yellow-500">PENDING</p>
      </div>
      <div class="flex flex-col gap-3 mt-7">
        <div class="flex items-center gap-4 px-4 py-6 bg-white rounded-3xl">
          <img :src="robux" alt="Robux" class="w-10">
          <div class="flex-1">
            <p class="font-bold">Top-up Robux via Login</p>
            <p class="text-xs mt-1 text-gray-500">15000 Robux</p>
          </div>
          <div class="text-right">
            <p class="font-bold">Rp2.100.000</p>
            <p class="text-xs mt-1 text-gray-400">3x</p>
          </div>
        </div>
        <div class="flex items-center gap-4 px-4 py-6 bg-white rounded-3xl">
          <img :src="robux" alt="Robux" class="w-10">
          <div class="flex-1">
            <p class="font-bold">Top-up Robux via Login</p>
            <p class="text-xs mt-1 text-gray-500">15000 Robux</p>
          </div>
          <div class="text-right">
            <p class="font-bold">Rp2.100.000</p>
            <p class="text-xs mt-1 text-gray-400">3x</p>
          </div>
        </div>
      </div>
      <div class="border-2 border-accent/50 w-full rounded-full my-5"></div>
      <div class="flex justify-between items-start">
        <div>
          <p class="text-xs">Total Pesanan:</p>
          <p class="text-xl font-bold">Rp2.219.000</p>
        </div>
        <ButtonsPrimary variant="solid" color="secondary" class="w-44 md:w-72 lg:w-96">Beli Lagi</ButtonsPrimary>
      </div>
    </div>
    <div class="bg-tertiary border border-accent/50 rounded-3xl w-full h-fit p-10 mt-10">
      <div class="flex justify-between items-center">
        <div class="-space-y-4">
          <p class="font-bold text-xl mb-5 text-center lg:text-start">Detail Pembelian</p>
          <p class="text-xs">Dipesan pada 01-01-2026</p>
        </div>
        <p class="font-bold text-red-700">DIBATALKAN</p>
      </div>
      <div class="flex flex-col gap-3 mt-7">
        <div class="flex items-center gap-4 px-4 py-6 bg-white rounded-3xl">
          <img :src="robux" alt="Robux" class="w-10">
          <div class="flex-1">
            <p class="font-bold">Top-up Robux via Login</p>
            <p class="text-xs mt-1 text-gray-500">15000 Robux</p>
          </div>
          <div class="text-right">
            <p class="font-bold">Rp2.100.000</p>
            <p class="text-xs mt-1 text-gray-400">3x</p>
          </div>
        </div>
        <div class="flex items-center gap-4 px-4 py-6 bg-white rounded-3xl">
          <img :src="robux" alt="Robux" class="w-10">
          <div class="flex-1">
            <p class="font-bold">Top-up Robux via Login</p>
            <p class="text-xs mt-1 text-gray-500">15000 Robux</p>
          </div>
          <div class="text-right">
            <p class="font-bold">Rp2.100.000</p>
            <p class="text-xs mt-1 text-gray-400">3x</p>
          </div>
        </div>
      </div>
      <div class="border-2 border-accent/50 w-full rounded-full my-5"></div>
      <div class="flex justify-between items-start">
        <div>
          <p class="text-xs">Total Pesanan:</p>
          <p class="text-xl font-bold">Rp2.219.000</p>
        </div>
        <ButtonsPrimary variant="solid" color="secondary" class="w-44 md:w-72 lg:w-96">Beli Lagi</ButtonsPrimary>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import robux from "~/assets/images/robux.png"

</script>

<style>

</style>