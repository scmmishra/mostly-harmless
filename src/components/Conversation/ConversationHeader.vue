<template>
  <div class="bg-white py-3 px-4 border-b">
    <div class="flex justify-between">
      <div class="flex">
        <img
          class="w-12 h-12 rounded-full mr-4"
          :src="'https://ui-avatars.com/api/?background=EBF8FF&color=63B3ED&name=Elon+Musk'"
          alt="Elon Musk"
        >
        <div class="self-center">
          <p class="text-gray-900 text-xl font-bold">Elon Musk</p>
        </div>
      </div>
      <div class="self-center">
        <FeatherIcon :name="`info`" :size="20"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CHeader"
};
</script>

<style>
</style>
