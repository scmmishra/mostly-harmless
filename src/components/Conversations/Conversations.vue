<template>
  <div class="w-1/4 h-screen overflow-auto bg-white border-r">
    <div class="px-2 py-4 border-b">
      <Search/>
    </div>
    <ConversationCard
      v-for="conv in conversations"
      :key="conv.userInfo.id"
      :userInfo="conv.userInfo"
      :conversationInfo="conv.conversationInfo"
    />
  </div>
</template>

<script>
import Search from "@/components/Conversations/Search";
import ConversationCard from "@/components/Conversations/ConversationCard";

export default {
  name: "Conversations",
  components: {
    Search,
    ConversationCard
  },
  data() {
    return {
      conversations: [
        {
          userInfo: {
            name: "Joey Tribbiani",
            id: 123
          },
          conversationInfo: {
            lastMessageTime: new Date(),
            lastMessage: "I am unable to login to my site.",
            openCount: 3
          }
        },
        {
          userInfo: {
            name: "Ashley Vance",
            id: 124
          },
          conversationInfo: {
            lastMessageTime: new Date(),
            lastMessage: "I can't find my book.",
            openCount: 1
          }
        },
        {
          userInfo: {
            name: "Elon Musk",
            id: 125,
            avatar:
              "https://specials-images.forbesimg.com/imageserve/5c745ac54bbe6f072958d934/416x416.jpg"
          },
          conversationInfo: {
            lastMessageTime: new Date(),
            lastMessage: "Take me to mars.",
            openCount: 0
          }
        }
      ]
    };
  }
};
</script>

<style>
</style>
