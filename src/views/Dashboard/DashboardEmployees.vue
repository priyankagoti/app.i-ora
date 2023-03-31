<template>
  <div class="p-5 bg-white rounded-[20px] pb-0">
    <h4 class="mb-5 text-base font-bold">Employees</h4>
    <table class="w-full text-xs font-semibold">
      <thead class="bg-body font-bold">
        <tr class="text-sm">
          <td class="p-4 rounded-l-xl">Name</td>
          <td class="p-4">Email</td>
          <td class="p-4">Status</td>
          <td class="p-4 rounded-r-xl text-center">Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="employee in Employees" :key="employee.ID" class="border-b border-body">
          <td class="p-4">
            <div class="flex items-center">
              <img class="mr-2" :src="employee.img" alt="" width="32" height="32" />
              <span>{{employee.name}}</span>
            </div>
          </td>
          <td class="text-xs font-normal p-4">
            <span>{{employee.email}}</span>
          </td>
          <td class="p-4">
            <span v-if="employee.isActive" class="py-2 px-3 rounded-full bg-[#BFFFE8] text-[#15C787]">Active</span>
            <span v-else class="py-2 px-3 rounded-full bg-[#FFF0F0] text-[#FF0000]">Deactive</span>
          </td>
          <td class="text-center p-4">
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
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DashboardEmployees",
  components: {},
  data() {
    return {
      Employees: [
        {
          ID: "1",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Berry Cuda",
          email: "Berry@example.com",
          isActive: true,
        },
        {
          ID: "2",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          email: "Tressa@example.com",
          isActive: true,
        },
        {
          ID: "3",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Rudy Bertlett",
          email: "Rudy@example.com",
          isActive: true,
        },
        {
          ID: "4",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Misty Tusan",
          email: "Misty@example.com",
          isActive: true,
        },
        {
          ID: "5",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          email: "Tressa@example.com",
          isActive: true,
        },
        {
          ID: "6",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          email: "Tressa@example.com",
          isActive: true,
        },
        {
          ID: "7",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          email: "Tressa@example.com",
          isActive: true,
        },
        {
          ID: "8",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          email: "Tressa@example.com",
          isActive: true,
        },
        {
          ID: "9",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          email: "Tressa@example.com",
          isActive: false,
        },
        {
          ID: "10",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          email: "Tressa@example.com",
          isActive: false,
        }
      ]
    };
  }
};
</script>
