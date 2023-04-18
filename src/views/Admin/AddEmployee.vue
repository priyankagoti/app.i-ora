<template>
  <button @click="openModal" class="btn btn-sky">
    <svg
      class="mr-2"
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
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
      <mask
        id="mask0_1305_21665"
        style="mask-type: luminance"
        maskUnits="userSpaceOnUse"
        x="2"
        y="3"
        width="11"
        height="10"
      >
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
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-30">
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
        <div
          class="flex min-h-full items-center justify-center p-4 text-center"
        >
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0 scale-95"
            enter-to="opacity-100 scale-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100 scale-100"
            leave-to="opacity-0 scale-95"
          >
            <DialogPanel
              class="w-full max-w-7xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all"
            >
              <div
                class="flex items-center justify-between mb-5 pb-5 border-b border-body"
              >
                <DialogTitle as="h3" class="text-xl font-bold text-black"
                  >Add Employee</DialogTitle
                >
                <button
                  @click="closeModal"
                  class="w-7 h-7 bg-body rounded-md flex items-center justify-center"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.42079 6.08931L11.7176 1.73259C12.1089 1.33579 12.1089 0.694406 11.7176 0.297603C11.3262 -0.0992008 10.6937 -0.0992008 10.3023 0.297603L6.00555 4.65432L1.70876 0.297603C1.31741 -0.0992008 0.684854 -0.0992008 0.293509 0.297603C-0.0978363 0.694406 -0.0978363 1.33579 0.293509 1.73259L4.5903 6.08931L0.293509 10.446C-0.0978363 10.8428 -0.0978363 11.4842 0.293509 11.881C0.488681 12.0789 0.744907 12.1784 1.00113 12.1784C1.25736 12.1784 1.51358 12.0789 1.70876 11.881L6.00555 7.52429L10.3023 11.881C10.4975 12.0789 10.7537 12.1784 11.01 12.1784C11.2662 12.1784 11.5224 12.0789 11.7176 11.881C12.1089 11.4842 12.1089 10.8428 11.7176 10.446L7.42079 6.08931Z"
                      fill="#18203A"
                    />
                  </svg>
                </button>
              </div>
              <div class="flex mb-5 pb-5 border-b border-body">
                <label
                  for="EmployeeProfile"
                  class="w-[150px] h-[150px] bg-body rounded-xl flex items-center justify-center flex-col cursor-pointer"
                >
                  <svg
                    width="31"
                    height="30"
                    viewBox="0 0 31 30"
                    class="mb-5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M11.569 25.3241L16.1592 20.7338C16.7931 20.1001 17.8206 20.1001 18.4542 20.7338C19.088 21.3676 19.088 22.3953 18.4543 23.0289L13.8642 27.6192L13.864 27.6194C12.2822 29.2013 10.2043 29.9923 8.12629 29.9923C6.04831 29.9923 3.97044 29.2013 2.38842 27.6194C0.855742 26.0867 0.0117188 24.049 0.0117188 21.8815C0.0117188 19.7146 0.855418 17.6772 2.38734 16.1448L2.38831 16.1437L6.97846 11.5534C7.61226 10.9197 8.63989 10.9197 9.27358 11.5534C9.90738 12.1871 9.90738 13.2148 9.27369 13.8486L4.68355 18.4388L4.68322 18.4391C3.7639 19.3588 3.25755 20.5813 3.25755 21.8815C3.25755 23.1819 3.7639 24.4046 4.68355 25.3243C6.58192 27.2227 9.67065 27.2226 11.5688 25.3243L11.5689 25.3242L11.569 25.3241ZM27.6349 2.37282C29.1676 3.9055 30.0117 5.94323 30.0117 8.11069C30.0117 10.2776 29.1679 12.315 27.636 13.8475L27.635 13.8486L23.0449 18.4388C22.728 18.7557 22.3126 18.9142 21.8973 18.9142C21.6841 18.9145 21.473 18.8726 21.2761 18.791C21.0791 18.7094 20.9003 18.5897 20.7497 18.4388C20.1159 17.805 20.1159 16.7774 20.7496 16.1437L25.3398 11.5534L25.3401 11.5531C26.2595 10.6335 26.7659 9.41097 26.7659 8.11069C26.7659 6.8103 26.2593 5.5876 25.3398 4.66795C23.4414 2.76968 20.3527 2.76979 18.4545 4.66795L18.454 4.66849L13.8639 9.25841C13.5471 9.57531 13.1317 9.73382 12.7164 9.73382C12.5033 9.7341 12.2921 9.69224 12.0952 9.61066C11.8982 9.52907 11.7193 9.40936 11.5688 9.25841C10.935 8.62472 10.935 7.59698 11.5688 6.96329L16.1588 2.37336L16.1593 2.37282C19.323 -0.790886 24.471 -0.790995 27.6349 2.37282ZM9.80025 21.0863C9.60332 21.0047 9.42446 20.885 9.27394 20.7341C8.64013 20.1004 8.64013 19.0728 9.27394 18.4389L18.4544 9.25847C19.0882 8.62478 20.1159 8.62478 20.7496 9.25847C21.3834 9.89227 21.3834 10.9199 20.7496 11.5536L11.5691 20.7341C11.2522 21.051 10.8368 21.2095 10.4214 21.2095C10.2083 21.2098 9.99718 21.1679 9.80025 21.0863Z"
                      fill="#74BDCB"
                    />
                  </svg>
                  <span class="text-[#8F9BB3] text-base">Choose file</span>
                  <span class="text-sky text-xs">No file selected</span>
                  <input
                    class="w-0 h-0"
                    type="file"
                    name=""
                    id="EmployeeProfile"
                  />
                </label>
                <div class="pl-5">
                  <p class="text-xl text-[#8F9BB3] mb-2">
                    This is some placeholder block-level help text for the above
                    input. It's a bit lighter and easily wraps to a new line.
                  </p>
                  <span class="block text-black text-sm font-semibold mb-2"
                    >Object</span
                  >
                  <button class="rounded-lg btn btn-light-sky">
                    <svg
                      width="12"
                      height="12"
                      viewBox="0 0 12 12"
                      class="mr-2.5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M9.88672 5.05371H6.13672V1.30371C6.13672 0.958086 5.85672 0.678711 5.51172 0.678711C5.16672 0.678711 4.88672 0.958086 4.88672 1.30371V5.05371H1.13672C0.791719 5.05371 0.511719 5.33309 0.511719 5.67871C0.511719 6.02434 0.791719 6.30371 1.13672 6.30371H4.88672V10.0537C4.88672 10.3993 5.16672 10.6787 5.51172 10.6787C5.85672 10.6787 6.13672 10.3993 6.13672 10.0537V6.30371H9.88672C10.2317 6.30371 10.5117 6.02434 10.5117 5.67871C10.5117 5.33309 10.2317 5.05371 9.88672 5.05371Z"
                        fill="black"
                      />
                      <path
                        d="M9.88672 5.05371H6.13672V1.30371C6.13672 0.958086 5.85672 0.678711 5.51172 0.678711C5.16672 0.678711 4.88672 0.958086 4.88672 1.30371V5.05371H1.13672C0.791719 5.05371 0.511719 5.33309 0.511719 5.67871C0.511719 6.02434 0.791719 6.30371 1.13672 6.30371H4.88672V10.0537C4.88672 10.3993 5.16672 10.6787 5.51172 10.6787C5.85672 10.6787 6.13672 10.3993 6.13672 10.0537V6.30371H9.88672C10.2317 6.30371 10.5117 6.02434 10.5117 5.67871C10.5117 5.33309 10.2317 5.05371 9.88672 5.05371"
                        stroke="black"
                      />
                    </svg>
                    <span class="text-sky font-semibold">Add Object</span>
                  </button>
                </div>
              </div>
              <div class="grid grid-cols-6 gap-20">
                <div class="col-span-2">
                  <label class="label" for="FirstName">First Name *</label>
                  <input
                    type="text"
                    id="FirstName"
                    placeholder="Enter First Name"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="LastName">Last Name *</label>
                  <input
                    type="text"
                    id="LastName"
                    placeholder="Enter Last Name"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="EmailAddress"
                    >Email Address *</label
                  >
                  <input
                    type="email"
                    id="EmailAddress"
                    placeholder="Enter Email Address"
                    class="input"
                  />
                </div>
                <div class="col-span-3">
                  <label class="label" for="Username">Username *</label>
                  <input
                    type="text"
                    id="Username"
                    placeholder="Enter Username"
                    class="input"
                  />
                </div>
                <div class="col-span-3">
                  <label class="label" for="Password">Password *</label>
                  <input
                    type="password"
                    id="Password"
                    placeholder="Enter Password"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="EmployeeAddress">Address *</label>
                  <input
                    type="text"
                    id="EmployeeAddress"
                    placeholder="Enter Employee Address"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="ZopCode">Zop Code *</label>
                  <input
                    type="text"
                    id="ZopCode"
                    placeholder="Enter Zop Code"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="Region">Region *</label>
                  <input
                    type="text"
                    id="Region"
                    placeholder="Enter Region"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="Country">Country *</label>
                  <input
                    type="text"
                    id="Country"
                    placeholder="Enter Country"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="PhoneNumber">Phone Number *</label>
                  <input
                    type="text"
                    id="PhoneNumber"
                    placeholder="Enter Phone Number"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="JoinDate">Join Date</label>
                  <input
                    type="email"
                    id="JoinDate"
                    placeholder="Enter Join Date"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="EmployeeNumber"
                    >Employee Number</label
                  >
                  <input
                    type="text"
                    id="EmployeeNumber"
                    placeholder="Enter Employee Number"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="VacationDays"
                    >Amount of Vacation Days *</label
                  >
                  <input
                    type="text"
                    id="VacationDays"
                    placeholder="Enter Vacation Days"
                    class="input"
                  />
                </div>
                <div class="col-span-2">
                  <label class="label" for="EnterAmount"
                    >Amount of hours work in a week *</label
                  >
                  <input
                    type="email"
                    id="EnterAmount"
                    placeholder="Enter Amount"
                    class="input"
                  />
                </div>
              </div>
              <div class="mt-5 flex justify-end">
                <button
                  type="button"
                  class="btn btn-light-sky mr-5"
                  @click="closeModal"
                >
                  Cancel
                </button>
                <button type="button" class="btn btn-sky" @click="$event => toggleConf(true)">Add User</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <ConfirmationModal 
    :isOpenModal="isConfOpen" 
    title="Add Employee without an Object?"
    text="You didn't add an Object to this Employee, are you sure you want to save?" 
    :closeModal="$event => toggleConf(false)"
    btnText="Yes, save without Object"
    :SubmitModal="$event => {toggleConf(false); toggleConfSuccess(true)}"
  />
  <ConfirmationModal 
    :isOpenModal="isConfSuccessOpen" 
    title="Update Successful"
    :closeModal="$event => toggleConfSuccess(false)"
    btnText="Back to Employees"
    :SubmitModal="$event => {toggleConfSuccess(false); closeModal() }"
  />
</template>

<script>
import { ref } from "vue";
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from "@headlessui/vue";
import ConfirmationModal from "../../components/ConfirmationModal.vue";

export default {
  name: "AddEmployeeComponent",
  components: {
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    ConfirmationModal,
  },
  setup() {
    let isConfOpen = ref(false);
    let isOpen = ref(false);
    let isConfSuccessOpen = ref(false);

    let closeModal = () => {
      isOpen.value = false;
    };
    let openModal = () => {
      isOpen.value = true;
    };
    let toggleConf = (s) => {
      isConfOpen.value = s;
    }
    let toggleConfSuccess = (s) => {
      isConfSuccessOpen.value = s;
    }
    return { isOpen, closeModal, openModal, isConfOpen, toggleConf, isConfSuccessOpen, toggleConfSuccess };
  },
};
</script>
