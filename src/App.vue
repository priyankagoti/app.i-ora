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
    let lang = store.getters["auth/getLanguage"] ? store.getters["auth/getLanguage"]:'en'
    store.dispatch('auth/fetchJsonFile',lang)
  },
};
</script>
