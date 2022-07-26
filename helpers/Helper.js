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
    descriptionParam=null
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
      description: descriptionParam,
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
      priceParam: 100000,
      imagesParam:[
        'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_aa1fac7c-bd42-46db-a3ff-971c6c05967f.jpeg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_a87af2ee-64d6-43b7-9f7a-79a15760b41a.jpeg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_d66a8b9e-af65-4c64-a77c-57f50fe227c3.jpeg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/product-1/2020/11/5/4160289/4160289_2439a778-e2e1-48d3-a190-5ddf3f19e3d0.jpeg.webp?ect=4g'
      ]
    }),
    Helper.generateProduct({
      nameParam: 'Jaket Keren Pria',
      priceParam: 110000,
      imagesParam:[
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/9/25/41031812-7a63-4864-b9d2-21b152622953.jpg.webp?ect=4g'
    ]}),
    Helper.generateProduct({
      nameParam: 'Jaket parka outer pria',
      priceParam: 115000,
      imagesParam:[
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/24/22a5399c-5f91-494e-b782-729f3b0cd0f3.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/24/844d9846-4f1e-47f0-9e91-460f93d3b717.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/24/f84e2cb1-3fdd-4276-aba1-ad33503482da.jpg.webp?ect=4g'
    ]}),
    Helper.generateProduct({
      nameParam: 'Jaket Bomber Pria Taslan Tahan Air',
      priceParam: 127000,
      imagesParam:[
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/18/b35da03e-05ed-42f5-b965-a63c89e81b67.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/18/105d3bac-e1c1-4093-a847-d9aa0db09566.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/18/ad3dae1c-87cf-4542-8eff-c438b1ade33a.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/3/18/f9dc9ada-cfb9-487e-9967-7099a0cd04f0.jpg.webp?ect=4g'
    ]}),
    Helper.generateProduct({
      nameParam: 'Celana Bahan formal Kerja pria Slim fit',
      priceParam: 87000,
      imagesParam:[
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/7/1/b8d64181-5dcd-43dd-a466-d1ea69b81d6d.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/30/0236feb9-49ed-45ff-9ed6-e6a649c36463.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/12/30/418a0a0c-01fd-49e7-aaed-b7d070ef5e1b.jpg.webp?ect=4g'
    ]}),
    Helper.generateProduct({
      nameParam: 'Outerwear Unisex Erigo Coach Jacket Beach Rod Basil',
      descriptionParam: 'Coach Jacket Erigo saat ini merupakan salah satu lini pakaian terbaik dan berkualitas tinggi di antara Local Brand Indonesia. Jaket berkerah dengan kancing jepret, saku fungsional, dan karet pada ujung lengan. Coach Jacket Erigo memiliki printed design yang unik pada bagian lengan dan punggung, dengan warna memukau siap menjadikanmu penuh semangat!',
      priceParam: 165000,
      imagesParam:[
        'https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2022/6/24/9919d355-75dd-48ec-ab38-61f2c5117471.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2022/6/24/ad812ba8-f738-45c5-8ae3-42bd176f17e6.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/hDjmkQ/2022/6/24/2c5010fc-3c4d-417f-8f91-85b8540c24a5.jpg.webp?ect=4g'
    ]}),
    Helper.generateProduct({
      nameParam: 'Hammer Man Basic Tee Online Z1TO001-G2',
      priceParam: 75000,
      descriptionParam: '- Hammer Kaos Polos Pria Lengan pendek - Berbahan Cotton 24S - Detail logo embrodary',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/7/c4025d2a-cfbc-40d8-ba13-024cd7bb0500.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/9/7/18e717a8-7956-42d7-9010-3b7b53fe3f79.jpg.webp?ect=4g',
    ]}),
    Helper.generateProduct({
      nameParam: 'Jackarmy - Tshirt Over Bk Combed 24s',
      priceParam: 85000,
      descriptionParam: 'Spesifikasi Produk - Dapat digunakan untuk daily outfit - Bahan cotton 24s, ketebalan medium - Tidak menerawang dan mampu menyerap keringat - Nyaman digunakan untuk segala aktivitas - Self manufacture, jaitan rapi',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/6/25/04f0fdfe-0df3-466e-a3fa-96bffe4a1285.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/6/25/3dc77aa3-5e3f-4b65-aae1-9856f5b35519.jpg.webp?ect=4g',
    ]}),
    Helper.generateProduct({
      nameParam: 'Houseofcuff Jaket Jeans Pria Polos Tebal Dilan Jaket Denim',
      priceParam: 245000,
      descriptionParam: '- Jacket Jeans Pria - Bahan : Jeans high quality (tidak kaku, gatal / panas ketika di pakai) - model jacket : dengan kancing jeans',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/4/13/80c92448-8430-46d4-a70e-75b8a18a02b9.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2021/4/13/cd3f498e-af9f-49d7-b837-3b91b6191c0c.jpg.webp?ect=4g',
    ]}),
    Helper.generateProduct({
      nameParam: 'Jaket Jeans Pria / Jaket Levis Warna',
      priceParam: 187000,
      descriptionParam: '- Jacket Jeans Pria - Bahan : Jeans high quality (tidak kaku, gatal / panas ketika di pakai) - model jacket : dengan kancing jeans',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/700/product-1/2020/11/14/438884574/438884574_2da68255-df90-46d0-ac61-228f23894bc1_1000_1000.jpg.webp?ect=4g',
        'https://images.tokopedia.net/img/cache/500-square/VqbcmM/2022/4/7/0a1b7621-9dc9-483f-bf44-c4cb9776c800.jpg.webp?ect=4g',
    ]}),
    Helper.generateProduct({
      nameParam: 'RICKY IS CLOWN RIC JOKER SMILEY BIKER DENIM WASHED JACKET',
      priceParam: 1438000,
      descriptionParam: 'ALL READY STOCK 100% ORIGINAL 100% AUTHENTIC BRAND NEW IN PLASTIC BAG WITH TAG',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2022/6/8/1f55f8e5-aa70-4fd2-bdc3-2db922f0f55e.jpg.webp?ect=4g',
    ]}),
    Helper.generateProduct({
      nameParam: 'Emoline Vest Denim All Varian - Jaket Rompi Denim Pria',
      priceParam: 178000,
      descriptionParam: 'Emoline - Jaket Rompi Jeans Pria Premium - Original Rompi Jeans REAL PIC ( GAMBAR ASLI )',
      imagesParam:[
        'https://images.tokopedia.net/img/cache/700/VqbcmM/2021/7/21/b4777d0c-d592-4253-96eb-0354aaac7d2f.jpg.webp?ect=4g',
    ]}),
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
