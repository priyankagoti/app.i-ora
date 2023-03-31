<template>
  <button @click="openModal" class="btn btn-sky">
    <svg class="mr-2" width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.875 7.375H8.125V3.625C8.125 3.27938 7.845 3 7.5 3C7.155 3 6.875 3.27938 6.875 3.625V7.375H3.125C2.78 7.375 2.5 7.65438 2.5 8C2.5 8.34562 2.78 8.625 3.125 8.625H6.875V12.375C6.875 12.7206 7.155 13 7.5 13C7.845 13 8.125 12.7206 8.125 12.375V8.625H11.875C12.22 8.625 12.5 8.34562 12.5 8C12.5 7.65438 12.22 7.375 11.875 7.375Z"
        fill="black"
      />
      <path
        d="M11.875 7.375H8.125V3.625C8.125 3.27938 7.845 3 7.5 3C7.155 3 6.875 3.27938 6.875 3.625V7.375H3.125C2.78 7.375 2.5 7.65438 2.5 8C2.5 8.34562 2.78 8.625 3.125 8.625H6.875V12.375C6.875 12.7206 7.155 13 7.5 13C7.845 13 8.125 12.7206 8.125 12.375V8.625H11.875C12.22 8.625 12.5 8.34562 12.5 8C12.5 7.65438 12.22 7.375 11.875 7.375"
        stroke="black"
      />
      <mask id="mask0_1305_21665" style="mask-type: luminance" maskUnits="userSpaceOnUse" x="2" y="3" width="11" height="10">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M11.875 7.375H8.125V3.625C8.125 3.27938 7.845 3 7.5 3C7.155 3 6.875 3.27938 6.875 3.625V7.375H3.125C2.78 7.375 2.5 7.65438 2.5 8C2.5 8.34562 2.78 8.625 3.125 8.625H6.875V12.375C6.875 12.7206 7.155 13 7.5 13C7.845 13 8.125 12.7206 8.125 12.375V8.625H11.875C12.22 8.625 12.5 8.34562 12.5 8C12.5 7.65438 12.22 7.375 11.875 7.375Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1305_21665)"></g>
    </svg>
    <span>Add Employee</span>
  </button>
  <TransitionRoot appear :show="true" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
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
            <DialogPanel class="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div class="flex items-center justify-between mb-10">
                <DialogTitle as="h3" class="text-xl font-bold text-black">Add Employee</DialogTitle>
                <button @click="closeModal" class="w-7 h-7 bg-body rounded-md flex items-center justify-center">
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
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
                </p>
              </div>

              <div class="mt-4">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal"
                >
                  Got it, thanks!
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
import {ref} from "vue";
import {TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle} from "@headlessui/vue";

export default {
  name: "AddEmployeeComponent",
  components: {TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle},
  setup() {
    let isOpen = ref(false);
    let closeModal = () => {
      isOpen.value = false;
    };
    let openModal = () => {
      isOpen.value = true;
    };
    return {isOpen, closeModal, openModal};
  }
};
</script>
