<template>
<div class="p-10 bg-green-500 grid grid-cols-4 text-green-800">
  <div class="flex flex-col gap-2 text-sm">
    <div class="text-xl font-semibold">
      Tokosidia
    </div>
    <template v-for="(link, linkIdx) in linkCollection.toko">
      <NuxtLink :to="link.to" :key="linkIdx" class="hover:text-green-600">
        {{ link.label }}
      </NuxtLink>
    </template>
  </div>
  <div class="flex flex-col gap-2 text-sm">
    <div class="text-xl font-semibold">
      Kontak
    </div>
    <template v-for="(link, linkIdx) in linkCollection.kontak">
      <NuxtLink :to="link.to" :key="linkIdx" class="hover:text-green-600">
        {{ link.label }}
      </NuxtLink>
    </template>
  </div>
  <div class="flex flex-col gap-2">
    <div class="text-xl font-semibold">
      Ikuti Kami
    </div>
    <div class="flex gap-2 items-center">
      <a href="https://facebook.com" target="_blank">
        <IconFacebook class="text-green-800 hover:text-green-700 h-8" />
      </a>
      <a href="https://facebook.com" target="_blank">
        <IconInstagram class="text-green-800 hover:text-green-700 h-8" />
      </a>
      <a href="https://facebook.com" target="_blank">
        <IconTwitter class="text-green-800 hover:text-green-700 h-8" />
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
	data() {
    return {
      linkCollection: {
        toko: [
          {
            label: 'Tentang Kami',
            to: '/'
          },
          {
            label: 'Afiliasi',
            to: '/'
          },
          {
            label: 'Kebijakan Pengguna',
            to: '/'
          },
          {
            label: 'Blog',
            to: '/'
          },
          {
            label: 'Karir',
            to: '/'
          },
        ],
        kontak: [
          {
            label: 'Hubungi Kami',
            to: '/'
          },
          {
            label: 'Pengaduan Pelanggan',
            to: '/'
          },
          {
            label: 'Sering ditanyakan',
            to: '/'
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
