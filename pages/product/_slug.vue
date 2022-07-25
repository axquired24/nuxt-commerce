<template>
  <div>
    <NuxtLink class="p-4 block" to="/">Kembali</NuxtLink>

    <div class="grid grid-cols-4">
      <CardProductItem :product="product" />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  data() {
    return {
      product: null
    }
  },
  methods: {
      ...mapGetters({
        getSingleProduct: 'product/get_single',
      }),
  },
  created() {
    this.product = this.getSingleProduct()
  }
}
</script>
