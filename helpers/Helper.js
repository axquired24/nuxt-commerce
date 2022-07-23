import { customAlphabet } from 'nanoid'
const Helper = {
  formatRupiah: (angka=0, prefix='Rp ') => {
    angka = angka.toString();
    let number_string = angka.replace(/[^,\d]/g, "").toString();
    let split = number_string.split(",");
    let sisa = split[0].length % 3;
    let rupiah = split[0].substr(0, sisa);
    let ribuan = split[0].substr(sisa).match(/\d{3}/gi);

    // tambahkan titik jika yang di input sudah menjadi angka ribuan
    if (ribuan) {
      let separator = sisa ? "." : "";
      rupiah += separator + ribuan.join(".");
    }

    rupiah = split[1] != undefined ? rupiah + "," + split[1] : rupiah;
    if(prefix) {
      return prefix + rupiah;
    } else {
      return rupiah;
    }
  },

  generateProduct: ({
    nameParam=null,
    priceParam=60000,
    imagesParam=[],
  }) => {
    const customNano = customAlphabet('1234567890abcdefghijklmmnopqrstuvwxyz', 6)
    const imagesDefault = [
      'https://images.tokopedia.net/img/cache/700/product-1/2019/10/25/3453155/3453155_90602dea-feb9-48ea-8e43-0955a426e686_947_947.webp?ect=4g',
      'https://images.tokopedia.net/img/cache/100-square/product-1/2019/10/25/3453155/3453155_e3c9532f-5a2b-43e8-a452-b07f9066cb85_859_859.webp?ect=4g'
    ]
    const randomRating = {
      1: Math.floor(Math.random() * 101),
      2: Math.floor(Math.random() * 101),
      3: Math.floor(Math.random() * 101),
      4: Math.floor(Math.random() * 101),
      5: Math.floor(Math.random() * 101)
    }
    return {
      id: customNano(),
      name: nameParam || 'Product ' + customNano(),
      price: priceParam,
      images: imagesParam.length > 0 ? imagesParam : imagesDefault,
      rating: randomRating,
      sold: Object.entries(randomRating).reduce((acc, [key, value]) => acc + value, 0)
    }
  }
}

export default Helper
