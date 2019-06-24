<template>
  <div class="w-full">
    <ConversationsList/>
    <Conversation :conversation="id"/>
  </div>
</template>

<script>
import ConversationsList from "@/components/Conversations/ConversationsList";
import Conversation from "@/components/Conversations/Conversation";

export default {
  name: "Messages",
  props: ["id"],
  components: {
    ConversationsList,
    Conversation
  }
};
</script>

<style>
</style>
