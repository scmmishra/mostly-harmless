<template>
  <div class="w-3/4 flex flex-col justify-between h-screen border-r">
    <CHeader/>
    <CBody/>
    <CActions/>
  </div>
</template>

<script>
import CHeader from "@/components/Conversation/ConversationHeader";
import CBody from "@/components/Conversation/ConversationBody";
import CActions from "@/components/Conversation/ConversationActions";

export default {
  name: "Conversation",
  props: ["conversation"],
  components: {
    CHeader,
    CBody,
    CActions
  }
};
</script>

<style>
</style>
