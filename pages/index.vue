<template>
  <div class="py-5 px-32 w-full">
    <!-- Banner Section -->
    <div class="flex justify-center">
      <!-- <img class="rounded-md" src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/7/21/ecee69cf-65bc-4a96-bd07-d20700544fd5.jpg.webp?ect=3g" alt="Promo"> -->
      <img class="rounded-md" src="https://images.tokopedia.net/img/cache/1208/NsjrJu/2022/7/7/80507a63-2e1b-4bd2-b375-ad58a5842d3c.jpg.webp?ect=3g" alt="Promo">
    </div>

    <!-- Categories -->
    <div class="flex gap-4 mt-5">
      <template v-for="(cat, catIdx) in categories">
        <BtnShopCategory :label="cat" :key="catIdx" />
      </template>
    </div>

    <!-- Products -->
    <div class="column-4 gap-6 mt-5">
      <template v-for="(product, productIdx) in products">
        <CardProductItem :key="productIdx" :product="product" />
      </template>
    </div>
    <div class="my-10 flex justify-center">
      <button class="px-4 py-2 text-gray-600 border-2 border-gray-500 rounded-md cursor-pointer hover:bg-gray-100">Lihat Selebihnya</button>
    </div>
  </div>
</template>

<script>
import Helper from '@/helpers/Helper.js'
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
  methods: {
    pushProduct(countProduct=10) {
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
      this.products.push(
        Helper.generateProduct({imagesParam:[]})
      )
    }
  },
  mounted() {
    this.pushProduct(10)
  },
  name: 'IndexPage'
}
</script>
