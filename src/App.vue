<template>
<body class="bg-gray-200">
  <div class="flex flex-row">
    <Nav/>
    <Conversations/>
  </div>
</body>
</template>

<script>
import Nav from "@/components/SidebarNav/Nav";
import Conversations from "@/components/Conversations/Conversations";

export default {
  name: "app",
  components: {
    Nav,
    Conversations
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
