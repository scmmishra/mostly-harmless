<template>
  <div class="bg-white py-3 px-4 border-b">
    <div class="flex justify-between">
      <input
        class="focus:outline-0 w-11/12 focus:shadow-outline bg-gray-300 rounded py-2 px-4 appearance-none leading-normal"
        type="text"
        placeholder="Type your message"
      >
      <div class="self-center">
        <FeatherIcon :name="`paperclip`" :size="20" class="text-gray-500 cursor-pointer"/>
      </div>
      <div class="self-center">
        <FeatherIcon :name="`send`" :size="20" class="text-blue-500 cursor-pointer"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CActions"
};
</script>

<style>
</style>
