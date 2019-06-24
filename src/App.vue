<template>
<body class="bg-gray-200">
  <div class="flex flex-row">
    <Nav/>
    <router-view/>
  </div>
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
