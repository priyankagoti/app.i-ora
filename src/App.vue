<template>
  <div class="font-OpenSans">
    <router-view/>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

import store from "@/store";

export default {
  name: "App",
  mounted() {
    store.dispatch('auth/fetchJsonFile','en')
  },
};
</script>
