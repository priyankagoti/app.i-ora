<template>
  <div
    class="bg-white 2xl:p-5 p-4 fixed top-0 left-0 w-full flex justify-between 2xl:h-[88px] h-[70px] 3xl:pl-[330px] 2xl:pl-[280px] pl-[250px] items-center z-10"
  >
    <h2 class="text-black font-bold text-xl">{{title}}</h2>
    <div class="relative w-1/2">
      <input
        type="text"
        placeholder="Search"
        class="w-full text-xs py-4 pl-5 pr-20 bg-[#E7F2F8] rounded-full"
      />
      <button class="w-10 h-10 flex items-center justify-center absolute top-1 right-1 bg-white rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.161 12.622C9.99752 13.4847 8.55708 13.9949 6.99747 13.9949C3.13289 13.9949 0 10.8621 0 6.99747C0 3.13286 3.13286 0 6.99747 0C10.8621 0 13.9949 3.13282 13.9949 6.99743C13.9949 8.56773 13.4777 10.0172 12.6043 11.1848L15.7043 14.2848L15.7101 14.2906C16.0989 14.6826 16.0963 15.3155 15.7043 15.7043C15.6109 15.7969 15.5001 15.8702 15.3783 15.92C15.2565 15.9697 15.1261 15.995 14.9946 15.9942C14.863 15.995 14.7326 15.9697 14.6108 15.92C14.489 15.8702 14.3782 15.7969 14.2848 15.7043L11.161 12.622ZM10.4376 10.6234C9.5415 11.4739 8.33042 11.9956 6.99747 11.9956C4.23703 11.9956 1.99929 9.7579 1.99929 6.99747C1.99929 4.23703 4.23707 1.99929 6.99747 1.99929C9.7579 1.99929 11.9956 4.23703 11.9956 6.99747C11.9956 8.34088 11.4656 9.56049 10.6033 10.4586C10.5677 10.4868 10.5336 10.5176 10.5012 10.5512C10.4787 10.5745 10.4575 10.5986 10.4376 10.6234Z"
            fill="#74BDCB"
          />
        </svg>
      </button>
    </div>
    <div class="flex">
      <button
        @click="$event => toggleAlertModal(true)"
        class="w-12 h-12 bg-[#E7F2F8] rounded-full flex items-center justify-center mr-5"
      >
        <svg
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.27315 17.4541C8.59029 17.4541 9.69215 16.5151 9.94517 15.2723H4.60114C4.8543 16.5151 5.95612 17.4541 7.27315 17.4541ZM12.3728 8.72612C12.3699 8.72612 12.367 8.7268 12.364 8.7268C9.55752 8.7268 7.27315 6.44312 7.27315 3.63593C7.27315 2.86421 7.45067 2.13473 7.75974 1.47875C7.59968 1.46354 7.43747 1.4541 7.27315 1.4541C4.46157 1.4541 2.18228 3.73326 2.18228 6.54498V8.57261C2.18228 10.0119 1.55173 11.3705 0.445476 12.3057C0.0767478 12.6207 -0.086889 13.1224 0.0454523 13.6119C0.199646 14.1814 0.762557 14.545 1.35318 14.545H13.1895C13.8091 14.545 14.3932 14.1436 14.5189 13.5363C14.6164 13.0665 14.4491 12.5973 14.0848 12.2912C13.0273 11.4047 12.4157 10.102 12.3728 8.72612Z"
            fill="black"
          />
          <path
            d="M15.9993 3.63642C15.9993 5.64472 14.3713 7.2727 12.3628 7.2727C10.3545 7.2727 8.72656 5.64472 8.72656 3.63642C8.72656 1.62812 10.3545 0 12.3628 0C14.3713 0 15.9993 1.62812 15.9993 3.63642Z"
            fill="#FF0000"
          />
        </svg>
      </button>
      <a
        href="#"
        class="w-12 h-12 bg-[#E7F2F8] rounded-full flex items-center justify-center mr-5"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M15.9253 14.6703L14.9255 11.6603C15.8199 9.98318 16.0821 8.04059 15.6644 6.18637C15.2466 4.33215 14.1767 2.68969 12.6495 1.55817C11.1223 0.42665 9.23948 -0.118639 7.34397 0.0216333C5.44846 0.161905 3.66639 0.978404 2.3224 2.3224C0.978404 3.66639 0.161905 5.44846 0.0216333 7.34397C-0.118639 9.23948 0.42665 11.1223 1.55817 12.6495C2.68969 14.1767 4.33215 15.2466 6.18637 15.6644C8.04059 16.0821 9.98318 15.8199 11.6603 14.9255L14.649 15.9466C14.7518 15.9815 14.8595 15.9995 14.9681 15.9998C15.1293 16.0032 15.2888 15.9674 15.4331 15.8954C15.5773 15.8234 15.7019 15.7174 15.7961 15.5866C15.8903 15.4558 15.9513 15.304 15.9738 15.1444C15.9963 14.9848 15.9797 14.8221 15.9253 14.6703ZM5.07662 6.42739H9.33101C9.47205 6.42739 9.60732 6.48342 9.70705 6.58315C9.80678 6.68288 9.86281 6.81814 9.86281 6.95919C9.86281 7.10023 9.80678 7.23549 9.70705 7.33523C9.60732 7.43496 9.47205 7.49099 9.33101 7.49099H5.07662C4.93557 7.49099 4.80031 7.43496 4.70058 7.33523C4.60084 7.23549 4.54482 7.10023 4.54482 6.95919C4.54482 6.81814 4.60084 6.68288 4.70058 6.58315C4.80031 6.48342 4.93557 6.42739 5.07662 6.42739ZM11.4582 10.15H5.07662C4.93557 10.15 4.80031 10.094 4.70058 9.99422C4.60084 9.89449 4.54482 9.75923 4.54482 9.61818C4.54482 9.47714 4.60084 9.34188 4.70058 9.24214C4.80031 9.14241 4.93557 9.08638 5.07662 9.08638H11.4582C11.5993 9.08638 11.7345 9.14241 11.8343 9.24214C11.934 9.34188 11.99 9.47714 11.99 9.61818C11.99 9.75923 11.934 9.89449 11.8343 9.99422C11.7345 10.094 11.5993 10.15 11.4582 10.15Z"
            fill="black"
          />
        </svg>
      </a>
    </div>
  </div>
  
  <TransitionRoot appear :show="isAlertModalOpen" as="template">
    <Dialog as="div" @close="$event => toggleAlertModal(false)" class="relative z-30">
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
            <DialogPanel class="w-full max-w-4xl transform overflow-hidden rounded-2xl bg-body align-middle shadow-xl transition-all">
              <div class="flex items-center">
                <div class="w-full text-center p-6">
                  <h3 class="w-full text-xl font-bold text-black mb-9">Alert</h3>
                  <img src="../assets/images/cover/alert.png" class="block mx-auto mix-blend-multiply" />
                  <p class="text-sm text-black my-5">
                    Are you sure you want to assign this <br/> Employee to this customer?
                  </p>
                  <div class="mt-5 flex justify-center">
                    <button type="button" class="btn btn-white mr-5" @click="$event => toggleAlertModal(false)">No</button>
                    <button type="button" class="btn btn-sky text-white" @click="$event => toggleAlertModal(false)">Yes</button>
                  </div>
                </div>
                <div class="w-full max-w-sm bg-white p-6">
                  <div class="flex items-center justify-between mb-5 ">
                    <DialogTitle as="h3" class="text-xl font-bold text-black">Employee Customers</DialogTitle>
                    <button @click="$event => toggleAlertModal(false)" class="w-7 h-7 bg-body rounded-md flex items-center justify-center">
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
                  <table class="w-full text-xs font-semibold text-left">
                    <thead class="bg-body">
                      <tr class="text-sm font-bold">
                        <td class="p-4 rounded-l-xl">Customer</td>
                        <td class="p-4 rounded-r-xl">Project Name</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr
                        v-for="project in Projects"
                        :key="project.ID"
                        class="border-b border-body"
                      >
                        <td class="text-xs p-4 font-bold">
                          {{ project.ID }}
                        </td>
                        <td class="text-xs font-normal p-4">
                          <div class="">
                            <span class="block text-black font-bold">{{
                              project.name
                            }}</span>
                            <span class="block text-[#8F9BB3] text-[10px]"
                              >{{ project.open }} Open,
                              {{ project.completed }} Completed</span
                            >
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
    
<script>
// import { RouterLink } from "vue-router";
import {ref} from "vue";
import {TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle} from "@headlessui/vue";
export default {
  name: "HeaderComponent",
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle 
  },
  setup() {
    let isAlertModalOpen = ref(false);
    let toggleAlertModal = (s) => {
      isAlertModalOpen.value = s;
    }
    return {isAlertModalOpen, toggleAlertModal}
  },
  data() {
    return {
      Projects: [
        {
          ID: "1",
          name: "Office Management",
          open: 2,
          completed: 10,
          employee: 20,
          date: "12-02-2021",
          isCompleted: true,
        },
        {
          ID: "2",
          name: "Project Management",
          open: 2,
          completed: 10,
          employee: 20,
          date: "12-02-2021",
          isCompleted: true,
        },
        {
          ID: "3",
          name: "Video Caling App",
          open: 2,
          completed: 10,
          employee: 20,
          date: "12-02-2021",
          isCompleted: true,
        },
        {
          ID: "4",
          name: "Hospital Management",
          open: 2,
          completed: 10,
          employee: 20,
          date: "12-02-2021",
          isCompleted: true,
        },
        {
          ID: "5",
          name: "Digital Marketing ",
          open: 2,
          completed: 10,
          employee: 20,
          date: "12-02-2021",
          isCompleted: false,
        },
        {
          ID: "6",
          name: "Idea Management",
          open: 2,
          completed: 10,
          employee: 20,
          date: "12-02-2021",
          isCompleted: false,
        },
      ],
    };
  },
  props: {
    title: String,
  },
};
</script>
    