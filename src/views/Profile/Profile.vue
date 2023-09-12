<template>
  <div class="body-space">
    <SideBarComponent />
    <HeaderComponent />
    <TabGroup>
      <TabList class="inline-flex space-x-1 rounded-full bg-white p-1 text-xl text-black mb-30">
        <Tab as="template" v-slot="{selected}">
          <button :class="['rounded-full py-4 px-11 leading-5  whitespace-nowrap focus:outline-0', selected ? 'bg-sky font-bold shadow-lg shadow-sky/40' : ' bg-white']">
            {{ translatedObject.myProfile }}
          </button>
        </Tab>
        <Tab as="template" v-slot="{selected}">
          <button :class="['rounded-full px-11 py-2.5 leading-5  whitespace-nowrap focus:outline-0', selected ? 'bg-sky font-bold shadow-lg shadow-sky/40' : ' bg-white']">
            {{ translatedObject.companyMasterBtn }}
          </button>
        </Tab>
      </TabList>
      <TabPanels>
        <TabPanel :class="['rounded-3xl bg-white p-5']">
          <ProfileInformation />
        </TabPanel>
        <TabPanel :class="['rounded-3xl bg-white p-5']">
          <CompanyMasterDate :companyId="companyId"/>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script>
import SideBarComponent from "../../components/SideBar.vue";
import HeaderComponent from "../../components/Header.vue";
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
import ProfileInformation from "./ProfileInformation.vue"
import CompanyMasterDate from "./CompanyMasterDate.vue"

export default {
  name: "ProfileComponent",
  components: {
    SideBarComponent,
    HeaderComponent,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    ProfileInformation,
    CompanyMasterDate,
  },
  data() {
    return{
      companyId: ''
    }
  },
  mounted() {
    this.fetchAuthUser()
  },
  methods: {
    fetchAuthUser(){
      // eslint-disable-next-line no-undef
      axios.get(`list-user/${this.auth_user_id}`)
          .then(response => {
            // this.user = response.data.data
            this.companyId = response.data.data.company_id
          })
    },
  }
};
</script>
