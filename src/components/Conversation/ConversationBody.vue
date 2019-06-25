<template>
  <div class="overflow-auto h-100 flex-grow">
    <div class="flex flex-col">
      <CBubble
        :message="`Hi, I am unable to access my richpanel instance. Can you please help me recover my password?`"
      />
      <CBubble
        :type="`Sent`"
        :message="`Hi, you can reset your password by following the instructions here https://abc.com/reset`"
      />
    </div>
  </div>
</template>

<script>
import CBubble from "@/components/Conversation/ConversationBubble";
export default {
  name: "CBody",
  components: {
    CBubble
  }
};
</script>

<style>
</style>
