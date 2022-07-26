<template>
<div @click="$emit('afterClick', product)" class="w-full cursor-pointer no-break-inside p-2 mb-6 border-2 border-gray-100 rounded-md shadow-sm hover:shadow-lg transition duration-300 ease-in-out">
  <img class="w-full h-auto" :src="product.images[0]" :alt="product" />
  <div class="mt-2 text-sm">{{ product.name }}</div>
  <div class="font-semibold">{{ formatRupiah(product.price) }}</div>
  <div class="flex items-center text-sm text-gray-500">
    <StarIcon class="text-yellow-500 h-5" />
    <span class="ml-1 mr-2">{{ ratingAvg(product.rating) }}</span>
    <span>Terjual {{ product.sold }}</span>
  </div>
</div>
</template>

<script>
import { StarIcon } from "@vue-hero-icons/solid"
import Helper from '~/helpers/Helper'

export default {
	props: ['product', 'click'],
  components: {
    StarIcon
  },
  methods: {
    formatRupiah(angka=0, prefix='Rp ') {
      return Helper.formatRupiah(angka, prefix)
    },
    ratingAvg(rating) {
      // @TODO(albert): logic rating
      const rand = Math.random() * 5
      if(rand < 3) {
        return this.ratingAvg(rating)
      }
      return rand.toFixed(1)
    }
  }
}
</script>
