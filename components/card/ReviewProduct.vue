<template>
<div class="p-4 rounded-md shadow-sm hover:shadow-md cursor-pointer border border-gray-200">
  <div class="flex items-center justify-between">
    <div class="flex items-center gap-1 mb-2">
      <StarIcon class="text-yellow-500 h-6" />
      <StarIcon class="text-yellow-500 h-6" />
      <StarIcon class="text-yellow-500 h-6" />
      <StarIcon class="text-yellow-500 h-6" />
      <StarIcon class="text-yellow-500 h-6" />
    </div>
      <span class="text-sm text-gray-600">
        {{ review?.dayAgo }}
      </span>
  </div>

  <div class="flex gap-4 items-center">
    <img class="rounded-full w-12 h-auto" :src="review?.avatar" alt="Customer">
    <span class="font-semibold">{{ review?.name }}</span>
  </div>
  <div class="text-gray-600 my-2 text-sm">
    Varian: {{ review?.varian }}
  </div>
  <div class="mb-2">
    {{ review?.comment }}
  </div>
</div>
</template>

<script>
import { StarIcon } from "@vue-hero-icons/solid"
export default {
	props: ['review'],
  components: {
    StarIcon
  }
}
</script>

<style scoped>

</style>
