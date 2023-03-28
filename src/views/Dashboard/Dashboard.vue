<template>
  <div class="bg-[#E7F2F8] w-screen h-screen">
    <SideBarComponent />
  </div>
</template>
  
  <script>
import SideBarComponent from "../../components/SideBar.vue";
export default {
  name: "DashboardComponent",
  components: {
    SideBarComponent,
  },
};
</script>
  