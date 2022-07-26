<template>
  <div class="grid grid-cols-12 gap-4 px-4 lg:px-10 py-6 shadow-md items-center">
    <NuxtLink to="/" class="hidden lg:block text-xl font-bold text-green-700">Tokosidia</NuxtLink>
    <div class="col-span-12 lg:col-span-9 flex items-center gap-4">
      <div class="relative w-full">
        <input class="w-full px-3 py-2 border-2 border-gray-200 text-sm text-gray-700 focus:ring-2 focus:ring-green-300 focus:outline-none rounded-md" type="text" placeholder="Cari di TokoSidia">
        <div class="flex absolute inset-y-0 right-2 items-center pl-3 pointer-events-none">
          <SearchIcon class="text-gray-500 h-5" />
        </div>
      </div>
      <div class="group cursor-pointer">
        <ShoppingCartIcon class="text-gray-500 group-hover:text-green-600" />
      </div>
      <div class="group cursor-pointer">
        <MenuIcon class="text-gray-500 group-hover:text-green-600" />
      </div>
    </div>
    <div class="hidden lg:block col-span-2 flex justify-end items-center gap-2">
      <button type="button" class="bg-green-700 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-600">Masuk</button>
      <button type="button" class="text-green-700 border border-green-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-100">Daftar</button>
    </div>
  </div>
</template>

<script>
import { ShoppingCartIcon, MenuIcon } from "@vue-hero-icons/solid"
import { SearchIcon } from "@vue-hero-icons/outline"

export default {
	components: {
    ShoppingCartIcon,
    SearchIcon,
    MenuIcon
  }
}
</script>
