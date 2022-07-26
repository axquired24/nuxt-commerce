<template>
  <div>
    <div class="menutab flex items-center gap-4 font-semibold">
      <!-- <div class="text-green-600 pb-4 cursor-pointer border-b-2 border-green-600">Deskripsi</div>
      <div class="text-gray-700 pb-4 cursor-pointer hover:text-green-600">Info Penting</div> -->

      <template v-for="tabItem in tabs">
        <div :key="tabItem.name"
          @click="activeTab = tabItem"
          :class="activeTab.name == tabItem.name ? 'text-green-600 border-b-2 border-green-600' : null"
          class="text-gray-700 pb-4 cursor-pointer hover:text-green-600">
          {{ tabItem.label }}
        </div>
      </template>
    </div>
    <div class="contenttab py-4 text-sm text-gray-800 leading-6">
      <slot name="content" :activeTab="activeTab">
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuTab',
  props: ['tabs'],
  data() {
    return {
      activeTab: {name: null}
    }
  },
  mounted() {
    this.activeTab = this.tabs[0]
  }
}
</script>

<style scoped>

</style>
