<template>
  <p :class="classList">{{ message }}</p>
</template>

<script>
export default {
  name: "CBubble",
  props: ["type", "message", "time"],
  computed: {
    classList: function() {
      if (this.type === "Sent") {
        return `self-end mx-4 mt-4 px-4 py-2 rounded-lg bg-blue-500 text-white max-w-lg`;
      } else {
        return `self-start mx-4 mt-4 px-4 py-2 rounded-lg bg-gray-400 max-w-lg`;
      }
    }
  }
};
</script>

<style>
</style>
