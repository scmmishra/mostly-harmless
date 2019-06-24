<template>
  <div class="w-full flex flex-row">
    <ConversationsList/>
    <Conversation :conversation="id"/>
  </div>
</template>

<script>
import ConversationsList from "@/components/ConversationsList/ConversationsList";
import Conversation from "@/components/Conversation/Conversation";

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
