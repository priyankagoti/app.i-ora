<template>
  <div
    class="
    shadow-lg shadow-black/10
    bg-white 2xl:p-5 p-4 3xl:w-[300px] 2xl:w-[250px] w-[230px] h-screen fixed top-0 left-0 flex justify-between flex-col z-20"
  >
    <div class="flex flex-col">
      <img
        src="../assets/images/logo/logo.svg"
        alt="I-ORA"
        class="mx-auto mb-10 h-auto"
        width="95"
      />
      <RouterLink
        to="/dashboard"
        exact-active-class="nav-link-active"
        class="nav-link mb-2.5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="21"
          viewBox="0 0 20 21"
          fill="none"
        >
          <path
            d="M12.4 13.0719C11.9757 13.0719 11.5687 13.2404 11.2686 13.5405C10.9686 13.8406 10.8 14.2475 10.8 14.6719V17.0719C10.8 17.4962 10.9686 17.9032 11.2686 18.2032C11.5687 18.5033 11.9757 18.6719 12.4 18.6719H12.4192C13.4216 18.6719 14.2816 18.6191 15.0008 18.4591C15.7288 18.2975 16.3592 18.0159 16.852 17.5231C17.3448 17.0303 17.6256 16.4007 17.788 15.6727C17.8608 15.3423 17.9096 15.0071 17.9408 14.6703C18.024 13.7903 17.284 13.0719 16.4 13.0719H12.4ZM2 13.0911V11.4719C2 11.0475 2.16857 10.6406 2.46863 10.3405C2.76869 10.0404 3.17565 9.87188 3.6 9.87188H7.6C8.02435 9.87188 8.43131 10.0404 8.73137 10.3405C9.03143 10.6406 9.2 11.0475 9.2 11.4719V17.0719C9.2 17.4962 9.03143 17.9032 8.73137 18.2032C8.43131 18.5033 8.02435 18.6719 7.6 18.6719H7.5808C6.5784 18.6719 5.7184 18.6191 4.9992 18.4591C4.2712 18.2975 3.6408 18.0159 3.148 17.5231C2.6552 17.0303 2.3744 16.4007 2.212 15.6727C2.052 14.9535 2 14.0935 2 13.0911ZM18 9.87188C18 10.2962 17.8314 10.7032 17.5314 11.0032C17.2313 11.3033 16.8243 11.4719 16.4 11.4719H12.4C11.9757 11.4719 11.5687 11.3033 11.2686 11.0032C10.9686 10.7032 10.8 10.2962 10.8 9.87188V4.27188C10.8 3.84753 10.9686 3.44056 11.2686 3.1405C11.5687 2.84045 11.9757 2.67188 12.4 2.67188H12.4192C13.4216 2.67188 14.2816 2.72468 15.0008 2.88468C15.7288 3.04628 16.3592 3.32788 16.852 3.82068C17.3448 4.31348 17.6256 4.94308 17.788 5.67108C17.948 6.39028 18 7.25028 18 8.25268V9.87188ZM9.2 4.27188C9.2 3.84753 9.03143 3.44056 8.73137 3.1405C8.43131 2.84045 8.02435 2.67188 7.6 2.67188H7.5808C6.5784 2.67188 5.7184 2.72468 4.9992 2.88468C4.2712 3.04628 3.6408 3.32788 3.148 3.82068C2.6552 4.31348 2.3744 4.94308 2.212 5.67108C2.14027 6.00171 2.08924 6.33649 2.0592 6.67347C1.976 7.55347 2.716 8.27187 3.6 8.27187H7.6C8.02435 8.27187 8.43131 8.1033 8.73137 7.80325C9.03143 7.50319 9.2 7.09622 9.2 6.67188V4.27188Z"
            fill="currentcolor"
          />
        </svg>
        <span class="inline-block ml-3"> {{translatedObject.sidebarDashboard}} </span>
      </RouterLink>
      <RouterLink
        to="/admin"
        exact-active-class="nav-link-active"
        class="nav-link mb-2.5"
      >
        <svg
          width="16"
          height="14"
          viewBox="0 0 16 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 0.671875C3.68483 0.671875 3.37274 0.733953 3.08156 0.854564C2.79038 0.975176 2.5258 1.15196 2.30294 1.37482C2.08008 1.59768 1.9033 1.86225 1.78269 2.15343C1.66208 2.44462 1.6 2.7567 1.6 3.07188C1.6 3.38705 1.66208 3.69913 1.78269 3.99032C1.9033 4.2815 2.08008 4.54607 2.30294 4.76893C2.5258 4.99179 2.79038 5.16857 3.08156 5.28919C3.37274 5.4098 3.68483 5.47188 4 5.47188C4.63652 5.47188 5.24697 5.21902 5.69706 4.76893C6.14714 4.31884 6.4 3.70839 6.4 3.07188C6.4 2.43536 6.14714 1.82491 5.69706 1.37482C5.24697 0.924731 4.63652 0.671875 4 0.671875ZM12.8 3.87188C12.3757 3.87188 11.9687 4.04045 11.6686 4.3405C11.3686 4.64056 11.2 5.04753 11.2 5.47188C11.2 5.89622 11.3686 6.30319 11.6686 6.60325C11.9687 6.9033 12.3757 7.07188 12.8 7.07188C13.2243 7.07188 13.6313 6.9033 13.9314 6.60325C14.2314 6.30319 14.4 5.89622 14.4 5.47188C14.4 5.04753 14.2314 4.64056 13.9314 4.3405C13.6313 4.04045 13.2243 3.87188 12.8 3.87188ZM4 6.27187C2.93913 6.27187 1.92172 6.6933 1.17157 7.44345C0.421427 8.19359 0 9.21101 0 10.2719V12.6719C0 12.884 0.0842854 13.0875 0.234315 13.2376C0.384344 13.3876 0.587827 13.4719 0.8 13.4719H7.2C7.41217 13.4719 7.61566 13.3876 7.76569 13.2376C7.91571 13.0875 8 12.884 8 12.6719V10.2719C8 9.74659 7.89654 9.22644 7.69552 8.74114C7.4945 8.25584 7.19986 7.81488 6.82843 7.44345C6.45699 7.07201 6.01604 6.77738 5.53073 6.57636C5.04543 6.37534 4.52529 6.27187 4 6.27187ZM12.8 7.87188C11.9513 7.87188 11.1374 8.20902 10.5373 8.80913C9.93714 9.40925 9.6 10.2232 9.6 11.0719V12.6719C9.6 12.884 9.68429 13.0875 9.83432 13.2376C9.98434 13.3876 10.1878 13.4719 10.4 13.4719H15.2C15.4122 13.4719 15.6157 13.3876 15.7657 13.2376C15.9157 13.0875 16 12.884 16 12.6719V11.0719C16 10.2232 15.6629 9.40925 15.0627 8.80913C14.4626 8.20902 13.6487 7.87188 12.8 7.87188Z"
            fill="currentcolor"
          />
        </svg>
        <span class="inline-block ml-3"> {{translatedObject.employeesList}} </span>
      </RouterLink>
      <RouterLink
        to="/customers"
        exact-active-class="nav-link-active"
        class="nav-link mb-2.5"
      >
        <svg
          width="15"
          height="17"
          viewBox="0 0 15 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.18211 8.73746L1.07307 5.96088C0.845816 5.83743 0.577455 5.84253 0.355075 5.97473C0.132696 6.10689 0 6.34024 0 6.59894V13.04C0.000140224 13.1683 0.0341869 13.2942 0.0986897 13.4051C0.163193 13.516 0.255859 13.6078 0.367298 13.6713L5.47643 16.5759C5.58905 16.6399 5.71221 16.6719 5.83541 16.6719C5.96095 16.6719 6.08645 16.6386 6.20058 16.5722C6.42662 16.4407 6.56156 16.206 6.56156 15.9445V9.37556C6.56156 9.1092 6.41621 8.86469 6.18211 8.73746ZM13.3494 4.28547C13.3495 4.15251 13.313 4.0221 13.2438 3.90854C13.1747 3.79498 13.0756 3.70266 12.9574 3.64171L7.38619 0.753377C7.28223 0.699485 7.16678 0.671525 7.04968 0.671878C6.93258 0.672232 6.8173 0.70089 6.71367 0.755409L1.22437 3.64374C1.10729 3.70516 1.00925 3.79743 0.940854 3.91056C0.872459 4.0237 0.836318 4.15339 0.836345 4.28559C0.836003 4.41777 0.871829 4.54753 0.939943 4.66081C1.00806 4.77409 1.10586 4.86658 1.22277 4.92826L6.71211 7.83463C6.81612 7.8897 6.93197 7.91866 7.04967 7.91901C7.16736 7.91936 7.28338 7.89109 7.38772 7.83663L12.9591 4.93032C13.0771 4.86905 13.176 4.77647 13.2448 4.66271C13.3137 4.54896 13.3499 4.41844 13.3494 4.28547ZM13.9214 5.97473C13.6991 5.84253 13.4307 5.83731 13.2035 5.96085L8.09431 8.73746C7.97948 8.79981 7.88363 8.89201 7.81685 9.00431C7.75007 9.11662 7.71485 9.24487 7.71491 9.37553V15.9445C7.71491 16.206 7.84986 16.4407 8.07589 16.5722C8.19002 16.6386 8.3155 16.6718 8.44107 16.6718C8.56423 16.6718 8.68745 16.6398 8.80005 16.5758L13.9092 13.6713C14.0206 13.6078 14.1133 13.5159 14.1778 13.4051C14.2423 13.2942 14.2763 13.1682 14.2765 13.04V6.59894C14.2765 6.34024 14.1438 6.10689 13.9214 5.97473Z"
            fill="currentcolor"
          />
        </svg>
        <span class="inline-block ml-3"> {{translatedObject.customersLabel}} </span>
      </RouterLink>
    </div>
    <div class="3xl:p-5 text-xs">
      <RouterLink to="/profile" class="flex items-center mb-10">
        <img
            v-if="authUser.profile"
            :src="authUser.profile"
            alt="Michael Smith"
            width="40"
            height="40"
            class="shrink-0 border rounded-full mr-2 border-[#74BDCB]"
        />
        <img
            v-else
          src="../assets/images/profiles/59.png"
          alt="Michael Smith"
          width="40"
          height="40"
          class="shrink-0 border rounded-full mr-2 border-[#74BDCB]"
        />
        <div class="font-normal">
          <span class="block mb-1 text-[#324054]">{{authUser.first_name}} {{authUser.last_name}}</span>
          <span class="color-[#71839B]">{{authUser.email}}</span>
        </div>
      </RouterLink>
      <span @click="$event => toggleLogoutModal(true)" class="flex items-center text-[#FF0000] cursor-pointer">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          class="mr-4"
        >
          <path
            d="M10.493 10.8337L8.5763 12.7421C8.4982 12.8195 8.4362 12.9117 8.39389 13.0133C8.35159 13.1148 8.3298 13.2237 8.3298 13.3337C8.3298 13.4438 8.35159 13.5527 8.39389 13.6542C8.4362 13.7558 8.4982 13.8479 8.5763 13.9254C8.65377 14.0035 8.74594 14.0655 8.84749 14.1078C8.94904 14.1501 9.05796 14.1719 9.16797 14.1719C9.27798 14.1719 9.3869 14.1501 9.48845 14.1078C9.59 14.0655 9.68217 14.0035 9.75964 13.9254L13.093 10.5921C13.1688 10.5128 13.2283 10.4194 13.268 10.3171C13.3513 10.1142 13.3513 9.88663 13.268 9.68374C13.2283 9.58145 13.1688 9.488 13.093 9.40874L9.75964 6.07541C9.68194 5.99771 9.5897 5.93608 9.48818 5.89403C9.38666 5.85198 9.27785 5.83033 9.16797 5.83033C9.05809 5.83033 8.94928 5.85198 8.84776 5.89403C8.74624 5.93608 8.654 5.99771 8.5763 6.07541C8.4986 6.15311 8.43697 6.24535 8.39492 6.34687C8.35287 6.44839 8.33123 6.55719 8.33123 6.66708C8.33123 6.77696 8.35287 6.88577 8.39492 6.98728C8.43697 7.0888 8.4986 7.18104 8.5763 7.25874L10.493 9.16708H2.5013C2.28029 9.16708 2.06833 9.25487 1.91205 9.41115C1.75577 9.56743 1.66797 9.7794 1.66797 10.0004C1.66797 10.2214 1.75577 10.4334 1.91205 10.5897C2.06833 10.7459 2.28029 10.8337 2.5013 10.8337H10.493ZM10.0013 1.66708C8.44388 1.66012 6.91567 2.08975 5.59003 2.90723C4.26438 3.72472 3.19435 4.89733 2.5013 6.29208C2.40185 6.49099 2.38548 6.72126 2.45581 6.93224C2.52613 7.14322 2.67739 7.31762 2.8763 7.41707C3.07521 7.51653 3.30549 7.5329 3.51647 7.46257C3.72745 7.39224 3.90185 7.24099 4.0013 7.04208C4.52813 5.97818 5.3295 5.07426 6.32259 4.42373C7.31569 3.77321 8.46449 3.39967 9.65027 3.34174C10.836 3.2838 12.0158 3.54356 13.0676 4.09417C14.1194 4.64478 15.005 5.46627 15.6331 6.47374C16.2611 7.48121 16.6087 8.63811 16.64 9.82489C16.6712 11.0117 16.385 12.1853 15.8109 13.2244C15.2368 14.2636 14.3956 15.1305 13.3743 15.7358C12.3529 16.341 11.1885 16.6625 10.0013 16.6671C8.7587 16.6725 7.53976 16.3274 6.48438 15.6714C5.42899 15.0155 4.57993 14.0753 4.03464 12.9587C3.93518 12.7598 3.76078 12.6086 3.5498 12.5382C3.33882 12.4679 3.10855 12.4843 2.90964 12.5837C2.71072 12.6832 2.55947 12.8576 2.48914 13.0686C2.41881 13.2796 2.43518 13.5098 2.53464 13.7087C3.19533 15.0383 4.19924 16.1673 5.44253 16.9788C6.68582 17.7903 8.12334 18.2549 9.6064 18.3246C11.0895 18.3942 12.5642 18.0664 13.8781 17.375C15.192 16.6836 16.2973 15.6537 17.0797 14.3919C17.8621 13.1301 18.2932 11.6822 18.3284 10.1979C18.3636 8.71363 18.0016 7.2469 17.2798 5.94943C16.5581 4.65197 15.5028 3.57088 14.2232 2.818C12.9436 2.06511 11.486 1.66777 10.0013 1.66708Z"
            fill="#FF0000"
          />
        </svg>
        <span>{{translatedObject.logoutBtn}}</span>
      </span>
    </div>
  </div>
  <TransitionRoot appear :show="isLogoutModalOpen" as="template">
    <Dialog as="div" @close="$event => toggleLogoutModal(false)" class="relative z-30">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black bg-opacity-25"></div>
      </TransitionChild>

      <div class="fixed inset-0 overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel class="w-full max-w-md text-center transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
              <div class="flex items-center justify-between mb-5 pb-5">
                <DialogTitle as="h3" class="w-full text-xl font-bold text-black">{{translatedObject.logoutBtn}}</DialogTitle>
                <button @click="$event => toggleLogoutModal(false)" class="w-7 h-7 bg-body rounded-md flex items-center justify-center">
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.42079 6.08931L11.7176 1.73259C12.1089 1.33579 12.1089 0.694406 11.7176 0.297603C11.3262 -0.0992008 10.6937 -0.0992008 10.3023 0.297603L6.00555 4.65432L1.70876 0.297603C1.31741 -0.0992008 0.684854 -0.0992008 0.293509 0.297603C-0.0978363 0.694406 -0.0978363 1.33579 0.293509 1.73259L4.5903 6.08931L0.293509 10.446C-0.0978363 10.8428 -0.0978363 11.4842 0.293509 11.881C0.488681 12.0789 0.744907 12.1784 1.00113 12.1784C1.25736 12.1784 1.51358 12.0789 1.70876 11.881L6.00555 7.52429L10.3023 11.881C10.4975 12.0789 10.7537 12.1784 11.01 12.1784C11.2662 12.1784 11.5224 12.0789 11.7176 11.881C12.1089 11.4842 12.1089 10.8428 11.7176 10.446L7.42079 6.08931Z"
                      fill="#18203A"
                    />
                  </svg>
                </button>
              </div>
              <img src="../assets/images/cover/logout.png" class="block mx-auto" />
              <p class="text-sm text-black mb-2">
                {{translatedObject.logoutAlert}}
                </p>
              <div class="mt-5 flex justify-center">
                <button type="button" class="btn btn-light-sky mr-5" @click="$event => toggleLogoutModal(false)">{{translatedObject.cancelBtn}}</button>
                <button type="button" class="btn btn-red text-white" @click="logout">{{translatedObject.logoutBtn}}</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
  
<script>
// import {ref} from "vue";
import { RouterLink } from "vue-router";
import {TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle} from "@headlessui/vue";
import store from "@/store";
export default {
  name: "SideBarComponent",
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    RouterLink,
    DialogTitle 
  },
  data() {
    return {
      isLogoutModalOpen: false,
      authUser:{},
    }
  },
  mounted() {
    this.emitter.on('profile-edit',()=> {
      this.fetchAuthUser()
    })
    this.fetchAuthUser()
  },
  methods: {
    toggleLogoutModal(s){
      this.isLogoutModalOpen = s;
    },
    fetchAuthUser(){
      // eslint-disable-next-line no-undef
      axios.get(`list-user/${this.auth_user_id}`)
          .then(response => {
            this.authUser = response.data.data
          })
    },
    async logout() {
      await store.dispatch('auth/logOut')

      this.$router.go({ name: 'login' })
    }
  },
  // setup() {
  //   let isLogoutModalOpen = ref(false);
  //   let toggleLogoutModal = (s) => {
  //     isLogoutModalOpen.value = s;
  //   }
  //   async function logout() {
  //     await store.dispatch('auth/logOut')
  //
  //     this.$router.go({ name: 'login' })
  //   }
  //   return {isLogoutModalOpen, toggleLogoutModal, logout}
  // }
};
</script>
  