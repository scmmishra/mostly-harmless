<template>
  <img :class="styleClass" src="@/assets/logo.svg" alt="logo">
</template>
<script>
export default {
  name: "Logo",
  props: ["size"],
  computed: {
    styleClass: function() {
      if (this.size == "medium") {
        return `inline-block profile w-24 h-24`;
      }
      if (this.size == "large") {
        return `inline-block profile w-64 h-64`;
      } else return `inline-block profile w-10 h-10`;
    }
  }
};
</script>