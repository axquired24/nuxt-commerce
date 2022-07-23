<template>
  <div>
    <MainNavbar />
    <Nuxt />
    <MainFooter />
  </div>
</template>

<script>
export default {
  head: {
    title: 'TokoSidia',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'TokoSidia' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  }
}
</script>

<style lang="postcss">
@layer utilities {
    @variants responsive {
        .column {
            column-count: 1;
        }
        .column-2 {
            column-count: 2;
        }
        .column-3 {
            column-count: 3;
        }
        .column-4 {
            column-count: 4;
        }
        .no-break-inside {
            break-inside: avoid;
        }
    }
}
</style>
