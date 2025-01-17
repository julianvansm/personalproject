<template>

  <div class="flex overflow-x-scroll bg-red-50 z-20 sticky flex-nowrap text-nowrap">
    <div v-for="n in 13" class="mx-10 my-10">
      <div class=" border-2 h-20 h-20 border-Custom1 rounded-lg">
        <img class="w-full h-full " :height="100" :width="100" src="/public/vite.svg">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    english: Boolean,
  },
};
</script>

<style scoped>

</style>