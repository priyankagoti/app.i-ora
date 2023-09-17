<template>
  <div class="p-5 bg-white rounded-[20px] pb-0 shadow-lg shadow-black/5">
    <h4 class="mb-5 text-base font-bold">{{translatedObject.objectRecent}}</h4>
    <table class="w-full text-xs font-semibold">
      <thead class="bg-body">
        <tr class="text-sm font-bold">
          <td class="p-4 rounded-l-xl">{{translatedObject.objectProject}}</td>
          <td class="p-4 3xl:w-[250px] w-[200px]">{{translatedObject.objectProgress}}</td>
          <td class="p-4 text-center">{{ translatedObject.objectStatus }}</td>
          <td class="p-4 rounded-r-xl text-center">{{translatedObject.objectAction}}</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="object in objects" :key="object.id" class="border-b border-body">
          <td class="p-4">
            <span class="block text-black font-semibold">{{ object.client_name }}</span>
            <span class="block text-[#8F9BB3] text-[10px]">{{ object.pending_task }} Open, {{ object.complete_task }} Completed</span>
          </td>
          <td class="text-xs font-normal p-4">
            <div class="relative h-1 w-full bg-body rounded-lg">
              <div class="absolute h-[6px] rounded-lg  w-1/2 -top-[1.5px] left-0" :class="object.progress > 50 ? 'bg-sky' : 'bg-[#FFA384]' " ></div>
            </div>
          </td>
          <td class="p-4 text-center">
            <svg v-if="object.isCompleted" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" class="inline" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M8.125 15.5C12.2673 15.5 15.625 12.1423 15.625 8C15.625 3.85775 12.2673 0.5 8.125 0.5C3.98275 0.5 0.625 3.85775 0.625 8C0.625 12.1423 3.98275 15.5 8.125 15.5ZM11.6553 7.03025C11.7919 6.8888 11.8675 6.69935 11.8658 6.5027C11.864 6.30605 11.7852 6.11794 11.6461 5.97889C11.5071 5.83983 11.3189 5.76095 11.1223 5.75924C10.9257 5.75754 10.7362 5.83313 10.5948 5.96975L7.375 9.1895L5.65525 7.46975C5.5138 7.33313 5.32435 7.25754 5.1277 7.25924C4.93105 7.26095 4.74294 7.33983 4.60389 7.47889C4.46483 7.61794 4.38595 7.80605 4.38424 8.0027C4.38254 8.19935 4.45813 8.3888 4.59475 8.53025L6.84475 10.7802C6.9854 10.9209 7.17613 10.9998 7.375 10.9998C7.57387 10.9998 7.7646 10.9209 7.90525 10.7802L11.6553 7.03025Z"
                fill="#15C787"
              />
            </svg>
            <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" class="inline" >
              <path
                d="M8.12468 0.5C3.9831 0.5 0.625 3.8581 0.625 7.99968C0.625 12.1413 3.9831 15.5 8.12468 15.5C12.2663 15.5 15.625 12.1413 15.625 7.99968C15.625 3.8581 12.2663 0.5 8.12468 0.5ZM9.68595 12.1235C9.29992 12.2759 8.99262 12.3914 8.76214 12.4714C8.50362 12.5559 8.23279 12.5964 7.96087 12.5914C7.49357 12.5914 7.12976 12.4771 6.87071 12.2492C6.61167 12.0213 6.48278 11.7324 6.48278 11.3813C6.48278 11.2448 6.4923 11.1051 6.51135 10.9629C6.53489 10.8008 6.56604 10.64 6.60468 10.481L7.08786 8.77429C7.1304 8.61048 7.16722 8.45492 7.19643 8.31016C7.22564 8.16413 7.2396 8.03016 7.2396 7.90825C7.2396 7.69111 7.19452 7.53873 7.105 7.45302C7.01421 7.3673 6.84341 7.3254 6.58881 7.3254C6.46437 7.3254 6.33611 7.34381 6.20468 7.38254C6.07452 7.42254 5.96151 7.45873 5.86881 7.49429L5.99643 6.96857C6.31262 6.83968 6.61548 6.72921 6.90437 6.63778C7.16854 6.54939 7.44487 6.5027 7.72341 6.49937C8.18754 6.49937 8.54564 6.61238 8.7977 6.83587C9.04849 7.06 9.17484 7.35143 9.17484 7.70952C9.17484 7.78381 9.16595 7.9146 9.14881 8.10127C9.13391 8.2757 9.10158 8.4482 9.0523 8.61619L8.57167 10.3178C8.52859 10.4717 8.4932 10.6276 8.46564 10.7851C8.43947 10.9161 8.42397 11.049 8.41929 11.1825C8.41929 11.4086 8.46944 11.5629 8.57103 11.6448C8.67135 11.7267 8.84722 11.7679 9.09611 11.7679C9.21357 11.7679 9.345 11.747 9.49357 11.7063C9.64087 11.6657 9.74754 11.6295 9.81484 11.5984L9.68595 12.1235ZM9.60087 5.21683C9.38233 5.42291 9.09168 5.53507 8.79135 5.52921C8.47643 5.52921 8.20468 5.42508 7.97865 5.21683C7.87116 5.12227 7.7853 5.00568 7.7269 4.87497C7.66851 4.74427 7.63895 4.60252 7.64024 4.45937C7.64024 4.16413 7.75452 3.91016 7.97865 3.7C8.19766 3.49227 8.48954 3.37894 8.79135 3.38444C9.1069 3.38444 9.37738 3.48921 9.60087 3.7C9.825 3.91016 9.93738 4.16413 9.93738 4.45937C9.93738 4.75587 9.825 5.00857 9.60087 5.21683Z"
                fill="#FFA384"
              />
            </svg>
          </td>
          <td class="text-center p-4">
            <RouterLink :to="{name:'EditCustomer',params:{id:object.id, type:'view'}}">
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
            </RouterLink>

          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "DashboardRecentObjects",
  components: {},
  data() {
    return {
      Projects: [
        {
          id: 1,
          name: "Restaurant Athen",
          open: 2,
          completed: 10,
          progress: 20,
          isCompleted: true
        },
        {
          id: 2,
          name: "Restaurant Athen",
          open: 2,
          completed: 10,
          progress: 20,
          isCompleted: true
        },
        {
          id: 3,
          name: "Restaurant Athen",
          open: 2,
          completed: 10,
          progress: 20,
          isCompleted: true
        },
        {
          id: 4,
          name: "Restaurant Athen",
          open: 2,
          completed: 10,
          progress: 20,
          isCompleted: true
        },
        {
          id: 5,
          name: "Restaurant Athen",
          open: 2,
          completed: 10,
          progress: 20,
          isCompleted: false
        },
        {
          id: 6,
          name: "Restaurant Athen",
          open: 2,
          completed: 10,
          progress: 20,
          isCompleted: false
        },
        {
          id: 7,
          name: "Restaurant Athen",
          open: 2,
          completed: 10,
          progress: 20,
          isCompleted: true
        },
        {
          id: 8,
          name: "Restaurant Athen",
          open: 2,
          completed: 10,
          progress: 20,
          isCompleted: true
        },
        {
          id: 9,
          name: "Restaurant Athen",
          open: 2,
          completed: 10,
          progress: 20,
          isCompleted: false
        },
        {
          id: 10,
          name: "Restaurant Athen",
          open: 2,
          completed: 10,
          progress: 20,
          isCompleted: true
        },
      ],
      objects:[]
    };
  },
  mounted() {
    this.fetch()
  },
  methods:{
    fetch(){
      // eslint-disable-next-line no-undef
      axios.get('dashboard/objects')
      .then(res => {
        this.objects = res.data.object
        console.log(res)
      })
    }
  }
};
</script>
