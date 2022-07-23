<template>
  <button type="button" class="text-green-700 border border-green-700 px-4 py-2 rounded-md text-sm font-semibold hover:bg-green-100">
    {{ label }}
  </button>
</template>

<script>
export default {
	props: ['label']
}
</script>
