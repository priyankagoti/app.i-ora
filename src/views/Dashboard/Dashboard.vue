<template>
  <div class="body-space">
    <SideBarComponent />
    <HeaderComponent :title="translatedObject.dashboardTitle" />
    <DashboardStatistics />
    <div class="grid 3xl:gap-[30px] gap-6 grid-cols-2">
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
