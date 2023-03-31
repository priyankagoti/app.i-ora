<template>
  <div class="body-space">
    <SideBarComponent />
    <HeaderComponent title="Admin" />
    <div class="flex items-center justify-between mb-30">
      <button class="btn btn-sky">
        <svg class="mr-2" width="13" height="16" viewBox="0 0 13 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M7.23502 8.59151V1.38235C7.23502 0.894941 6.84008 0.5 6.35266 0.5C5.86525 0.5 5.47031 0.894941 5.47031 1.38235V8.54727L2.83366 5.62621C2.50719 5.26445 1.94919 5.23586 1.58742 5.56233C1.22566 5.8888 1.19707 6.4468 1.52354 6.80856L5.69707 11.4321C5.77914 11.523 5.87923 11.5958 5.99097 11.646C6.10271 11.6961 6.22366 11.7224 6.34613 11.7233H6.35213C6.59742 11.7233 6.83213 11.6209 6.99907 11.4409L11.1726 6.94092C11.504 6.58374 11.4828 6.02539 11.1257 5.69398C10.7685 5.36256 10.2101 5.38374 9.87872 5.74092L7.23502 8.59151ZM8.36471 15.5003H4.34118C1.94753 15.5003 0 13.5527 0 11.1591C0 10.6717 0.394941 10.2767 0.882353 10.2767C1.36976 10.2767 1.76471 10.6717 1.76471 11.1591C1.76471 12.5797 2.92059 13.7356 4.34118 13.7356H8.36471C9.78529 13.7356 10.9412 12.5797 10.9412 11.1591C10.9412 10.6717 11.3361 10.2767 11.8235 10.2767C12.3109 10.2767 12.7059 10.6717 12.7059 11.1591C12.7059 13.5527 10.7584 15.5003 8.36471 15.5003Z"
            fill="black"
          />
        </svg>
        <span>Export</span>
      </button>
      <AddEmployeeComponent/>
    </div>
    <div class="p-5 bg-white rounded-[20px] pb-0">
      <div class="flex items-center mb-5 justify-between">
        <h4 class="mb-0 text-base font-bold">All Employee</h4>
        <div class="flex">
          <div class="relative w-60 mr-5">
            <input type="text" placeholder="Employee Id" class="w-full text-xs py-3 pl-5 pr-20 bg-[#E7F2F8] rounded-full" />
            <button class="w-8 h-8 flex items-center justify-center absolute top-1 right-1 bg-white rounded-full">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.161 12.622C9.99752 13.4847 8.55708 13.9949 6.99747 13.9949C3.13289 13.9949 0 10.8621 0 6.99747C0 3.13286 3.13286 0 6.99747 0C10.8621 0 13.9949 3.13282 13.9949 6.99743C13.9949 8.56773 13.4777 10.0172 12.6043 11.1848L15.7043 14.2848L15.7101 14.2906C16.0989 14.6826 16.0963 15.3155 15.7043 15.7043C15.6109 15.7969 15.5001 15.8702 15.3783 15.92C15.2565 15.9697 15.1261 15.995 14.9946 15.9942C14.863 15.995 14.7326 15.9697 14.6108 15.92C14.489 15.8702 14.3782 15.7969 14.2848 15.7043L11.161 12.622ZM10.4376 10.6234C9.5415 11.4739 8.33042 11.9956 6.99747 11.9956C4.23703 11.9956 1.99929 9.7579 1.99929 6.99747C1.99929 4.23703 4.23707 1.99929 6.99747 1.99929C9.7579 1.99929 11.9956 4.23703 11.9956 6.99747C11.9956 8.34088 11.4656 9.56049 10.6033 10.4586C10.5677 10.4868 10.5336 10.5176 10.5012 10.5512C10.4787 10.5745 10.4575 10.5986 10.4376 10.6234Z"
                  fill="#74BDCB"
                />
              </svg>
            </button>
          </div>
          <div class="relative w-60">
            <input type="text" placeholder="Employee Name" class="w-full text-xs py-3 pl-5 pr-20 bg-[#E7F2F8] rounded-full" />
            <button class="w-8 h-8 flex items-center justify-center absolute top-1 right-1 bg-white rounded-full">
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.161 12.622C9.99752 13.4847 8.55708 13.9949 6.99747 13.9949C3.13289 13.9949 0 10.8621 0 6.99747C0 3.13286 3.13286 0 6.99747 0C10.8621 0 13.9949 3.13282 13.9949 6.99743C13.9949 8.56773 13.4777 10.0172 12.6043 11.1848L15.7043 14.2848L15.7101 14.2906C16.0989 14.6826 16.0963 15.3155 15.7043 15.7043C15.6109 15.7969 15.5001 15.8702 15.3783 15.92C15.2565 15.9697 15.1261 15.995 14.9946 15.9942C14.863 15.995 14.7326 15.9697 14.6108 15.92C14.489 15.8702 14.3782 15.7969 14.2848 15.7043L11.161 12.622ZM10.4376 10.6234C9.5415 11.4739 8.33042 11.9956 6.99747 11.9956C4.23703 11.9956 1.99929 9.7579 1.99929 6.99747C1.99929 4.23703 4.23707 1.99929 6.99747 1.99929C9.7579 1.99929 11.9956 4.23703 11.9956 6.99747C11.9956 8.34088 11.4656 9.56049 10.6033 10.4586C10.5677 10.4868 10.5336 10.5176 10.5012 10.5512C10.4787 10.5745 10.4575 10.5986 10.4376 10.6234Z"
                  fill="#74BDCB"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <table class="w-full text-xs font-semibold mb-4">
        <thead class="bg-body font-bold">
          <tr class="text-sm">
            <td class="p-4 rounded-l-xl">Name</td>
            <td class="p-4">Employee ID</td>
            <td class="p-4">Phone</td>
            <td class="p-4">Join Date</td>
            <td class="p-4">Objects</td>
            <td class="p-4 rounded-r-xl text-center">Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="employee in Employees" :key="employee.ID" class="border-b border-body">
            <td class="p-4">
              <div class="flex items-center">
                <img class="mr-2" :src="employee.img" alt="" width="32" height="32" />
                <span>{{ employee.name }}</span>
              </div>
            </td>
            <td class="text-xs font-normal p-4">
              <span>{{ employee.employeeID }}</span>
            </td>
            <td class="text-xs font-normal p-4">
              <span>{{ employee.Phone }}</span>
            </td>
            <td class="text-xs font-normal p-4">
              <span>{{ employee.JoinDate }}</span>
            </td>
            <td class="text-xs font-normal p-4">
              <span class="whitespace-pre">{{ employee.objects }}</span>
            </td>
            <td class="text-center p-4">
              <div class="flex items-center justify-center">
                <button class="p-2">
                  <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                    <path
                      d="M8.375 0C5.1682 0 2.37518 2.01412 0.875 5.00006C2.37518 7.98655 5.1682 10.0001 8.375 10.0001C11.5818 10.0001 14.3748 7.98655 15.875 5.00006C14.3748 2.01412 11.5818 0 8.375 0ZM8.375 8.12512C6.64886 8.12512 5.24994 6.7262 5.24994 5.00006C5.24994 3.27393 6.64886 1.875 8.375 1.875C10.1011 1.875 11.5001 3.27393 11.5001 5.00006C11.5001 6.7262 10.1011 8.12512 8.375 8.12512Z"
                      fill="#74BDCB"
                    />
                    <path
                      d="M8.375 6.875C9.41053 6.875 10.25 6.03553 10.25 5C10.25 3.96447 9.41053 3.125 8.375 3.125C7.33947 3.125 6.5 3.96447 6.5 5C6.5 6.03553 7.33947 6.875 8.375 6.875Z"
                      fill="#74BDCB"
                    />
                  </svg>
                </button>
                <button class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.10998 3.42095L0.931449 10.5995C0.66693 10.8645 0.499756 11.2111 0.457066 11.5831L0.171041 14.0946C0.152396 14.2712 0.171215 14.4497 0.226268 14.6186C0.281321 14.7874 0.371371 14.9427 0.490535 15.0744C0.6097 15.2061 0.7553 15.3111 0.917826 15.3827C1.08035 15.4543 1.25615 15.4908 1.43374 15.4898H1.58024L4.09168 15.2038C4.46219 15.1609 4.80808 14.9966 5.07533 14.7364L12.2539 7.55087L8.10998 3.42095ZM14.6816 2.81402L12.8608 0.993221C12.7085 0.840297 12.5275 0.718955 12.3281 0.636159C12.1288 0.553363 11.9151 0.510742 11.6992 0.510742C11.4834 0.510742 11.2697 0.553363 11.0704 0.636159C10.871 0.718955 10.69 0.840297 10.5377 0.993221L8.84946 2.68147L12.9933 6.82534L14.6816 5.1371C14.8345 4.98478 14.9558 4.80376 15.0386 4.60444C15.1214 4.40511 15.1641 4.1914 15.1641 3.97556C15.1641 3.75972 15.1214 3.546 15.0386 3.34668C14.9558 3.14735 14.8345 2.96633 14.6816 2.81402Z"
                      fill="#15C787"
                    />
                  </svg>
                </button>
                <button class="p-2">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M14.4141 2.75H0.914062C0.71515 2.75 0.524385 2.82902 0.383732 2.96967C0.24308 3.11032 0.164063 3.30109 0.164062 3.5C0.164063 3.69891 0.24308 3.88968 0.383732 4.03033C0.524385 4.17098 0.71515 4.25 0.914062 4.25H2.41406V13.25C2.41406 13.8467 2.65112 14.419 3.07307 14.841C3.49503 15.2629 4.06733 15.5 4.66406 15.5H10.6641C11.2608 15.5 11.8331 15.2629 12.2551 14.841C12.677 14.419 12.9141 13.8467 12.9141 13.25V4.25H14.4141C14.613 4.25 14.8037 4.17098 14.9444 4.03033C15.085 3.88968 15.1641 3.69891 15.1641 3.5C15.1641 3.30109 15.085 3.11032 14.9444 2.96967C14.8037 2.82902 14.613 2.75 14.4141 2.75ZM6.91406 11C6.91406 11.1989 6.83504 11.3897 6.69439 11.5303C6.55374 11.671 6.36297 11.75 6.16406 11.75C5.96515 11.75 5.77438 11.671 5.63373 11.5303C5.49308 11.3897 5.41406 11.1989 5.41406 11V7.25C5.41406 7.05109 5.49308 6.86032 5.63373 6.71967C5.77438 6.57902 5.96515 6.5 6.16406 6.5C6.36297 6.5 6.55374 6.57902 6.69439 6.71967C6.83504 6.86032 6.91406 7.05109 6.91406 7.25V11ZM9.91406 11C9.91406 11.1989 9.83504 11.3897 9.69439 11.5303C9.55374 11.671 9.36298 11.75 9.16406 11.75C8.96515 11.75 8.77438 11.671 8.63373 11.5303C8.49308 11.3897 8.41406 11.1989 8.41406 11V7.25C8.41406 7.05109 8.49308 6.86032 8.63373 6.71967C8.77438 6.57902 8.96515 6.5 9.16406 6.5C9.36298 6.5 9.55374 6.57902 9.69439 6.71967C9.83504 6.86032 9.91406 7.05109 9.91406 7.25V11ZM6.16406 2H9.16406C9.36298 2 9.55374 1.92098 9.69439 1.78033C9.83504 1.63968 9.91406 1.44891 9.91406 1.25C9.91406 1.05109 9.83504 0.860322 9.69439 0.71967C9.55374 0.579018 9.36298 0.5 9.16406 0.5H6.16406C5.96515 0.5 5.77438 0.579018 5.63373 0.71967C5.49308 0.860322 5.41406 1.05109 5.41406 1.25C5.41406 1.44891 5.49308 1.63968 5.63373 1.78033C5.77438 1.92098 5.96515 2 6.16406 2Z"
                      fill="#FFA384"
                    />
                  </svg>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="p-4 pt-0 flex justify-between items-center">
        <p class="text-[10px]">Showing data 1 to 8 of 256K entries</p>
        <PagerComponent />
      </div>
    </div>
  </div>
</template>

<script>
import SideBarComponent from "../../components/SideBar.vue";
import HeaderComponent from "../../components/Header.vue";
import PagerComponent from "../../components/Pager.vue";
import AddEmployeeComponent from "./AddEmployee.vue"
export default {
  name: "AdminComponent",
  components: {
    SideBarComponent,
    HeaderComponent,
    PagerComponent,
    AddEmployeeComponent
  },
  data() {
    return {
      Employees: [
        {
          ID: "1",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Berry Cuda",
          employeeID: "LA-0234",
          Phone: "+ 264-625-3454",
          JoinDate: "30 Apr, 2020",
          objects: "Restaurant Athen \n Maxx Club  +3"
        },
        {
          ID: "2",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          employeeID: "LA-0234",
          Phone: "+ 264-625-3454",
          JoinDate: "30 Apr, 2020",
          objects: "Restaurant Athen \n Maxx Club  +3"
        },
        {
          ID: "3",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Rudy Bertlett",
          employeeID: "LA-0234",
          Phone: "+ 264-625-3454",
          JoinDate: "30 Apr, 2020",
          objects: "Restaurant Athen \n Maxx Club  +3"
        },
        {
          ID: "4",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Misty Tusan",
          employeeID: "LA-0234",
          Phone: "+ 264-625-3454",
          JoinDate: "30 Apr, 2020",
          objects: "Restaurant Athen \n Maxx Club  +3"
        },
        {
          ID: "5",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          employeeID: "LA-0234",
          Phone: "+ 264-625-3454",
          JoinDate: "30 Apr, 2020",
          objects: "Restaurant Athen \n Maxx Club  +3"
        },
        {
          ID: "6",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          employeeID: "LA-0234",
          Phone: "+ 264-625-3454",
          JoinDate: "30 Apr, 2020",
          objects: "Restaurant Athen \n Maxx Club  +3"
        },
        {
          ID: "7",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          employeeID: "LA-0234",
          Phone: "+ 264-625-3454",
          JoinDate: "30 Apr, 2020",
          objects: "Restaurant Athen \n Maxx Club  +3"
        },
        {
          ID: "8",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          employeeID: "LA-0234",
          Phone: "+ 264-625-3454",
          JoinDate: "30 Apr, 2020",
          objects: "Restaurant Athen \n Maxx Club  +3"
        },
        {
          ID: "9",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          employeeID: "LA-0234",
          Phone: "+ 264-625-3454",
          JoinDate: "30 Apr, 2020",
          objects: "Restaurant Athen \n Maxx Club  +3"
        },
        {
          ID: "10",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          employeeID: "LA-0234",
          Phone: "+ 264-625-3454",
          JoinDate: "30 Apr, 2020",
          objects: "Restaurant Athen \n Maxx Club  +3"
        }
      ]
    };
  }
};
</script>
