<template>
  <div>

  </div>
  <div
    class="body-space"
  >
    <SideBarComponent />
    <HeaderComponent :title="translatedObject.customersLabel"/>
    <ObjectStatistics :totalCustomer="totalCustomer" :totalEmployees="totalEmployees"/>
    <div class="flex items-center justify-between mb-30">
      <div class="flex">
        <div class="relative w-60 mr-5">
          <input
            type="text"
            :placeholder="translatedObject.customerNameLabel"
            v-model="search"
            @input="fetch"
            class="w-full text-xs py-3 pl-5 pr-20 bg-[#E7F2F8] rounded-full border-2 border-white"
          />
          <button
            class="w-8 h-8 flex items-center justify-center absolute top-1.5 right-1.5 bg-white rounded-full"
          >
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
<!--        <div class="relative w-60">
          <input
            type="text"
            placeholder="Employee Name"
            class="w-full text-xs py-3 pl-5 pr-20 bg-[#E7F2F8] rounded-full border-2 border-white"
          />
          <button
            class="w-8 h-8 flex items-center justify-center absolute top-1.5 right-1.5 bg-white rounded-full"
          >
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M11.161 12.622C9.99752 13.4847 8.55708 13.9949 6.99747 13.9949C3.13289 13.9949 0 10.8621 0 6.99747C0 3.13286 3.13286 0 6.99747 0C10.8621 0 13.9949 3.13282 13.9949 6.99743C13.9949 8.56773 13.4777 10.0172 12.6043 11.1848L15.7043 14.2848L15.7101 14.2906C16.0989 14.6826 16.0963 15.3155 15.7043 15.7043C15.6109 15.7969 15.5001 15.8702 15.3783 15.92C15.2565 15.9697 15.1261 15.995 14.9946 15.9942C14.863 15.995 14.7326 15.9697 14.6108 15.92C14.489 15.8702 14.3782 15.7969 14.2848 15.7043L11.161 12.622ZM10.4376 10.6234C9.5415 11.4739 8.33042 11.9956 6.99747 11.9956C4.23703 11.9956 1.99929 9.7579 1.99929 6.99747C1.99929 4.23703 4.23707 1.99929 6.99747 1.99929C9.7579 1.99929 11.9956 4.23703 11.9956 6.99747C11.9956 8.34088 11.4656 9.56049 10.6033 10.4586C10.5677 10.4868 10.5336 10.5176 10.5012 10.5512C10.4787 10.5745 10.4575 10.5986 10.4376 10.6234Z"
                fill="#74BDCB"
              />
            </svg>
          </button>
        </div>-->
      </div>
      <RouterLink to="/new-customer" class="btn btn-sky">
        <svg
          class="mr-2"
          width="11"
          height="12"
          viewBox="0 0 11 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M9.875 5.375H6.125V1.625C6.125 1.27938 5.845 1 5.5 1C5.155 1 4.875 1.27938 4.875 1.625V5.375H1.125C0.78 5.375 0.5 5.65438 0.5 6C0.5 6.34562 0.78 6.625 1.125 6.625H4.875V10.375C4.875 10.7206 5.155 11 5.5 11C5.845 11 6.125 10.7206 6.125 10.375V6.625H9.875C10.22 6.625 10.5 6.34562 10.5 6C10.5 5.65438 10.22 5.375 9.875 5.375Z"
            fill="black"
          />
          <path
            d="M9.875 5.375H6.125V1.625C6.125 1.27938 5.845 1 5.5 1C5.155 1 4.875 1.27938 4.875 1.625V5.375H1.125C0.78 5.375 0.5 5.65438 0.5 6C0.5 6.34562 0.78 6.625 1.125 6.625H4.875V10.375C4.875 10.7206 5.155 11 5.5 11C5.845 11 6.125 10.7206 6.125 10.375V6.625H9.875C10.22 6.625 10.5 6.34562 10.5 6C10.5 5.65438 10.22 5.375 9.875 5.375"
            stroke="black"
          />
        </svg>
        <span>{{translatedObject.addNewCustomerBtn}}</span>
      </RouterLink>
    </div>
    <div class="p-5 bg-white rounded-[20px] pb-0">
      <h4 class="mb-5 text-base font-bold">{{translatedObject.recentCustomersLabel}}</h4>
      <table class="w-full text-xs font-semibold mb-4">
        <thead class="bg-body">
          <tr class="text-sm font-bold">
            <td class="p-4 rounded-l-xl">{{translatedObject.name}}</td>
            <td class="p-4" width="250px">
              <button>
                <svg
                  width="19"
                  height="16"
                  viewBox="0 0 19 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.4894 3.78636L15.2635 0.355122C14.8146 -0.118374 13.965 -0.118374 13.5157 0.355122L10.2898 3.78636C9.78206 4.25415 9.81169 4.97903 10.2969 5.40396C10.7791 5.83068 11.5291 5.79819 11.9717 5.33351L13.1709 4.06846V14.8525C13.1709 15.4881 13.7006 15.9987 14.3561 15.9987C15.0117 15.9987 15.5413 15.487 15.5413 14.855V4.06846L16.7413 5.33219C17.1643 5.77676 17.9128 5.84747 18.4161 5.40264C18.9005 4.97903 18.9302 4.25415 18.4894 3.78636ZM7.63021 10.6674L6.43021 11.9315V1.145C6.43021 0.512954 5.90058 0.00124986 5.24503 0.00124986C4.58948 0.00124986 4.05985 0.512954 4.05985 1.145V11.929L2.85985 10.6674C2.43689 10.2228 1.68838 10.1521 1.18504 10.5971C0.702453 11.0238 0.670231 11.7476 1.11212 12.2136L4.33803 15.6449C4.78692 16.1184 5.63655 16.1184 6.0858 15.6449L9.31172 12.2136C9.75394 11.7476 9.72134 11.0242 9.23879 10.5971C8.82279 10.1711 8.07465 10.2032 7.63021 10.6674Z"
                    fill="#032440"
                  />
                </svg>
              </button>
              {{translatedObject.employeeTitle}}
            </td>
            <td class="p-4"> {{translatedObject.startDateLabel}}</td>
            <td class="p-4">{{translatedObject.objectStatus}}</td>
            <td class="p-4 rounded-r-xl text-center">{{translatedObject.objectAction}}</td>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="object in displayedPosts"
            :key="object.id"
            class="border-b border-body"
          >
            <td class="p-4">
              <div class="flex">
                <img
                  class="mr-2"
                  src="../../assets/images/profiles/profile-1.png"
                  alt=""
                  width="32"
                  height="32"
                />
                <div class="">
                  <span class="block text-black font-semibold">{{
                      object.client_name
                  }}</span>
                  <span class="block text-[#8F9BB3] text-[10px]"
                    >{{ object.pending_task }} Open,
                    {{ object.complete_task }} Completed</span
                  >
                </div>
              </div>
            </td>
            <td class="text-xs font-normal p-4">
              {{ object.employee_objects_count }}
            </td>
            <td class="text-xs font-normal p-4">
              {{ object.start_date }}
            </td>
            <td class="p-4">
              <span
                v-if="object.status===1"
                class="py-2 px-3 rounded-full bg-[#BFFFE8] text-[#15C787]"
                >Active</span
              >
              <span
                v-else
                class="py-2 px-3 rounded-full bg-[#FFF0F0] text-[#FF0000]"
                >Deactive</span
              >
            </td>
            <td class="text-center p-4">
              <div class="flex items-center justify-center">
<!--                <button class="p-2">
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
                </button>-->
                <RouterLink :to="{name:'EditCustomer',params:{id:object.id}}">
                  <button class="p-2">
                    <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                          d="M8.10998 3.42095L0.931449 10.5995C0.66693 10.8645 0.499756 11.2111 0.457066 11.5831L0.171041 14.0946C0.152396 14.2712 0.171215 14.4497 0.226268 14.6186C0.281321 14.7874 0.371371 14.9427 0.490535 15.0744C0.6097 15.2061 0.7553 15.3111 0.917826 15.3827C1.08035 15.4543 1.25615 15.4908 1.43374 15.4898H1.58024L4.09168 15.2038C4.46219 15.1609 4.80808 14.9966 5.07533 14.7364L12.2539 7.55087L8.10998 3.42095ZM14.6816 2.81402L12.8608 0.993221C12.7085 0.840297 12.5275 0.718955 12.3281 0.636159C12.1288 0.553363 11.9151 0.510742 11.6992 0.510742C11.4834 0.510742 11.2697 0.553363 11.0704 0.636159C10.871 0.718955 10.69 0.840297 10.5377 0.993221L8.84946 2.68147L12.9933 6.82534L14.6816 5.1371C14.8345 4.98478 14.9558 4.80376 15.0386 4.60444C15.1214 4.40511 15.1641 4.1914 15.1641 3.97556C15.1641 3.75972 15.1214 3.546 15.0386 3.34668C14.9558 3.14735 14.8345 2.96633 14.6816 2.81402Z"
                          fill="#15C787"
                      />
                    </svg>
                  </button>
                </RouterLink>
                <button class="p-2" @click="$event => {openDeleteConfirmation(object);setId(object.id)}">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
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
        <p class="text-[10px]">
          {{translatedObject.showDataPaginationText}}
          {{from}}
          {{ translatedObject.toPaginationText }}
          {{to}}
          {{translatedObject.fromPaginationText}}
          {{total}}
          {{translatedObject.entriesPaginationText}}
        </p>
        <PagerComponent :totalLength="objects.length" :currentPage="currentPage" :per-page="perPage" @pageChange="updatePage"/>
      </div>
    </div>
  </div>
  <ConfirmationModal
    :isOpenModal="isConfDeleteOpen"
    :title="translatedObject.objectDeletePopupTitle"
    :text="`&#x25cf;  ${translatedObject.objectDeletePopupText}`"
    :closeModal="$event => {toggleConfDelete(false); assignedEmployees=[]; newObjectId=null}"
    :btnText="translatedObject.deleteObjPopupBtn"
    :closeBtnText="translatedObject.cancelBtn"
    :SubmitModal="deleteObject"
    :disabled-close="!deleteLoading && !newObjectId"
  >
    <template v-slot:body>
      <div class="flex">
        <p class="label font-semibold"> &#x25cf; {{translatedObject.assignedEmployee}}:</p>
        <ul class="text-sm font-normal ml-1.5">
          <li v-for="(employee, index) in assignedEmployees" :key="employee.id">{{index+1}}. {{employee.first_name}} {{employee.last_name}}</li>
        </ul>
      </div>
      <div>
        <label class="label font-semibold">&#x25cf; {{translatedObject.objectsWithoutThisObject}}</label>
        <select class="input" v-model="this.newObjectId">
          <option :value="null" selected disabled>{{translatedObject.selectCustomer}}</option>
          <option v-for="object in unassignedObjects" :key="object.id" :value="object.id">{{object.client_name}}</option>
        </select>
      </div>

    </template>
    </ConfirmationModal>
</template>
  
<script>
import {ref} from "vue";
import SideBarComponent from "../../components/SideBar.vue";
import HeaderComponent from "../../components/Header.vue";
import ObjectStatistics from "./ObjectStatistics.vue";
import ConfirmationModal from "../../components/ConfirmationModal.vue";
import PagerComponent from "../../components/Pager.vue";
import { RouterLink } from "vue-router";
  import axios from "axios";
export default {
  name: "ObjectComponent",
  components: {
    SideBarComponent,
    HeaderComponent,
    ObjectStatistics,
    RouterLink,
    ConfirmationModal,
    PagerComponent,
  },
  data() {
    return {
      currentPage:1,
      perPage:5,
      search: '',
      objects: [],
      deletingId: '',
      totalCustomer: '',
      totalEmployees: '',
      assignedEmployees: [],
      unassignedObjects:[],
      newObjectId:null,
      deleteLoading: false,
    };
  },
  mounted() {
    this.fetch()
    this.fetchStatistics()
  },
  watch:{
    objects(){
      this.currentPage=1
    }
  },
  computed: {
    displayedPosts () {
      return this.paginate(this.objects);
    },
      from() {
        return this.perPage * (this.currentPage - 1) + (this.objects.length > 0 ? 1 : 0)
      },
      to() {
        let highBound = this.from + this.perPage - 1
        if (this.total < highBound) {
          highBound = this.total
        }
        return highBound
      },
      total() {
        return this.objects ? this.objects.length : 0
      },
  },
  methods:{
    updatePage(page) {
      this.currentPage = page;
      // Implement logic to update your data based on the new page
    },
    paginate (info) {
      let page = this.currentPage;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  info.slice(from, to);
    },
    fetch() {
      axios.get('object',{
        params:{
          search:this.search
        }
      })
      .then(response => {
        this.objects = response.data.object
      })
    },
    fetchStatistics(){
      axios.get('dashboard/count')
          .then(response => {
            this.totalCustomer = response.data['total customer']
            this.totalEmployees = response.data['total employees']
          })
    },
    getUnassinedObjects(id){
      axios.get(`without-delete-object/${id}`)
          .then(response => {
            this.unassignedObjects = response.data.objects
          })
    },
    setId(id){
      this.deletingId=id
    },
    async getAssignedEmployees(id){
      axios.get(`object-assign-employee/${id}`)
          .then(response => {
            this.assignedEmployees=response.data.employees
          })
    },
    async openDeleteConfirmation(object){
      await this.getAssignedEmployees(object.id)
      await this.getUnassinedObjects(object.id)
      this.toggleConfDelete(true)
    },
    deleteObject(){
      this.deleteLoading = true
      axios.delete(`delete-old-object-assign-new-object/${this.deletingId}/${this.newObjectId}`)
          .then(()=>{
            this.fetch()
            this.toggleConfDelete(false)
            this.deleteLoading = false
            this.newObjectId = null
          })
          .catch(()=> this.deleteLoading = false)
    },
  },
  setup() {
    let isConfDeleteOpen = ref(false);
    let toggleConfDelete = (s) => {
      isConfDeleteOpen.value = s;
    }
    return {isConfDeleteOpen, toggleConfDelete}
  }
};
</script>
  