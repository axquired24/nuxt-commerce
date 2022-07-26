<template>
  <div class="glide">
    <div data-glide-el="track" class="glide__track">
      <ul class="glide__slides">
        <template v-for="(ga, gaIndex) in galleries">
          <li :key="gaIndex" class="glide__slide">
            <img class="rounded-md" :src="ga" alt="Promo">
          </li>
        </template>
      </ul>
    </div>

    <div class="hidden lg:block" data-glide-el="controls">
      <button class="slider__arrow slider__arrow--prev glide__arrow glide__arrow--prev -left-4 bg-white" data-glide-dir="<">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
        </svg>
      </button>

      <button class="slider__arrow slider__arrow--next glide__arrow glide__arrow--next -right-4 bg-white" data-glide-dir=">">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
          <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import Glide from '@glidejs/glide'
// import Glide, { Controls, Breakpoints } from '@glidejs/glide/dist/glide.modular.esm'

export default {
  data() {
    return {
      glideBanner: null,
      galleries: [
        'https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/7/21/ecee69cf-65bc-4a96-bd07-d20700544fd5.jpg.webp?ect=3g',
        'https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/7/7/80507a63-2e1b-4bd2-b375-ad58a5842d3c.jpg.webp?ect=3g',
        'https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/7/26/4d3bf25c-484a-4a7a-8d9b-277a0c5598ef.jpg.webp?ect=3g'
      ]
    }
  },
  methods: {
    initBanner() {
      this.glideBanner = new Glide('.glide', {
        type: 'carousel',
        perView: 1,
        focusAt: 'center',
        autoplay: 4000,
        hoverpause: false,
        breakpoints: {
          800: {
            perView: 1,
            peek: {
              before: 20,
              after: 20
            }
          }
        }
      })

      this.glideBanner.mount()
    }
  },
  mounted() {
    this.initBanner()
  }
}
</script>

