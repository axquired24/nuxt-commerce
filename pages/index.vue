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
    <!-- <div class="column-3 gap-6 mt-5"> -->
    <div class="grid grid-cols-4 gap-6 mt-5">
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
        Helper.generateProduct({
          nameParam: 'Jaket Pria Bomber',
          imagesParam:[
            'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_aa1fac7c-bd42-46db-a3ff-971c6c05967f.jpeg.webp?ect=4g',
            'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_a87af2ee-64d6-43b7-9f7a-79a15760b41a.jpeg.webp?ect=4g',
            'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_d66a8b9e-af65-4c64-a77c-57f50fe227c3.jpeg.webp?ect=4g',
            'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_2439a778-e2e1-48d3-a190-5ddf3f19e3d0.jpeg.webp?ect=4g'
          ]
        })
      )
      this.products.push(
        Helper.generateProduct({
          nameParam: 'Jaket Keren Pria',
          imagesParam:[
            'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/25/41031812-7a63-4864-b9d2-21b152622953.jpg.webp?ect=4g'
          ]})
      )
      this.products.push(
        Helper.generateProduct({
          nameParam: 'Jaket parka outer pria',
          imagesParam:[
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/24/22a5399c-5f91-494e-b782-729f3b0cd0f3.jpg.webp?ect=4g',
            'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/24/844d9846-4f1e-47f0-9e91-460f93d3b717.jpg.webp?ect=4g',
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/24/f84e2cb1-3fdd-4276-aba1-ad33503482da.jpg.webp?ect=4g'
          ]})
      )
      this.products.push(
        Helper.generateProduct({
          nameParam: 'Jaket Bomber Pria Taslan Tahan Air',
          imagesParam:[
            'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/18/b35da03e-05ed-42f5-b965-a63c89e81b67.jpg.webp?ect=4g',
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/18/105d3bac-e1c1-4093-a847-d9aa0db09566.jpg.webp?ect=4g',
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/18/ad3dae1c-87cf-4542-8eff-c438b1ade33a.jpg.webp?ect=4g',
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/18/f9dc9ada-cfb9-487e-9967-7099a0cd04f0.jpg.webp?ect=4g'

          ]})
      )
      this.products.push(
        Helper.generateProduct({
          nameParam: 'Celana Bahan formal Kerja pria Slim fit',
          imagesParam:[
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/7/1/b8d64181-5dcd-43dd-a466-d1ea69b81d6d.jpg.webp?ect=4g',
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/30/0236feb9-49ed-45ff-9ed6-e6a649c36463.jpg.webp?ect=4g',
            'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/30/418a0a0c-01fd-49e7-aaed-b7d070ef5e1b.jpg.webp?ect=4g'
          ]})
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
