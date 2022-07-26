<template>
  <div class="py-5 px-32 w-full">
    <!-- Banner Section -->
    <MainTopBanner />

    <!-- Categories -->
    <div class="flex gap-4 mt-5">
      <template v-for="(cat, catIdx) in categories">
        <BtnShopCategory :label="cat" :key="catIdx" />
      </template>
    </div>

    <!-- Products -->
    <template v-if="products.length < 1">
      <div class="flex justify-center my-5">
        <img src="/loading-green.gif" alt="Loading">
      </div>
    </template>
    <!-- <div class="column-3 gap-6 mt-5"> -->
    <div class="grid grid-cols-4 gap-6 mt-5">
      <template v-for="(product, productIdx) in products">
        <CardProductItem :key="productIdx" :product="product" @afterClick="gotoDetail" />
      </template>
    </div>
    <div class="my-10 flex justify-center">
      <button class="px-4 py-2 text-gray-600 border-2 border-gray-500 rounded-md cursor-pointer hover:bg-gray-100">Lihat Selebihnya</button>
    </div>
  </div>
</template>

<script>
import Helper from '@/helpers/Helper.js'
import { mapGetters, mapMutations } from 'vuex'

const slug = require('slug')
export default {
  layout: 'toko-sidia',
  data() {
    return {
      categories: [
        'Shoes',
        'Bags',
        'Accessories',
        'Clothing',
        'Jacket',
        'Belt'
      ],
      products: []
    }
  },
  loading: true,
  methods: {
    ...mapMutations({
      setSingleProduct: 'product/set_single',
    }),

    async fetchProducts() {
      let products = []
      try {
        const response = await fetch('https://run.mocky.io/v3/f576c02d-4ca2-43f6-a8e1-274f4489c8b7')
        products = await response.json()
      } catch (e) {
        console.error('Failed to fetch product list', e)
      } // end try
      return products
    },

    gotoDetail(product) {
      this.setSingleProduct(product)
      this.$router.push({
        path: '/product/' + slug(product.name),
      })
      console.log({product})
    }
  },
  mounted() {
    const self = this
    this.$nextTick(() => {
      self.$nuxt.$loading.start()
      self.fetchProducts().then(products => {
        self.products = products
        self.$nuxt.$loading.finish()
      })
    })

    // Generate Static Products
    // const staticProducts = Helper.staticProducts()
    // this.products = staticProducts
    // console.log({
    //   staticProducts
    // })
  },
  name: 'IndexPage'
}
</script>
