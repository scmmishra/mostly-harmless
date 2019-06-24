<template>
  <div class="p-4 border-b bg-white hover:bg-gray-200">
    <div class="flex">
      <div class="w-1/5">
        <img
          class="w-12 h-12 rounded-full mr-4"
          :src="userInfo.avatar || 'https://ui-avatars.com/api/?background=EBF8FF&color=63B3ED&name=' + userInfo.name"
          :alt="userInfo.name"
        >
      </div>
      <div class="w-4/5">
        <div class="flex justify-between">
          <div>
            <p class="text-gray-900 text-base font-medium">{{ userInfo.name }}</p>
            <p
              class="text-gray-500 text-xs font-light"
            >{{ conversationInfo.lastMessageTime | moment("LT")}}</p>
          </div>
          <div
            v-if="conversationInfo.openCount"
            class="flex text-white rounded-full bg-blue-500 h-6 w-6 text-sm justify-center"
          >
            <span class="self-center">{{ conversationInfo.openCount }}</span>
          </div>
        </div>
        <p class="text-gray-600 text-sm font-light">{{ conversationInfo.lastMessage }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: ["userInfo", "conversationInfo"]
};
</script>

<style>
</style>
