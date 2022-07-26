<template>
  <div class="py-5 px-20 w-full">
    <!-- breadcrumbs -->
    <div class="py-4 text-sm flex items-center gap-2 text-green-600">
      <span>Home</span>
      <ChevronRightIcon />
      <span>Men Fashion</span>
      <ChevronRightIcon />
      <span>{{ product.name }}</span>
    </div>

    <!-- Product Action -->
    <div class="grid grid-cols-4 gap-8">
      <div>
        <img class="w-full h-auto" :src="product.images[0]" :alt="product.name" />
      </div>

      <div class="col-span-2">
        <div class="text-lg font-semibold">{{ product.name }}</div>
        <div class="flex items-center text-sm text-gray-500">
          <span class="mr-2">Terjual {{ product.sold }}</span>
          <StarIcon class="text-yellow-500 h-5" />
          <span>{{ ratingAvg(product.rating) }}</span>
        </div>
        <div class="text-2xl my-5">{{ formatRupiah(product.price) }}</div>

        <MenuTab class="my-2" :tabs="productTabs">
          <template v-slot:content="{ activeTab }">
            <div v-show="activeTab.name == 'description'">
              Deskripsi Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </div>
            <div v-show="activeTab.name == 'info'">
              Hari & Jam Operasional Toko : <br />
              Senin - Jumat : 09.00 17.00 WIB <br />
              ( Sabtu-Minggu & tanggal Merah tidak ada pengiriman )  <br />
            </div>
            <div v-show="activeTab.name == 'sizechart'">
              Table ukuran produk toko : <br />
              <img class="w-full p-4"
                src="https://i.ibb.co/tXSVjmt/31ecbbaac42cb7f6e9142789c0593e3e.jpg" alt="Size Chart" />
            </div>
          </template>
        </MenuTab>
      </div>

      <div class="right-wrapper">
        <div class="p-4 border border-gray-300 rounded-md">
          <div class="font-semibold">Warna</div>
          <div class="my-2 flex items-center gap-3">
            <template v-for="va in variants">
              <span @click="setActiveVariant(va.name)"
                :key="va.index">
                  <IconCircleSvg
                  :class="[va.color, va.name == selectedVariant ? 'varian-active' : null].join(' ')"
                  class="varian-button" />
              </span>
            </template>
          </div>

          <div class="font-semibold mt-10">Ukuran</div>
          <div class="my-2 flex items-center gap-3">
            <template v-for="sz in sizes">
              <span @click="setActiveSize(sz)"
                :key="sz">
                  <span
                  :class="[sz == selectedSize ? 'bg-gray-600 text-white' : null].join(' ')"
                  class="text-xs uppercase rounded-full w-8 h-8 flex justify-center items-center border border-gray-600 hover:bg-gray-600 hover:text-white cursor-pointer">
                    {{ sz }}
                  </span>
              </span>
            </template>
          </div>

          <div class="font-semibold mt-10">Jumlah</div>
          <div class="relative w-full">
            <div class="flex absolute inset-y-0 left-2 items-center pr-3">
              <MinusIcon @click="setQty('minus')" class="cursor-pointer h-5" />
            </div>
            <input class="w-full px-4 py-2 border-b-2 border-gray-600 text-center focus:outline-none" type="number" step="1" min="1" v-model="qty" />
            <div class="flex absolute inset-y-0 right-2 items-center pl-3">
              <PlusIcon @click="setQty('plus')" class="cursor-pointer h-5" />
            </div>
          </div>

          <div class="font-semibold mt-10">
            <button type="button" class="px-4 py-3 rounded-md w-full text-sm text-white bg-green-600 hover:bg-green-500">Tambah ke Keranjang</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Product Review -->
    <div class="grid grid-cols-6 gap-10 pt-5 mt-5 border-t border-gray-200">
      <div>
        <div class="text-xl text-center font-semibold">Ulasan Pembeli</div>
        <div class="flex gap-2 mt-5 justify-center items-center">
          <StarIcon class="text-yellow-500 h-10" />
          <span class="text-7xl text-gray-800">
            {{ ratingAvg(product.rating) }}
          </span>
          <span class="text-gray-600 pb-1 self-end">
            / 5.0
          </span>
        </div>
        <div class="mt-5 flex justify-center text-sm text-gray-700">
          <span>{{ product.sold - 10 }} rating</span>
          <span class="mx-2">-</span>
          <span>{{ product.sold - 15 }} ulasan</span>
        </div>
      </div>

      <div class="col-span-4">
        <div class="text-xl font-semibold">Ulasan Pilihan</div>
        <template v-for="(review, reviewIdx) in reviews">
          <CardReviewProduct class="my-6" :key="reviewIdx" :review="review" />
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import { ChevronRightIcon, StarIcon, PlusIcon, MinusIcon } from "@vue-hero-icons/solid"
import { mapGetters, mapMutations } from 'vuex'
import Helper from '~/helpers/Helper'

export default {
  layout: 'toko-sidia',
  components: {
    ChevronRightIcon,
    StarIcon,
    PlusIcon, MinusIcon
  },
  data() {
    return {
      product: null,
      selectedVariant: null,
      selectedSize: null,
      qty: 1,
      variants: [
        {name: 'gray', color: 'text-gray-200'},
        {name: 'green', color: 'text-green-600'},
        {name: 'yellow', color: 'text-yellow-700'},
        {name: 'red', color: 'text-red-500'},
      ],
      sizes: [
        's','m','l','xl','xxl'
      ],
      productTabs: [
        {
          name: 'description',
          label: 'Deskripsi'
        },
        {
          name: 'info',
          label: 'Info Penting'
        },
        {
          name: 'sizechart',
          label: 'Size Chart'
        }
      ],
      reviews: [
        {
          name: 'Vivian',
          avatar: 'https://i.pravatar.cc/150?img=47',
          varian: 'Hijau',
          comment: 'Bagus Kaosnya, Udah beli 4x disini selalu puas.',
          dayAgo: '2 hari yang lalu'
        },
        {
          name: 'Zaki Nurma',
          avatar: 'https://i.pravatar.cc/150?img=48',
          varian: 'Kuning',
          comment: 'Order kelima, selalu bagus. Bakal order lagi sih ini.',
          dayAgo: '4 hari yang lalu'
        },
        {
          name: 'Fahrur Rohman',
          avatar: 'https://i.pravatar.cc/150?img=49',
          varian: 'Hijau',
          comment: 'Seller ramah, pengiriman cepat, packaging aman banget.',
          dayAgo: '3 hari yang lalu'
        },
        {
          name: 'Adam Tampan',
          avatar: 'https://i.pravatar.cc/150?img=32',
          varian: 'Merah',
          comment: 'Biar bintang yang berbicara.',
          dayAgo: '4 hari yang lalu'
        }
      ]
    }
  },
  methods: {
      ...mapGetters({
        getSingleProduct: 'product/get_single',
      }),
      formatRupiah(angka=0, prefix='Rp ') {
        return Helper.formatRupiah(angka, prefix)
      },
      ratingAvg(rating) {
        return Helper.ratingAvg(rating)
      },
      setActiveVariant(variantName) {
        this.selectedVariant = variantName
      },
      setActiveSize(size) {
        this.selectedSize = size
      },
      setQty(actionType='plus') {
        if(actionType == 'plus') {
          this.qty++
        } else if(this.qty > 1) {
          this.qty--
        } // endif
      }
  },
  created() {
    this.product = this.getSingleProduct()
  }
}
</script>

<style lang="postcss" scoped>
.varian-button {
  @apply h-6 cursor-pointer rounded-full
}
.varian-button:hover{
  @apply border border-gray-600
}
.varian-active{
  @apply border border-gray-600
}

/* Remove input number arrow spin */
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
