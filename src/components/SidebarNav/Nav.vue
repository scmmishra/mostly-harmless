<template>
  <div class="w-16 h-screen bg-white">
    <div class="flex flex-col items-center">
      <div class="pb-6 pt-4">
        <logo/>
      </div>
      <div class="text-gray-800 hover:text-blue-500">
        <FeatherIcon :name="`activity`" :size="20" class="py-5"/>
      </div>
      <div class="text-gray-800 hover:text-blue-500">
        <FeatherIcon :name="`message-square`" :size="20" class="py-5"/>
      </div>
      <div class="text-gray-800 hover:text-blue-500">
        <FeatherIcon :name="`at-sign`" :size="20" class="py-5"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav"
};
</script>
