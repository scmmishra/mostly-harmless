<template>
<body class="bg-gray-200">
  <Nav/>
  <Conversations/>
  <Body/>
</body>
</template>

<script>
import Nav from "@/components/SidebarNav/Nav";

export default {
  name: "app",
  components: {
    Nav
  }
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
