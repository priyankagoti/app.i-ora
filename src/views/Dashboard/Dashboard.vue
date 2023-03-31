<template>
  <div class="bg-body w-screen h-screen pl-[330px] pt-[110px] pr-[30px] pb-[30px] overflow-auto">
    <SideBarComponent />
    <HeaderComponent />
    <DashboardStatistics />
    <div class="grid gap-[30px] grid-cols-2">
      <DashboardEmployees />
      <DashboardRecentObjects />
    </div>
  </div>
</template>

<script>
import SideBarComponent from "../../components/SideBar.vue";
import HeaderComponent from "../../components/Header.vue";
import DashboardStatistics from "./DashboardStatistics.vue";
import DashboardEmployees from "./DashboardEmployees.vue";
import DashboardRecentObjects from "./DashboardRecentObjects.vue";

export default {
  name: "DashboardComponent",
  components: {
    SideBarComponent,
    HeaderComponent,
    DashboardStatistics,
    DashboardEmployees,
    DashboardRecentObjects
  }
};
</script>
