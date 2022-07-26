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

  sumArray(arr) {
    return arr.reduce((a, b) => a + b, 0);
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
      1: Math.floor(Math.random() * 31),
      2: Math.floor(Math.random() * 31),
      3: Math.floor(Math.random() * 31),
      4: Math.floor(Math.random() * 91) + 100,
      5: Math.floor(Math.random() * 301) + 400
    }
    return {
      id: customNano(),
      name: nameParam || 'Product ' + customNano(),
      price: priceParam,
      images: imagesParam.length > 0 ? imagesParam : imagesDefault,
      rating: randomRating,
      sold: Object.entries(randomRating).reduce((acc, [key, value]) => acc + value, 0)
    }
  },
}

Helper.ratingAvg = (rating) => {
  const ratingCollection = Object.entries(rating)
  let currentSum = ratingCollection.map(item => {
    return parseInt(item[0]) * parseInt(item[1])
  })
  currentSum = Helper.sumArray(currentSum)
  let personTotal = ratingCollection.map(item => {
    return parseInt(item[1])
  })
  personTotal = Helper.sumArray(personTotal)

  return (currentSum / personTotal).toFixed(1)
}

Helper.staticProducts = () => {
  return [
    Helper.generateProduct({
      nameParam: 'Jaket Pria Bomber',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_aa1fac7c-bd42-46db-a3ff-971c6c05967f.jpeg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_a87af2ee-64d6-43b7-9f7a-79a15760b41a.jpeg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_d66a8b9e-af65-4c64-a77c-57f50fe227c3.jpeg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_2439a778-e2e1-48d3-a190-5ddf3f19e3d0.jpeg.webp?ect=4g'
      ]
    }),
    Helper.generateProduct({
      nameParam: 'Jaket Keren Pria',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/25/41031812-7a63-4864-b9d2-21b152622953.jpg.webp?ect=4g'
    ]}),
    Helper.generateProduct({
      nameParam: 'Jaket parka outer pria',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/24/22a5399c-5f91-494e-b782-729f3b0cd0f3.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/24/844d9846-4f1e-47f0-9e91-460f93d3b717.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/24/f84e2cb1-3fdd-4276-aba1-ad33503482da.jpg.webp?ect=4g'
    ]}),
    Helper.generateProduct({
      nameParam: 'Jaket Bomber Pria Taslan Tahan Air',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/18/b35da03e-05ed-42f5-b965-a63c89e81b67.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/18/105d3bac-e1c1-4093-a847-d9aa0db09566.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/18/ad3dae1c-87cf-4542-8eff-c438b1ade33a.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/18/f9dc9ada-cfb9-487e-9967-7099a0cd04f0.jpg.webp?ect=4g'
    ]}),
    Helper.generateProduct({
      nameParam: 'Celana Bahan formal Kerja pria Slim fit',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/7/1/b8d64181-5dcd-43dd-a466-d1ea69b81d6d.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/30/0236feb9-49ed-45ff-9ed6-e6a649c36463.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/30/418a0a0c-01fd-49e7-aaed-b7d070ef5e1b.jpg.webp?ect=4g'
    ]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]}),
    Helper.generateProduct({imagesParam:[]})
  ]
}

export default Helper
