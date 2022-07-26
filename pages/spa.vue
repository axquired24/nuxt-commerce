<template>
  <div class="py-5 lg:px-32 w-full">
    <!-- Banner Section -->
    <MainTopBanner />

    <div class="px-4 lg:px-0">
      <!-- Categories -->
      <div class="flex gap-4 py-5 my-2 overflow-x-scroll">
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
      <div class="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 lg:gap-4 xl:gap-6 lg:mt-5">
        <template v-for="(product, productIdx) in products">
          <CardProductItem :key="productIdx" :product="product" @afterClick="gotoDetail" />
        </template>
      </div>

      <!-- <div class="my-10 flex justify-center">
        <button class="px-4 py-2 text-gray-600 border-2 border-gray-500 rounded-md cursor-pointer hover:bg-gray-100">Lihat Selebihnya</button>
      </div> -->
    </div>
  </div>
</template>

<script>
import Helper from '@/helpers/Helper.js'
import { mapGetters, mapMutations } from 'vuex'

const slug = require('slug')
export default {
  layout: 'toko-sidia-spa',
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
      setCollectionProduct: 'product/set_collection'
    }),

    async fetchProducts() {
      let products = []
      try {
        const response = await fetch('https://run.mocky.io/v3/2adaafe4-548a-4529-9ceb-139bbc0a14ef')
        products = await response.json()
      } catch (e) {
        console.error('Failed to fetch product list', e)
      } // end try
      this.setCollectionProduct(products)
      return products
    },

    gotoDetail(product) {
      this.setSingleProduct(product)
      this.$router.push({
        path: '/product/detail',
        query: {
          slug: slug(product.name),
          id: product.id
        }
      })
      console.log({product})
    }
  },
  mounted() {
    const self = this
    this.fetchProducts().then(products => {
      self.products = products
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
