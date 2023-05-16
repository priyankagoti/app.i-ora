<template>
  <div class="body-space">
    <SideBarComponent />
    <HeaderComponent :title="isEditing? 'Edit Object':'Add New Object'" />
    <div class="p-5 bg-white rounded-[20px]">
      <div class="flex items-cente justify-between mb-5">
        <h4 class="text-xl font-bold">Object Client Details</h4>
        <button class="btn btn-sky">
          <svg
            class="mr-2"
            width="10"
            height="10"
            viewBox="0 0 10 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.29728 1.94697L0.511591 6.73266C0.335245 6.90934 0.223795 7.14043 0.195336 7.38843L0.00465225 9.06272C-0.00777759 9.18046 0.00476819 9.29949 0.0414703 9.41206C0.0781724 9.52462 0.138205 9.62817 0.217649 9.71595C0.297092 9.80373 0.394158 9.87377 0.502509 9.92149C0.61086 9.96921 0.728058 9.99354 0.84645 9.99288H0.944117L2.61841 9.8022C2.86542 9.77362 3.09601 9.66405 3.27418 9.49059L8.05986 4.70025L5.29728 1.94697ZM9.67835 1.54235L8.46449 0.328488C8.36294 0.226539 8.24226 0.145645 8.10938 0.0904472C7.97649 0.0352498 7.83402 0.00683594 7.69012 0.00683594C7.54623 0.00683594 7.40375 0.0352498 7.27087 0.0904472C7.13799 0.145645 7.01731 0.226539 6.91576 0.328488L5.79027 1.45399L8.55285 4.21657L9.67835 3.09107C9.7803 2.98953 9.86119 2.86885 9.91639 2.73597C9.97159 2.60308 10 2.4606 10 2.31671C10 2.17282 9.97159 2.03034 9.91639 1.89746C9.86119 1.76457 9.7803 1.6439 9.67835 1.54235Z"
              fill="black"
            />
          </svg>
          <span>{{ isEditing ? 'Edit' : 'Add' }}</span>
        </button>
      </div>
      <div class="grid grid-cols-6 gap-20">
        <div class="col-span-2">
          <label class="label" for="ClientName">Client Name *</label>
          <input
            type="text"
            id="ClientName"
            placeholder="Enter Client Name"
            class="input"
            v-model="form.client_name"
          />
          <small
              v-if="errors && errors.client_name"
              class="text-danger"
          >{{ errors.client_name[0] }}</small>
        </div>
        <div class="col-span-2">
          <label class="label" for="ClientNumber">Client Number *</label>
          <input
            type="text"
            id="ClientNumber"
            placeholder="Enter Client Number"
            class="input"
            v-model="form.client_number"
          />
          <small
              v-if="errors && errors.client_number"
              class="text-danger"
          >{{ errors.client_number[0] }}</small>
        </div>
        <div class="col-span-2">
          <label class="label" for="Address">Address</label>
          <input
            type="text"
            id="Address"
            placeholder="Enter Address"
            class="input"
            v-model="form.address"
          />
          <small
              v-if="errors && errors.address"
              class="text-danger"
          >{{ errors.address[0] }}</small>
        </div>
        <div class="col-span-1">
          <label class="label" for="PostcodeCity">Postcode</label>
          <input
            type="text"
            id="PostcodeCity"
            placeholder="Enter Postcode City"
            class="input"
            v-model="form.postcode"
          />
          <small
              v-if="errors && errors.postcode"
              class="text-danger"
          >{{ errors.postcode[0] }}</small>
        </div>
        <div class="col-span-1">
          <label class="label" for="City">City *</label>
          <input
              type="text"
              id="City"
              placeholder="Enter City"
              class="input"
              v-model="form.city_id"
          />
          <small
              v-if="errors && errors.city_id"
              class="text-danger"
          >{{ errors.city_id[0] }}</small>
<!--          <select v-model="form.city_id" class="input" id="City">
            <option value="" selected disabled>Select city</option>
            <option v-for="city in cities" :key="city.id" :value="city.id">{{city.name}}</option>
          </select>-->
<!--          <small
              v-if="errors && errors.city_id"
              class="text-danger"
          >{{ errors.city_id[0] }}</small>-->
        </div>
        <div class="col-span-2">
          <label class="label" for="KeyNumber">Key Number</label>
          <input
            type="text"
            id="KeyNumber"
            placeholder="Enter Key Number"
            class="input"
            v-model="form.key_number"
          />
          <small
              v-if="errors && errors.key_number"
              class="text-danger"
          >{{ errors.key_number[0] }}</small>
        </div>
        <div class="col-span-2">
          <label class="label" for="StartDate">Start Date *</label>
          <input
            type="text"
            id="StartDate"
            placeholder="dd/mm/yyyy"
            class="input"
            v-model="form.start_date"
          />
          <small
              v-if="errors && errors.start_date"
              class="text-danger"
          >{{ errors.start_date[0] }}</small>
        </div>
        <div class="col-span-3">
          <label class="label" for="PhoneNumber">Phone Number</label>
          <input
            type="text"
            id="PhoneNumber"
            placeholder="Enter Phone Number"
            class="input"
            v-model="form.phone_number"
          />
          <small
              v-if="errors && errors.phone_number"
              class="text-danger"
          >{{ errors.phone_number[0] }}</small>
        </div>
        <div class="col-span-3">
          <label class="label" for="GoogleMapURL">Google Map URL*</label>
          <input
            type="text"
            id="GoogleMapURL"
            placeholder="https://google.com"
            class="input"
            v-model="form.google_map_url"
          />
          <small
              v-if="errors && errors.google_map_url"
              class="text-danger"
          >{{ errors.google_map_url[0] }}</small>
        </div>
        <div class="col-span-2">
          <div class="grid grid-cols-2 gap-6">
            <div class="">
              <label class="label" for="ImplementationTime">Implementation Time</label>
              <div
                class="flex bg-body rounded-full p-1 items-center justify-between"
              >
                <button
                  class="w-10 h-10 flex items-center justify-center rounded-full bg-white"
                  @click="decrement"
                >
                  <svg
                    width="15"
                    height="3"
                    viewBox="0 0 15 3"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5484 0.0488281H1.45161C0.653226 0.0488281 0 0.702054 0 1.50044C0 2.29883 0.653226 2.95205 1.45161 2.95205H13.5484C14.3468 2.95205 15 2.29883 15 1.50044C15 0.702054 14.3468 0.0488281 13.5484 0.0488281Z"
                      fill="#FFA384"
                    />
                  </svg>
                </button>
                <div class="flex space-x-1">
                  <input v-model.number="hours"  type="number" class="time-input" />
                  <span>:</span>
                  <input v-model.number="minutes" type="number" class="time-input" />
                  <span>:</span>
                  <input v-model.number="seconds" type="number" class="time-input" />
                </div>
<!--                <div class="flex">
                  <input type="text" class="time-input" :value="implementationTime" @input="changeTimeFormat($event.target.value)">
                  <input type="text" class="time-input" :value="implementationTime" @input="changeTimeFormat($event.target.value)">
                </div>-->

<!--                <span class="text-xs">00:00 hrs</span>-->
                <button
                  class="w-10 h-10 flex items-center justify-center rounded-full bg-white"
                  @click="increment"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M13.832 7.16732H8.83203V2.16732C8.83203 1.70648 8.4587 1.33398 7.9987 1.33398C7.5387 1.33398 7.16536 1.70648 7.16536 2.16732V7.16732H2.16536C1.70536 7.16732 1.33203 7.53982 1.33203 8.00065C1.33203 8.46148 1.70536 8.83398 2.16536 8.83398H7.16536V13.834C7.16536 14.2948 7.5387 14.6673 7.9987 14.6673C8.4587 14.6673 8.83203 14.2948 8.83203 13.834V8.83398H13.832C14.292 8.83398 14.6654 8.46148 14.6654 8.00065C14.6654 7.53982 14.292 7.16732 13.832 7.16732Z"
                      fill="#74BDCB"
                    />
                    <path
                      d="M13.832 7.16732H8.83203V2.16732C8.83203 1.70648 8.4587 1.33398 7.9987 1.33398C7.5387 1.33398 7.16536 1.70648 7.16536 2.16732V7.16732H2.16536C1.70536 7.16732 1.33203 7.53982 1.33203 8.00065C1.33203 8.46148 1.70536 8.83398 2.16536 8.83398H7.16536V13.834C7.16536 14.2948 7.5387 14.6673 7.9987 14.6673C8.4587 14.6673 8.83203 14.2948 8.83203 13.834V8.83398H13.832C14.292 8.83398 14.6654 8.46148 14.6654 8.00065C14.6654 7.53982 14.292 7.16732 13.832 7.16732"
                      stroke="#74BDCB"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div class="">
              <label class="label" for="PhoneNumber">At / From Time </label>
              <div
                class="bg-body rounded-full p-1 flex items-center justify-center h-12"
              >
                <span class="text-xs">At / From &nbsp;</span>
                <input v-model.number="fromHours"  type="number" class="time-input" />
                <span>:</span>
                <input v-model.number="fromMinutes" type="number" class="time-input" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <label class="label">Rotation</label>
          <div class="flex gap-20">
            <div class="relative">
              <input
                class="rotation-input peer"
                type="radio"
                name="Rotation"
                id="rotation"
              />
              <label for="rotation" class="rotation-check">
                <span class="text-xs">Weekly</span>
              </label>
              <span for="rotation" class="rotation-checkmark"></span>
              <svg
                class="rotation-checkmark-svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="28" height="28" rx="14" fill="#74BDCB" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.606 11.3784C20.8617 11.1137 21.0031 10.7592 20.9999 10.3913C20.9967 10.0233 20.8491 9.67127 20.5889 9.41106C20.3287 9.15085 19.9767 9.00325 19.6087 9.00005C19.2408 8.99686 18.8863 9.13832 18.6216 9.39396L12.5966 15.419L9.37844 12.2009C9.11375 11.9452 8.75923 11.8038 8.39125 11.807C8.02327 11.8101 7.67127 11.9577 7.41106 12.218C7.15085 12.4782 7.00325 12.8302 7.00005 13.1982C6.99686 13.5661 7.13832 13.9206 7.39397 14.1853L11.6043 18.3957C11.8675 18.6588 12.2244 18.8066 12.5966 18.8066C12.9687 18.8066 13.3256 18.6588 13.5888 18.3957L20.606 11.3784Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="relative">
              <input
                class="rotation-input peer"
                type="radio"
                name="Rotation"
                id="rotation-weekly"
              />
              <label for="rotation-weekly" class="rotation-check">
                <span class="text-xs">Every 2 weeks</span>
              </label>
              <span class="rotation-checkmark"></span>
              <svg
                class="rotation-checkmark-svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="28" height="28" rx="14" fill="#74BDCB" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.606 11.3784C20.8617 11.1137 21.0031 10.7592 20.9999 10.3913C20.9967 10.0233 20.8491 9.67127 20.5889 9.41106C20.3287 9.15085 19.9767 9.00325 19.6087 9.00005C19.2408 8.99686 18.8863 9.13832 18.6216 9.39396L12.5966 15.419L9.37844 12.2009C9.11375 11.9452 8.75923 11.8038 8.39125 11.807C8.02327 11.8101 7.67127 11.9577 7.41106 12.218C7.15085 12.4782 7.00325 12.8302 7.00005 13.1982C6.99686 13.5661 7.13832 13.9206 7.39397 14.1853L11.6043 18.3957C11.8675 18.6588 12.2244 18.8066 12.5966 18.8066C12.9687 18.8066 13.3256 18.6588 13.5888 18.3957L20.606 11.3784Z"
                  fill="white"
                />
              </svg>
            </div>
            <div class="relative">
              <input
                class="rotation-input peer"
                type="radio"
                name="Rotation"
                id="rotation-monthly"
              />
              <label for="rotation-monthly" class="rotation-check">
                <span class="text-xs">Monthly</span>
              </label>
              <span class="rotation-checkmark"></span>
              <svg
                class="rotation-checkmark-svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="28" height="28" rx="14" fill="#74BDCB" />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20.606 11.3784C20.8617 11.1137 21.0031 10.7592 20.9999 10.3913C20.9967 10.0233 20.8491 9.67127 20.5889 9.41106C20.3287 9.15085 19.9767 9.00325 19.6087 9.00005C19.2408 8.99686 18.8863 9.13832 18.6216 9.39396L12.5966 15.419L9.37844 12.2009C9.11375 11.9452 8.75923 11.8038 8.39125 11.807C8.02327 11.8101 7.67127 11.9577 7.41106 12.218C7.15085 12.4782 7.00325 12.8302 7.00005 13.1982C6.99686 13.5661 7.13832 13.9206 7.39397 14.1853L11.6043 18.3957C11.8675 18.6588 12.2244 18.8066 12.5966 18.8066C12.9687 18.8066 13.3256 18.6588 13.5888 18.3957L20.606 11.3784Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <label class="label">Day</label>
          <div class="flex justify-between items-center">
            <div>
              <input
                class="hidden peer"
                type="checkbox"
                name="WeekDay"
                id="Monday"
              />
              <label for="Monday" class="day-check">
                <span class="text-xs">Mon</span>
              </label>
            </div>
            <div>
              <input
                class="hidden peer"
                type="checkbox"
                name="WeekDay"
                id="Tuesday"
              />
              <label for="Tuesday" class="day-check">
                <span class="text-xs">Tue</span>
              </label>
            </div>
            <div>
              <input
                class="hidden peer"
                type="checkbox"
                name="WeekDay"
                id="Wednesday"
              />
              <label for="Wednesday" class="day-check">
                <span class="text-xs">Wed</span>
              </label>
            </div>
            <div>
              <input
                class="hidden peer"
                type="checkbox"
                name="WeekDay"
                id="Thusday"
              />
              <label for="Thusday" class="day-check">
                <span class="text-xs">Thu</span>
              </label>
            </div>
            <div>
              <input
                class="hidden peer"
                type="checkbox"
                name="WeekDay"
                id="Friday"
              />
              <label for="Friday" class="day-check">
                <span class="text-xs">Fri</span>
              </label>
            </div>
            <div>
              <input
                class="hidden peer"
                type="checkbox"
                name="WeekDay"
                id="Saturday"
              />
              <label for="Saturday" class="day-check">
                <span class="text-xs">Sat</span>
              </label>
            </div>
            <div>
              <input
                class="hidden peer"
                type="checkbox"
                name="WeekDay"
                id="Sunday"
              />
              <label for="Sunday" class="day-check">
                <span class="text-xs">Sun</span>
              </label>
            </div>
          </div>
        </div>
        <div class="col-span-3 flex flex-col">
          <label class="label">Upload Pdf Document *</label>
          <input type="file" multiple ref="pdfFile" @change="changePDF" id="UploadPdf" class="h-0 w-0 hidden" />
          <label
            class="h-full cursor-pointer rounded-lg p-4 border-dashed border-2 border-[#74BDCB] bg-body flex items-center justify-center flex-col"
            for="UploadPdf"
          >
            <img
              class="mb-6"
              src="../../assets/images/icons/upload.png"
              alt=""
            />
            <span class="block text-xs text-black">Upload Now</span>
          </label>
          <p v-for="pdf in pdfs" class="text-blue-700 font-bold" :key="pdf.name">
            {{pdf.name}}
          </p>
        </div>
        <div class="col-span-3">
          <label class="label">Task List Contract</label>
          <div class="rounded-lg p-5 bg-body">
            <div class="relative mb-5">
              <input
                type="text"
                placeholder="Employee Id"
                class="w-full text-xs py-3 pl-5 pr-20 bg-[#E7F2F8] rounded-full border-2 border-white"
              />
              <button
                class="w-8 h-8 flex-center absolute top-1.5 right-1.5 bg-white rounded-full"
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
            <div
              class="relative mb-2.5 rounded-full flex justify-between items-center bg-white p-1 pl-4"
            >
              <span class="text-xs">Tasks 1.PDF</span>
              <div class="flex">
                <button
                  class="mr-1 w-[30px] h-[30px] bg-body rounded-full flex-center"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1111 13H2.8889C2.11729 13 1.39183 12.6995 0.846166 12.1538C0.300504 11.6082 0 10.8828 0 10.1111V9.38889C0 8.99001 0.323348 8.66666 0.722233 8.66666C1.12112 8.66666 1.44447 8.99003 1.44447 9.38889V10.1111C1.44447 10.4969 1.59472 10.8596 1.86754 11.1325C2.14038 11.4053 2.5031 11.5556 2.8889 11.5556H10.1111C10.4969 11.5556 10.8596 11.4053 11.1325 11.1325C11.4053 10.8596 11.5556 10.4969 11.5556 10.1111V9.38889C11.5556 8.99001 11.8789 8.66666 12.2778 8.66666C12.6767 8.66666 13 8.99003 13 9.38889V10.1111C13 10.8827 12.6995 11.6082 12.1538 12.1538C11.6081 12.6995 10.8827 13 10.1111 13ZM6.49999 10.1111C6.1011 10.1111 5.77775 9.78775 5.77775 9.38886V2.46584L4.12178 4.12181C3.83974 4.40387 3.38245 4.40387 3.10041 4.12181C2.81837 3.83974 2.81837 3.38248 3.10041 3.10044L5.98932 0.211535C5.98984 0.211008 5.99037 0.210488 5.9909 0.209976L5.99172 0.209155L5.99246 0.208416C5.99283 0.208038 5.99321 0.207673 5.99361 0.207322L5.99399 0.206912L5.99544 0.205516L5.9955 0.205462C6.13029 0.0735816 6.31141 -0.000185551 6.49999 3.50518e-07C6.59919 3.50518e-07 6.69371 0.0199993 6.77975 0.0561944L6.78055 0.0565227L6.78123 0.0568236C6.86431 0.0919436 6.94005 0.142365 7.0045 0.205462L7.00456 0.205516L7.00598 0.206912L7.00642 0.207322L7.00754 0.208416L7.00828 0.209155L7.0091 0.209976L7.01068 0.211535L9.89956 3.10041C10.1816 3.38245 10.1816 3.83974 9.89956 4.12178C9.61755 4.40382 9.1602 4.40382 8.87819 4.12178L7.22225 2.46581V9.38884C7.22225 9.78775 6.89887 10.1111 6.49999 10.1111Z"
                      fill="#74BDCB"
                    />
                  </svg>
                </button>
                <button
                  class="w-[30px] h-[30px] bg-body rounded-full flex-center"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4 1.8H0.6C0.44087 1.8 0.288258 1.86321 0.175736 1.97574C0.0632141 2.08826 0 2.24087 0 2.4C0 2.55913 0.0632141 2.71174 0.175736 2.82426C0.288258 2.93679 0.44087 3 0.6 3H1.8V10.2C1.8 10.6774 1.98964 11.1352 2.32721 11.4728C2.66477 11.8104 3.12261 12 3.6 12H8.4C8.87739 12 9.33523 11.8104 9.67279 11.4728C10.0104 11.1352 10.2 10.6774 10.2 10.2V3H11.4C11.5591 3 11.7117 2.93679 11.8243 2.82426C11.9368 2.71174 12 2.55913 12 2.4C12 2.24087 11.9368 2.08826 11.8243 1.97574C11.7117 1.86321 11.5591 1.8 11.4 1.8ZM5.4 8.4C5.4 8.55913 5.33679 8.71174 5.22426 8.82426C5.11174 8.93679 4.95913 9 4.8 9C4.64087 9 4.48826 8.93679 4.37574 8.82426C4.26321 8.71174 4.2 8.55913 4.2 8.4V5.4C4.2 5.24087 4.26321 5.08826 4.37574 4.97574C4.48826 4.86321 4.64087 4.8 4.8 4.8C4.95913 4.8 5.11174 4.86321 5.22426 4.97574C5.33679 5.08826 5.4 5.24087 5.4 5.4V8.4ZM7.8 8.4C7.8 8.55913 7.73679 8.71174 7.62426 8.82426C7.51174 8.93679 7.35913 9 7.2 9C7.04087 9 6.88826 8.93679 6.77574 8.82426C6.66321 8.71174 6.6 8.55913 6.6 8.4V5.4C6.6 5.24087 6.66321 5.08826 6.77574 4.97574C6.88826 4.86321 7.04087 4.8 7.2 4.8C7.35913 4.8 7.51174 4.86321 7.62426 4.97574C7.73679 5.08826 7.8 5.24087 7.8 5.4V8.4ZM4.8 1.2H7.2C7.35913 1.2 7.51174 1.13679 7.62426 1.02426C7.73679 0.911742 7.8 0.75913 7.8 0.6C7.8 0.44087 7.73679 0.288258 7.62426 0.175736C7.51174 0.0632141 7.35913 0 7.2 0H4.8C4.64087 0 4.48826 0.0632141 4.37574 0.175736C4.26321 0.288258 4.2 0.44087 4.2 0.6C4.2 0.75913 4.26321 0.911742 4.37574 1.02426C4.48826 1.13679 4.64087 1.2 4.8 1.2Z"
                      fill="#FFA384"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div
              class="relative rounded-full flex justify-between items-center bg-white p-1 pl-4"
            >
              <span class="text-xs">Tasks 1.PDF</span>
              <div class="flex">
                <button
                  class="mr-1 w-[30px] h-[30px] bg-body rounded-full flex-center"
                >
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 13 13"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.1111 13H2.8889C2.11729 13 1.39183 12.6995 0.846166 12.1538C0.300504 11.6082 0 10.8828 0 10.1111V9.38889C0 8.99001 0.323348 8.66666 0.722233 8.66666C1.12112 8.66666 1.44447 8.99003 1.44447 9.38889V10.1111C1.44447 10.4969 1.59472 10.8596 1.86754 11.1325C2.14038 11.4053 2.5031 11.5556 2.8889 11.5556H10.1111C10.4969 11.5556 10.8596 11.4053 11.1325 11.1325C11.4053 10.8596 11.5556 10.4969 11.5556 10.1111V9.38889C11.5556 8.99001 11.8789 8.66666 12.2778 8.66666C12.6767 8.66666 13 8.99003 13 9.38889V10.1111C13 10.8827 12.6995 11.6082 12.1538 12.1538C11.6081 12.6995 10.8827 13 10.1111 13ZM6.49999 10.1111C6.1011 10.1111 5.77775 9.78775 5.77775 9.38886V2.46584L4.12178 4.12181C3.83974 4.40387 3.38245 4.40387 3.10041 4.12181C2.81837 3.83974 2.81837 3.38248 3.10041 3.10044L5.98932 0.211535C5.98984 0.211008 5.99037 0.210488 5.9909 0.209976L5.99172 0.209155L5.99246 0.208416C5.99283 0.208038 5.99321 0.207673 5.99361 0.207322L5.99399 0.206912L5.99544 0.205516L5.9955 0.205462C6.13029 0.0735816 6.31141 -0.000185551 6.49999 3.50518e-07C6.59919 3.50518e-07 6.69371 0.0199993 6.77975 0.0561944L6.78055 0.0565227L6.78123 0.0568236C6.86431 0.0919436 6.94005 0.142365 7.0045 0.205462L7.00456 0.205516L7.00598 0.206912L7.00642 0.207322L7.00754 0.208416L7.00828 0.209155L7.0091 0.209976L7.01068 0.211535L9.89956 3.10041C10.1816 3.38245 10.1816 3.83974 9.89956 4.12178C9.61755 4.40382 9.1602 4.40382 8.87819 4.12178L7.22225 2.46581V9.38884C7.22225 9.78775 6.89887 10.1111 6.49999 10.1111Z"
                      fill="#74BDCB"
                    />
                  </svg>
                </button>
                <button
                  class="w-[30px] h-[30px] bg-body rounded-full flex-center"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M11.4 1.8H0.6C0.44087 1.8 0.288258 1.86321 0.175736 1.97574C0.0632141 2.08826 0 2.24087 0 2.4C0 2.55913 0.0632141 2.71174 0.175736 2.82426C0.288258 2.93679 0.44087 3 0.6 3H1.8V10.2C1.8 10.6774 1.98964 11.1352 2.32721 11.4728C2.66477 11.8104 3.12261 12 3.6 12H8.4C8.87739 12 9.33523 11.8104 9.67279 11.4728C10.0104 11.1352 10.2 10.6774 10.2 10.2V3H11.4C11.5591 3 11.7117 2.93679 11.8243 2.82426C11.9368 2.71174 12 2.55913 12 2.4C12 2.24087 11.9368 2.08826 11.8243 1.97574C11.7117 1.86321 11.5591 1.8 11.4 1.8ZM5.4 8.4C5.4 8.55913 5.33679 8.71174 5.22426 8.82426C5.11174 8.93679 4.95913 9 4.8 9C4.64087 9 4.48826 8.93679 4.37574 8.82426C4.26321 8.71174 4.2 8.55913 4.2 8.4V5.4C4.2 5.24087 4.26321 5.08826 4.37574 4.97574C4.48826 4.86321 4.64087 4.8 4.8 4.8C4.95913 4.8 5.11174 4.86321 5.22426 4.97574C5.33679 5.08826 5.4 5.24087 5.4 5.4V8.4ZM7.8 8.4C7.8 8.55913 7.73679 8.71174 7.62426 8.82426C7.51174 8.93679 7.35913 9 7.2 9C7.04087 9 6.88826 8.93679 6.77574 8.82426C6.66321 8.71174 6.6 8.55913 6.6 8.4V5.4C6.6 5.24087 6.66321 5.08826 6.77574 4.97574C6.88826 4.86321 7.04087 4.8 7.2 4.8C7.35913 4.8 7.51174 4.86321 7.62426 4.97574C7.73679 5.08826 7.8 5.24087 7.8 5.4V8.4ZM4.8 1.2H7.2C7.35913 1.2 7.51174 1.13679 7.62426 1.02426C7.73679 0.911742 7.8 0.75913 7.8 0.6C7.8 0.44087 7.73679 0.288258 7.62426 0.175736C7.51174 0.0632141 7.35913 0 7.2 0H4.8C4.64087 0 4.48826 0.0632141 4.37574 0.175736C4.26321 0.288258 4.2 0.44087 4.2 0.6C4.2 0.75913 4.26321 0.911742 4.37574 1.02426C4.48826 1.13679 4.64087 1.2 4.8 1.2Z"
                      fill="#FFA384"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-3">
          <label class="label" for="PersonName">Person Name</label>
          <input
            type="text"
            id="PersonName"
            placeholder="Enter Person Name"
            v-model="form.contact_person_name"
            class="input"
          />
          <small
              v-if="errors && errors.contact_person_name"
              class="text-danger"
          >{{ errors.contact_person_name[0] }}</small>
        </div>
        <div class="col-span-3">
          <label class="label" for="PersonPhoneNumber">Phone Number</label>
          <input
            type="text"
            id="PersonPhoneNumber"
            placeholder="Enter Phone Number"
            class="input"
            v-model="form.contact_person_phone_number"
          />
          <small
              v-if="errors && errors.contact_person_phone_number"
              class="text-danger"
          >{{ errors.contact_person_phone_number[0] }}</small>
        </div>
      </div>
    </div>
    <div class="p-5 bg-white rounded-[20px] mb-30 mt-30">
      <h4 class="text-xl font-bold mb-5">Employee Information</h4>
      <div class="">
        <label class="label" for="EmployeeName">Employee Name *</label>
<!--        <select v-model="form.employee_id" class="input" multiple>
          <option value="" selected disabled>Select Employee</option>
          <option v-for="emp in employees" :key="emp.id" value=""> {{emp.first_name}} {{emp.last_name}}</option>
        </select>-->
<!--        <MultiSelect
            v-model="form.employee_id"
            :options="employees"
            trackBy="id"
            label="first_name"
            @changed="onChange"
        ></MultiSelect>-->
        <input
          type="text"
          id="EmployeeName"
          placeholder="Enter Employee Name"
          class="input"
        />
      </div>
    </div>
    <div v-if="isEditing" class="grid grid-cols-2 gap-30">
      <div class="p-5 bg-white rounded-[20px]">
        <div class="flex items-center justify-between mb-5">
          <h4 class="text-xl font-bold">All Tasks</h4>
          <button class="btn btn-light-sky" @click="$event => toggleAddTaskModal(true)">
            <svg
              class="mr-3"
              width="11"
              height="12"
              viewBox="0 0 11 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M9.875 5.375H6.125V1.625C6.125 1.27938 5.845 1 5.5 1C5.155 1 4.875 1.27938 4.875 1.625V5.375H1.125C0.78 5.375 0.5 5.65438 0.5 6C0.5 6.34562 0.78 6.625 1.125 6.625H4.875V10.375C4.875 10.7206 5.155 11 5.5 11C5.845 11 6.125 10.7206 6.125 10.375V6.625H9.875C10.22 6.625 10.5 6.34562 10.5 6C10.5 5.65438 10.22 5.375 9.875 5.375"
                fill="black"
              />
              <path
                d="M9.875 5.375H6.125V1.625C6.125 1.27938 5.845 1 5.5 1C5.155 1 4.875 1.27938 4.875 1.625V5.375H1.125C0.78 5.375 0.5 5.65438 0.5 6C0.5 6.34562 0.78 6.625 1.125 6.625H4.875V10.375C4.875 10.7206 5.155 11 5.5 11C5.845 11 6.125 10.7206 6.125 10.375V6.625H9.875C10.22 6.625 10.5 6.34562 10.5 6C10.5 5.65438 10.22 5.375 9.875 5.375"
                stroke="black"
              />
            </svg>
            <span>Add Tasks</span>
          </button>
        </div>
        <div class="relative mb-5">
          <input
            type="text"
            v-model="search_task"
            placeholder="Task Search"
            @input="fetchTask"
            class="w-full text-xs py-4 pl-5 pr-20 bg-[#E7F2F8] rounded-full"
          />
          <button
            class="w-10 h-10 flex items-center justify-center absolute top-1 right-1 bg-white rounded-full"
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
        <div
            v-for="(task,index) in tasks"
            :key="task.id"
          class="flex items-center py-2 justify-between border-[body]"
            :class="tasks.length-1!==index && 'border-b-2'"
        >
          <p class="text-sm">{{index+1}}. {{task.name}}</p>
          <div class="flex">
            <button class="p-2 mr-2" @click="fetchSingleTask(task)">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.35674 2.32816L0.613909 8.07099C0.402294 8.283 0.268554 8.56031 0.234403 8.85791L0.00558271 10.8671C-0.0093331 11.0083 0.00572183 11.1512 0.0497644 11.2863C0.0938069 11.4213 0.165846 11.5456 0.261178 11.6509C0.35651 11.7563 0.47299 11.8403 0.603011 11.8976C0.733032 11.9548 0.87367 11.984 1.01574 11.9833H1.13294L3.14209 11.7544C3.4385 11.7201 3.71521 11.5887 3.92901 11.3805L9.67184 5.6321L6.35674 2.32816ZM11.614 1.84262L10.1574 0.385983C10.0355 0.263644 9.89071 0.16657 9.73125 0.100334C9.57179 0.0340967 9.40082 0 9.22815 0C9.05548 0 8.88451 0.0340967 8.72504 0.100334C8.56558 0.16657 8.42077 0.263644 8.29892 0.385983L6.94832 1.73658L10.2634 5.05168L11.614 3.70108C11.7364 3.57923 11.8334 3.43442 11.8997 3.27496C11.9659 3.11549 12 2.94452 12 2.77185C12 2.59918 11.9659 2.42821 11.8997 2.26875C11.8334 2.10928 11.7364 1.96447 11.614 1.84262Z"
                  fill="#15C787"
                />
              </svg>
            </button>
            <button class="p-2" @click="$event => {toggleConfDeleteTask(true),this.taskDeletingID=task.id}">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4 1.8H0.6C0.44087 1.8 0.288258 1.86321 0.175736 1.97574C0.0632141 2.08826 0 2.24087 0 2.4C0 2.55913 0.0632141 2.71174 0.175736 2.82426C0.288258 2.93679 0.44087 3 0.6 3H1.8V10.2C1.8 10.6774 1.98964 11.1352 2.32721 11.4728C2.66477 11.8104 3.12261 12 3.6 12H8.4C8.87739 12 9.33523 11.8104 9.67279 11.4728C10.0104 11.1352 10.2 10.6774 10.2 10.2V3H11.4C11.5591 3 11.7117 2.93679 11.8243 2.82426C11.9368 2.71174 12 2.55913 12 2.4C12 2.24087 11.9368 2.08826 11.8243 1.97574C11.7117 1.86321 11.5591 1.8 11.4 1.8ZM5.4 8.4C5.4 8.55913 5.33679 8.71174 5.22426 8.82426C5.11174 8.93679 4.95913 9 4.8 9C4.64087 9 4.48826 8.93679 4.37574 8.82426C4.26321 8.71174 4.2 8.55913 4.2 8.4V5.4C4.2 5.24087 4.26321 5.08826 4.37574 4.97574C4.48826 4.86321 4.64087 4.8 4.8 4.8C4.95913 4.8 5.11174 4.86321 5.22426 4.97574C5.33679 5.08826 5.4 5.24087 5.4 5.4V8.4ZM7.8 8.4C7.8 8.55913 7.73679 8.71174 7.62426 8.82426C7.51174 8.93679 7.35913 9 7.2 9C7.04087 9 6.88826 8.93679 6.77574 8.82426C6.66321 8.71174 6.6 8.55913 6.6 8.4V5.4C6.6 5.24087 6.66321 5.08826 6.77574 4.97574C6.88826 4.86321 7.04087 4.8 7.2 4.8C7.35913 4.8 7.51174 4.86321 7.62426 4.97574C7.73679 5.08826 7.8 5.24087 7.8 5.4V8.4ZM4.8 1.2H7.2C7.35913 1.2 7.51174 1.13679 7.62426 1.02426C7.73679 0.911742 7.8 0.75913 7.8 0.6C7.8 0.44087 7.73679 0.288258 7.62426 0.175736C7.51174 0.0632141 7.35913 0 7.2 0H4.8C4.64087 0 4.48826 0.0632141 4.37574 0.175736C4.26321 0.288258 4.2 0.44087 4.2 0.6C4.2 0.75913 4.26321 0.911742 4.37574 1.02426C4.48826 1.13679 4.64087 1.2 4.8 1.2Z"
                  fill="#FFA384"
                />
              </svg>
            </button>
          </div>
          <ConfirmationModal
              :isOpenModal="isConfDeleteTask"
              title="Do you really want to delete the Task?"
              text="Please enter “Delete”"
              :closeModal="$event => toggleConfDeleteTask(false)"
              btnText="Delete"
              :SubmitModal="deleteTask"
          />
        </div>
<!--        <div class="flex items-center py-2 justify-between">
          <p class="text-sm">Task 1 @@</p>
          <div class="flex">
            <button class="p-2 mr-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.35674 2.32816L0.613909 8.07099C0.402294 8.283 0.268554 8.56031 0.234403 8.85791L0.00558271 10.8671C-0.0093331 11.0083 0.00572183 11.1512 0.0497644 11.2863C0.0938069 11.4213 0.165846 11.5456 0.261178 11.6509C0.35651 11.7563 0.47299 11.8403 0.603011 11.8976C0.733032 11.9548 0.87367 11.984 1.01574 11.9833H1.13294L3.14209 11.7544C3.4385 11.7201 3.71521 11.5887 3.92901 11.3805L9.67184 5.6321L6.35674 2.32816ZM11.614 1.84262L10.1574 0.385983C10.0355 0.263644 9.89071 0.16657 9.73125 0.100334C9.57179 0.0340967 9.40082 0 9.22815 0C9.05548 0 8.88451 0.0340967 8.72504 0.100334C8.56558 0.16657 8.42077 0.263644 8.29892 0.385983L6.94832 1.73658L10.2634 5.05168L11.614 3.70108C11.7364 3.57923 11.8334 3.43442 11.8997 3.27496C11.9659 3.11549 12 2.94452 12 2.77185C12 2.59918 11.9659 2.42821 11.8997 2.26875C11.8334 2.10928 11.7364 1.96447 11.614 1.84262Z"
                  fill="#15C787"
                />
              </svg>
            </button>
            <button class="p-2">
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.4 1.8H0.6C0.44087 1.8 0.288258 1.86321 0.175736 1.97574C0.0632141 2.08826 0 2.24087 0 2.4C0 2.55913 0.0632141 2.71174 0.175736 2.82426C0.288258 2.93679 0.44087 3 0.6 3H1.8V10.2C1.8 10.6774 1.98964 11.1352 2.32721 11.4728C2.66477 11.8104 3.12261 12 3.6 12H8.4C8.87739 12 9.33523 11.8104 9.67279 11.4728C10.0104 11.1352 10.2 10.6774 10.2 10.2V3H11.4C11.5591 3 11.7117 2.93679 11.8243 2.82426C11.9368 2.71174 12 2.55913 12 2.4C12 2.24087 11.9368 2.08826 11.8243 1.97574C11.7117 1.86321 11.5591 1.8 11.4 1.8ZM5.4 8.4C5.4 8.55913 5.33679 8.71174 5.22426 8.82426C5.11174 8.93679 4.95913 9 4.8 9C4.64087 9 4.48826 8.93679 4.37574 8.82426C4.26321 8.71174 4.2 8.55913 4.2 8.4V5.4C4.2 5.24087 4.26321 5.08826 4.37574 4.97574C4.48826 4.86321 4.64087 4.8 4.8 4.8C4.95913 4.8 5.11174 4.86321 5.22426 4.97574C5.33679 5.08826 5.4 5.24087 5.4 5.4V8.4ZM7.8 8.4C7.8 8.55913 7.73679 8.71174 7.62426 8.82426C7.51174 8.93679 7.35913 9 7.2 9C7.04087 9 6.88826 8.93679 6.77574 8.82426C6.66321 8.71174 6.6 8.55913 6.6 8.4V5.4C6.6 5.24087 6.66321 5.08826 6.77574 4.97574C6.88826 4.86321 7.04087 4.8 7.2 4.8C7.35913 4.8 7.51174 4.86321 7.62426 4.97574C7.73679 5.08826 7.8 5.24087 7.8 5.4V8.4ZM4.8 1.2H7.2C7.35913 1.2 7.51174 1.13679 7.62426 1.02426C7.73679 0.911742 7.8 0.75913 7.8 0.6C7.8 0.44087 7.73679 0.288258 7.62426 0.175736C7.51174 0.0632141 7.35913 0 7.2 0H4.8C4.64087 0 4.48826 0.0632141 4.37574 0.175736C4.26321 0.288258 4.2 0.44087 4.2 0.6C4.2 0.75913 4.26321 0.911742 4.37574 1.02426C4.48826 1.13679 4.64087 1.2 4.8 1.2Z"
                  fill="#FFA384"
                />
              </svg>
            </button>
          </div>
        </div>-->
      </div>
      <div class="p-5 bg-white rounded-[20px] pb-0">
        <h4 class="text-xl font-bold mb-5">Object History</h4>
        <table class="w-full text-xs font-semibold">
          <thead class="bg-body font-bold">
            <tr class="text-sm">
              <td class="p-4 rounded-l-xl">Name</td>
              <td class="p-4">Start Date</td>
              <td class="p-4">Total Time</td>
              <td class="p-4">Status</td>
              <td class="p-4">Deadline</td>
              <td class="p-4 rounded-r-xl"></td>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="employee in Employees"
              :key="employee.ID"
              class="border-b border-body"
            >
              <td class="p-4">
                <div class="flex items-center">
                  <img
                    class="mr-2"
                    :src="employee.img"
                    alt=""
                    width="32"
                    height="32"
                  />
                  <span>{{ employee.name }}</span>
                </div>
              </td>
              <td class="text-xs font-normal p-4">
                <span>{{ employee.date }}</span>
              </td>
              <td class="p-4">
                <span>{{ employee.time }}</span>
              </td>
              <td class="p-4">
                <svg
                  v-if="employee.isActive"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  class="inline"
                  fill="none"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.125 15.5C12.2673 15.5 15.625 12.1423 15.625 8C15.625 3.85775 12.2673 0.5 8.125 0.5C3.98275 0.5 0.625 3.85775 0.625 8C0.625 12.1423 3.98275 15.5 8.125 15.5ZM11.6553 7.03025C11.7919 6.8888 11.8675 6.69935 11.8658 6.5027C11.864 6.30605 11.7852 6.11794 11.6461 5.97889C11.5071 5.83983 11.3189 5.76095 11.1223 5.75924C10.9257 5.75754 10.7362 5.83313 10.5948 5.96975L7.375 9.1895L5.65525 7.46975C5.5138 7.33313 5.32435 7.25754 5.1277 7.25924C4.93105 7.26095 4.74294 7.33983 4.60389 7.47889C4.46483 7.61794 4.38595 7.80605 4.38424 8.0027C4.38254 8.19935 4.45813 8.3888 4.59475 8.53025L6.84475 10.7802C6.9854 10.9209 7.17613 10.9998 7.375 10.9998C7.57387 10.9998 7.7646 10.9209 7.90525 10.7802L11.6553 7.03025Z"
                    fill="#15C787"
                  />
                </svg>
                <svg
                  v-else
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  class="inline"
                >
                  <path
                    d="M8.12468 0.5C3.9831 0.5 0.625 3.8581 0.625 7.99968C0.625 12.1413 3.9831 15.5 8.12468 15.5C12.2663 15.5 15.625 12.1413 15.625 7.99968C15.625 3.8581 12.2663 0.5 8.12468 0.5ZM9.68595 12.1235C9.29992 12.2759 8.99262 12.3914 8.76214 12.4714C8.50362 12.5559 8.23279 12.5964 7.96087 12.5914C7.49357 12.5914 7.12976 12.4771 6.87071 12.2492C6.61167 12.0213 6.48278 11.7324 6.48278 11.3813C6.48278 11.2448 6.4923 11.1051 6.51135 10.9629C6.53489 10.8008 6.56604 10.64 6.60468 10.481L7.08786 8.77429C7.1304 8.61048 7.16722 8.45492 7.19643 8.31016C7.22564 8.16413 7.2396 8.03016 7.2396 7.90825C7.2396 7.69111 7.19452 7.53873 7.105 7.45302C7.01421 7.3673 6.84341 7.3254 6.58881 7.3254C6.46437 7.3254 6.33611 7.34381 6.20468 7.38254C6.07452 7.42254 5.96151 7.45873 5.86881 7.49429L5.99643 6.96857C6.31262 6.83968 6.61548 6.72921 6.90437 6.63778C7.16854 6.54939 7.44487 6.5027 7.72341 6.49937C8.18754 6.49937 8.54564 6.61238 8.7977 6.83587C9.04849 7.06 9.17484 7.35143 9.17484 7.70952C9.17484 7.78381 9.16595 7.9146 9.14881 8.10127C9.13391 8.2757 9.10158 8.4482 9.0523 8.61619L8.57167 10.3178C8.52859 10.4717 8.4932 10.6276 8.46564 10.7851C8.43947 10.9161 8.42397 11.049 8.41929 11.1825C8.41929 11.4086 8.46944 11.5629 8.57103 11.6448C8.67135 11.7267 8.84722 11.7679 9.09611 11.7679C9.21357 11.7679 9.345 11.747 9.49357 11.7063C9.64087 11.6657 9.74754 11.6295 9.81484 11.5984L9.68595 12.1235ZM9.60087 5.21683C9.38233 5.42291 9.09168 5.53507 8.79135 5.52921C8.47643 5.52921 8.20468 5.42508 7.97865 5.21683C7.87116 5.12227 7.7853 5.00568 7.7269 4.87497C7.66851 4.74427 7.63895 4.60252 7.64024 4.45937C7.64024 4.16413 7.75452 3.91016 7.97865 3.7C8.19766 3.49227 8.48954 3.37894 8.79135 3.38444C9.1069 3.38444 9.37738 3.48921 9.60087 3.7C9.825 3.91016 9.93738 4.16413 9.93738 4.45937C9.93738 4.75587 9.825 5.00857 9.60087 5.21683Z"
                    fill="#FFA384"
                  />
                </svg>
              </td>
              <td class="p-4">
                <span class="whitespace-pre">{{ employee.deadline }}</span>
              </td>
              <td class="text-center p-4">
                <button class="p-2" @click="$event => toggleCompleteTaskModal(true)">
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
    </div>
    <div class="mt-5 flex justify-end">
      <button type="button" class="btn btn-light-sky mr-5">Cancel</button>
      <button type="button" class="btn btn-sky" @click="$event => toggleConf(true)">Update</button>
    </div>
  </div>
  <ConfirmationModal 
    :isOpenModal="isConfOpen" 
    title="Save Object without an Employee?"
    text="You didn't add an Employee to this Object, are you sure you want to save?"
    :closeModal="$event => toggleConf(false)"
    btnText="Yes, save without Employee"
    :SubmitModal="$event => {toggleConf(false); toggleConfSuccess(true)}"
  />
  <ConfirmationModal 
    :isOpenModal="isConfSuccessOpen" 
    title="Update Successful"
    :closeModal="$event => toggleConfSuccess(false)"
    btnText="Back to Objects"
    :SubmitModal="$event => {toggleConfSuccess(false);}"
  />
  <TransitionRoot appear :show="isAddTaskModalOpen" as="template">
    <Dialog as="div" @close="$event => toggleAddTaskModal(false)" class="relative z-30">
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
            <DialogPanel class="w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div class="flex items-center justify-between mb-5 pb-5 border-b border-body">
                <DialogTitle as="h3" class="text-xl font-bold text-black">{{ isTaskEditing ? 'Edit' : 'Add' }} Tasks</DialogTitle>
                <button @click="$event => toggleAddTaskModal(false)" class="w-7 h-7 bg-body rounded-md flex items-center justify-center">
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
              <div>
                  <label class="label" for="Address">Task </label>
                  <input
                    type="text"
                    id="Task"
                    v-model="task.name"
                    placeholder="Enter your task"
                    class="input"
                  />
                </div>
              <div class="mt-5 flex justify-end">
                <button type="button" class="btn btn-light-sky mr-5" @click="$event => {toggleAddTaskModal(false), this.task={}}">Cancel</button>
                <button type="button" class="btn btn-sky" @click="isTaskEditing?editTask():addTask()">Save</button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <TransitionRoot appear :show="isCompleteTaskModalOpen" as="template">
    <Dialog as="div" @close="$event => toggleCompleteTaskModal(false)" class="relative z-30">
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
            <DialogPanel class=" w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
              <TabGroup>
                <div class="flex items-center justify-between p-5 border-b-2 border-body">
                <TabList class="inline-flex space-x-1 rounded-full bg-body p-1 text-xs text-black">
                  <Tab as="template" v-slot="{selected}">
                    <button :class="['rounded-full py-4 px-11 leading-5  whitespace-nowrap focus:outline-0', selected ? 'bg-white font-bold shadow-lg shadow-sky/40' : ' bg-transparent']">
                      Complete Task
                    </button>
                  </Tab>
                  <Tab as="template" v-slot="{selected}">
                    <button :class="['rounded-full px-11 py-2.5 leading-5  whitespace-nowrap focus:outline-0', selected ? 'bg-white font-bold shadow-lg shadow-sky/40' : ' bg-transparent']">
                      Pending Task
                    </button>
                  </Tab>
                </TabList>
                <button @click="$event => toggleCompleteTaskModal(false)" class="w-7 h-7 bg-body rounded-md flex items-center justify-center">
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
                <TabPanels>
                  <TabPanel :class="['bg-white']">
                    <div
                      v-for="task in CompleteTask"
                      :key="task.ID"
                      class="flex items-center p-4 border-b-2 border-body">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M10 20C15.523 20 20 15.523 20 10C20 4.477 15.523 0 10 0C4.477 0 0 4.477 0 10C0 15.523 4.477 20 10 20ZM14.707 8.707C14.8892 8.5184 14.99 8.2658 14.9877 8.0036C14.9854 7.7414 14.8802 7.49059 14.6948 7.30518C14.5094 7.11977 14.2586 7.0146 13.9964 7.01233C13.7342 7.01005 13.4816 7.11084 13.293 7.293L9 11.586L6.707 9.293C6.5184 9.11084 6.2658 9.01005 6.0036 9.01233C5.7414 9.0146 5.49059 9.11977 5.30518 9.30518C5.11977 9.49059 5.0146 9.7414 5.01233 10.0036C5.01005 10.2658 5.11084 10.5184 5.293 10.707L8.293 13.707C8.48053 13.8945 8.73484 13.9998 9 13.9998C9.26516 13.9998 9.51947 13.8945 9.707 13.707L14.707 8.707Z" fill="#15C787"/>
                      </svg>
                      <div class="flex ml-4 items-center justify-between w-full">
                        <div class="flex items-center">
                          <img src="../../assets/images/cover/object.png" />
                          <div class="ml-4 text-black">
                            <p class="text-xs font-semibold mb-1">{{task.name}}</p>
                            <div class="flex items-center text-[10px]">
                              <div class="flex items-center mr-2">
                                <svg class="mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83847 1.68282V0.403823C3.84112 0.351782 3.83317 0.299745 3.81508 0.250877C3.79699 0.202008 3.76916 0.157328 3.73326 0.119555C3.69737 0.0817819 3.65416 0.0517043 3.60628 0.0311515C3.55839 0.0105986 3.50683 0 3.45472 0C3.40261 0 3.35105 0.0105986 3.30317 0.0311515C3.25528 0.0517043 3.21208 0.0817819 3.17618 0.119555C3.14029 0.157328 3.11245 0.202008 3.09436 0.250877C3.07628 0.299745 3.06832 0.351782 3.07097 0.403823V1.68282C3.07599 1.78121 3.11861 1.87391 3.19003 1.94178C3.26145 2.00964 3.3562 2.04749 3.45472 2.04749C3.55324 2.04749 3.648 2.00964 3.71941 1.94178C3.79083 1.87391 3.83345 1.78121 3.83847 1.68282ZM6.90945 1.68282V0.403823C6.9121 0.351782 6.90415 0.299745 6.88606 0.250877C6.86797 0.202008 6.84013 0.157328 6.80424 0.119555C6.76834 0.0817819 6.72514 0.0517043 6.67726 0.0311515C6.62937 0.0105986 6.57781 0 6.5257 0C6.47359 0 6.42203 0.0105986 6.37414 0.0311515C6.32626 0.0517043 6.28306 0.0817819 6.24716 0.119555C6.21127 0.157328 6.18343 0.202008 6.16534 0.250877C6.14726 0.299745 6.1393 0.351782 6.14195 0.403823V1.68282C6.14697 1.78121 6.18959 1.87391 6.26101 1.94178C6.33243 2.00964 6.42718 2.04749 6.5257 2.04749C6.62422 2.04749 6.71898 2.00964 6.79039 1.94178C6.86181 1.87391 6.90443 1.78121 6.90945 1.68282ZM9.40829 1.09103C9.64336 1.32409 9.7866 1.63404 9.81176 1.9641H9.81126C9.88811 2.91125 9.98043 4.25761 9.98043 5.26563C9.98043 6.27365 9.88811 7.62001 9.81126 8.57165C9.78509 8.90083 9.64147 9.20964 9.40659 9.44177C9.17172 9.67389 8.86124 9.81387 8.53177 9.83617C7.7029 9.89755 6.14196 9.99985 4.99022 9.99985C3.83847 9.99985 2.27753 9.89755 1.44317 9.83617C1.11459 9.81272 0.805302 9.67224 0.571455 9.44022C0.337607 9.20821 0.194698 8.90004 0.168669 8.57165C0.092319 7.62001 0 6.27415 0 5.26563C0 4.25711 0.092319 2.91125 0.169168 1.9641C0.195046 1.63358 0.338439 1.32325 0.573376 1.08932C0.806192 0.857192 1.11515 0.717161 1.44317 0.695092C1.53245 0.688367 1.62458 0.680178 1.71919 0.671768C1.98262 0.648355 2.26526 0.623233 2.55898 0.623233V1.68266C2.55898 1.92022 2.65336 2.14806 2.82134 2.31604C2.98932 2.48403 3.21716 2.5784 3.45473 2.5784C3.69229 2.5784 3.92013 2.48403 4.08811 2.31604C4.2561 2.14806 4.35047 1.92022 4.35047 1.68266V0.531413H5.62996V1.68266C5.62996 1.80029 5.65313 1.91677 5.69815 2.02544C5.74316 2.13412 5.80914 2.23286 5.89232 2.31604C5.9755 2.39922 6.07424 2.4652 6.18292 2.51021C6.2916 2.55523 6.40807 2.5784 6.52571 2.5784C6.64334 2.5784 6.75982 2.55523 6.86849 2.51021C6.97717 2.4652 7.07591 2.39922 7.15909 2.31604C7.24227 2.23286 7.30825 2.13412 7.35326 2.02544C7.39828 1.91677 7.42145 1.80029 7.42145 1.68266V0.623233C7.79185 0.642488 8.16198 0.666443 8.53177 0.695092C8.86204 0.71741 9.17321 0.857972 9.40829 1.09103ZM2.94273 6.92937H4.99022C5.09212 6.92937 5.18986 6.88889 5.26192 6.81682C5.33398 6.74476 5.37446 6.64703 5.37446 6.54512C5.37446 6.44321 5.33398 6.34548 5.26192 6.27342C5.18986 6.20136 5.09212 6.16087 4.99022 6.16087H2.94273C2.84082 6.16087 2.74309 6.20136 2.67103 6.27342C2.59897 6.34548 2.55848 6.44321 2.55848 6.54512C2.55848 6.64703 2.59897 6.74476 2.67103 6.81682C2.74309 6.88889 2.84082 6.92937 2.94273 6.92937ZM2.94273 4.88188H7.0377C7.13715 4.8783 7.23133 4.83627 7.30041 4.76465C7.3695 4.69303 7.4081 4.5974 7.4081 4.49789C7.4081 4.39837 7.3695 4.30274 7.30041 4.23112C7.23133 4.1595 7.13715 4.11747 7.0377 4.11389H2.94273C2.84328 4.11747 2.74911 4.1595 2.68002 4.23112C2.61093 4.30274 2.57233 4.39837 2.57233 4.49789C2.57233 4.5974 2.61093 4.69303 2.68002 4.76465C2.74911 4.83627 2.84328 4.8783 2.94273 4.88188Z" fill="#74BDCB"/>
                                </svg>
                                {{task.date}}
                              </div>
                              <div class="flex items-center">
                                <svg class="mr-1" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M5.98047 0C4.99156 0 4.02486 0.293245 3.20262 0.842652C2.38037 1.39206 1.73951 2.17295 1.36107 3.08658C0.982635 4.00021 0.883619 5.00555 1.07654 5.97545C1.26947 6.94535 1.74567 7.83627 2.44494 8.53553C3.1442 9.23479 4.03511 9.711 5.00502 9.90392C5.97492 10.0969 6.98026 9.99783 7.89389 9.6194C8.80752 9.24096 9.58841 8.60009 10.1378 7.77785C10.6872 6.9556 10.9805 5.98891 10.9805 5C10.9789 3.6744 10.4516 2.40354 9.51428 1.46619C8.57693 0.52885 7.30607 0.00156385 5.98047 0ZM7.66547 6.685C7.58023 6.77021 7.46463 6.81808 7.34411 6.81808C7.22358 6.81808 7.10798 6.77021 7.02274 6.685L5.65911 5.32136C5.57386 5.23614 5.52595 5.12054 5.52592 5V2.27273C5.52592 2.15217 5.57381 2.03656 5.65906 1.95131C5.7443 1.86607 5.85992 1.81818 5.98047 1.81818C6.10102 1.81818 6.21664 1.86607 6.30188 1.95131C6.38713 2.03656 6.43502 2.15217 6.43502 2.27273V4.81182L7.66547 6.04227C7.75068 6.12751 7.79855 6.24311 7.79855 6.36364C7.79855 6.48416 7.75068 6.59976 7.66547 6.685Z" fill="#74BDCB"/>
                                </svg>
                                {{task.time}}
                              </div>
                            </div>
                          </div>
                        </div>
                        <span class="text-[10px] text-[#15C787]">Completed</span>
                      </div>
                    </div>
                  </TabPanel>
                  <TabPanel :class="['rounded-3xl bg-white']">
                    <div
                      class="p-4 border-b-2 border-body"
                      v-for="task in PendingTask"
                      :key="task.ID">
                      <div class="flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9.99958 0C4.47746 0 0 4.47746 0 9.99958C0 15.5217 4.47746 20 9.99958 20C15.5217 20 20 15.5217 20 9.99958C20 4.47746 15.5217 0 9.99958 0ZM12.0813 15.498C11.5666 15.7012 11.1568 15.8552 10.8495 15.9619C10.5048 16.0745 10.1437 16.1286 9.78116 16.1219C9.1581 16.1219 8.67302 15.9695 8.32762 15.6656C7.98222 15.3617 7.81037 14.9765 7.81037 14.5084C7.81037 14.3263 7.82307 14.1401 7.84847 13.9505C7.87986 13.7345 7.92139 13.52 7.97291 13.3079L8.61714 11.0324C8.67386 10.814 8.72296 10.6066 8.7619 10.4135C8.80085 10.2188 8.81947 10.0402 8.81947 9.87767C8.81947 9.58815 8.75937 9.38497 8.64 9.27069C8.51894 9.1564 8.29122 9.10053 7.95175 9.10053C7.78582 9.10053 7.61481 9.12508 7.43958 9.17672C7.26603 9.23005 7.11534 9.27831 6.99175 9.32571L7.1619 8.62476C7.58349 8.45291 7.9873 8.30561 8.37249 8.1837C8.72472 8.06586 9.09315 8.0036 9.46455 7.99915C10.0834 7.99915 10.5608 8.14984 10.8969 8.44783C11.2313 8.74667 11.3998 9.13524 11.3998 9.6127C11.3998 9.71175 11.3879 9.88614 11.3651 10.135C11.3452 10.3676 11.3021 10.5976 11.2364 10.8216L10.5956 13.0904C10.5381 13.2956 10.4909 13.5035 10.4542 13.7134C10.4193 13.8881 10.3986 14.0654 10.3924 14.2434C10.3924 14.5448 10.4593 14.7505 10.5947 14.8597C10.7285 14.9689 10.963 15.0239 11.2948 15.0239C11.4514 15.0239 11.6267 14.996 11.8248 14.9418C12.0212 14.8876 12.1634 14.8394 12.2531 14.7979L12.0813 15.498ZM11.9678 6.2891C11.6764 6.56388 11.2889 6.71343 10.8885 6.70561C10.4686 6.70561 10.1062 6.56677 9.80487 6.2891C9.66155 6.16303 9.54706 6.00757 9.4692 5.8333C9.39134 5.65902 9.35193 5.47002 9.35365 5.27915C9.35365 4.8855 9.50603 4.54688 9.80487 4.26667C10.0969 3.9897 10.4861 3.83859 10.8885 3.84593C11.3092 3.84593 11.6698 3.98561 11.9678 4.26667C12.2667 4.54688 12.4165 4.8855 12.4165 5.27915C12.4165 5.6745 12.2667 6.01143 11.9678 6.2891Z" fill="#FFA384"/>
                        </svg>
                        <div class="flex ml-4 items-center justify-between w-full">
                          <div class="flex items-center">
                            <img src="../../assets/images/cover/object.png" />
                            <div class="ml-4 text-black">
                              <p class="text-xs font-semibold mb-1">{{task.name}}</p>
                              <div class="flex items-center text-[10px]">
                                <div class="flex items-center mr-2">
                                  <svg class="mr-1" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.83847 1.68282V0.403823C3.84112 0.351782 3.83317 0.299745 3.81508 0.250877C3.79699 0.202008 3.76916 0.157328 3.73326 0.119555C3.69737 0.0817819 3.65416 0.0517043 3.60628 0.0311515C3.55839 0.0105986 3.50683 0 3.45472 0C3.40261 0 3.35105 0.0105986 3.30317 0.0311515C3.25528 0.0517043 3.21208 0.0817819 3.17618 0.119555C3.14029 0.157328 3.11245 0.202008 3.09436 0.250877C3.07628 0.299745 3.06832 0.351782 3.07097 0.403823V1.68282C3.07599 1.78121 3.11861 1.87391 3.19003 1.94178C3.26145 2.00964 3.3562 2.04749 3.45472 2.04749C3.55324 2.04749 3.648 2.00964 3.71941 1.94178C3.79083 1.87391 3.83345 1.78121 3.83847 1.68282ZM6.90945 1.68282V0.403823C6.9121 0.351782 6.90415 0.299745 6.88606 0.250877C6.86797 0.202008 6.84013 0.157328 6.80424 0.119555C6.76834 0.0817819 6.72514 0.0517043 6.67726 0.0311515C6.62937 0.0105986 6.57781 0 6.5257 0C6.47359 0 6.42203 0.0105986 6.37414 0.0311515C6.32626 0.0517043 6.28306 0.0817819 6.24716 0.119555C6.21127 0.157328 6.18343 0.202008 6.16534 0.250877C6.14726 0.299745 6.1393 0.351782 6.14195 0.403823V1.68282C6.14697 1.78121 6.18959 1.87391 6.26101 1.94178C6.33243 2.00964 6.42718 2.04749 6.5257 2.04749C6.62422 2.04749 6.71898 2.00964 6.79039 1.94178C6.86181 1.87391 6.90443 1.78121 6.90945 1.68282ZM9.40829 1.09103C9.64336 1.32409 9.7866 1.63404 9.81176 1.9641H9.81126C9.88811 2.91125 9.98043 4.25761 9.98043 5.26563C9.98043 6.27365 9.88811 7.62001 9.81126 8.57165C9.78509 8.90083 9.64147 9.20964 9.40659 9.44177C9.17172 9.67389 8.86124 9.81387 8.53177 9.83617C7.7029 9.89755 6.14196 9.99985 4.99022 9.99985C3.83847 9.99985 2.27753 9.89755 1.44317 9.83617C1.11459 9.81272 0.805302 9.67224 0.571455 9.44022C0.337607 9.20821 0.194698 8.90004 0.168669 8.57165C0.092319 7.62001 0 6.27415 0 5.26563C0 4.25711 0.092319 2.91125 0.169168 1.9641C0.195046 1.63358 0.338439 1.32325 0.573376 1.08932C0.806192 0.857192 1.11515 0.717161 1.44317 0.695092C1.53245 0.688367 1.62458 0.680178 1.71919 0.671768C1.98262 0.648355 2.26526 0.623233 2.55898 0.623233V1.68266C2.55898 1.92022 2.65336 2.14806 2.82134 2.31604C2.98932 2.48403 3.21716 2.5784 3.45473 2.5784C3.69229 2.5784 3.92013 2.48403 4.08811 2.31604C4.2561 2.14806 4.35047 1.92022 4.35047 1.68266V0.531413H5.62996V1.68266C5.62996 1.80029 5.65313 1.91677 5.69815 2.02544C5.74316 2.13412 5.80914 2.23286 5.89232 2.31604C5.9755 2.39922 6.07424 2.4652 6.18292 2.51021C6.2916 2.55523 6.40807 2.5784 6.52571 2.5784C6.64334 2.5784 6.75982 2.55523 6.86849 2.51021C6.97717 2.4652 7.07591 2.39922 7.15909 2.31604C7.24227 2.23286 7.30825 2.13412 7.35326 2.02544C7.39828 1.91677 7.42145 1.80029 7.42145 1.68266V0.623233C7.79185 0.642488 8.16198 0.666443 8.53177 0.695092C8.86204 0.71741 9.17321 0.857972 9.40829 1.09103ZM2.94273 6.92937H4.99022C5.09212 6.92937 5.18986 6.88889 5.26192 6.81682C5.33398 6.74476 5.37446 6.64703 5.37446 6.54512C5.37446 6.44321 5.33398 6.34548 5.26192 6.27342C5.18986 6.20136 5.09212 6.16087 4.99022 6.16087H2.94273C2.84082 6.16087 2.74309 6.20136 2.67103 6.27342C2.59897 6.34548 2.55848 6.44321 2.55848 6.54512C2.55848 6.64703 2.59897 6.74476 2.67103 6.81682C2.74309 6.88889 2.84082 6.92937 2.94273 6.92937ZM2.94273 4.88188H7.0377C7.13715 4.8783 7.23133 4.83627 7.30041 4.76465C7.3695 4.69303 7.4081 4.5974 7.4081 4.49789C7.4081 4.39837 7.3695 4.30274 7.30041 4.23112C7.23133 4.1595 7.13715 4.11747 7.0377 4.11389H2.94273C2.84328 4.11747 2.74911 4.1595 2.68002 4.23112C2.61093 4.30274 2.57233 4.39837 2.57233 4.49789C2.57233 4.5974 2.61093 4.69303 2.68002 4.76465C2.74911 4.83627 2.84328 4.8783 2.94273 4.88188Z" fill="#74BDCB"/>
                                  </svg>
                                  {{task.date}}
                                </div>
                                <div class="flex items-center">
                                  <svg class="mr-1" width="11" height="10" viewBox="0 0 11 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M5.98047 0C4.99156 0 4.02486 0.293245 3.20262 0.842652C2.38037 1.39206 1.73951 2.17295 1.36107 3.08658C0.982635 4.00021 0.883619 5.00555 1.07654 5.97545C1.26947 6.94535 1.74567 7.83627 2.44494 8.53553C3.1442 9.23479 4.03511 9.711 5.00502 9.90392C5.97492 10.0969 6.98026 9.99783 7.89389 9.6194C8.80752 9.24096 9.58841 8.60009 10.1378 7.77785C10.6872 6.9556 10.9805 5.98891 10.9805 5C10.9789 3.6744 10.4516 2.40354 9.51428 1.46619C8.57693 0.52885 7.30607 0.00156385 5.98047 0ZM7.66547 6.685C7.58023 6.77021 7.46463 6.81808 7.34411 6.81808C7.22358 6.81808 7.10798 6.77021 7.02274 6.685L5.65911 5.32136C5.57386 5.23614 5.52595 5.12054 5.52592 5V2.27273C5.52592 2.15217 5.57381 2.03656 5.65906 1.95131C5.7443 1.86607 5.85992 1.81818 5.98047 1.81818C6.10102 1.81818 6.21664 1.86607 6.30188 1.95131C6.38713 2.03656 6.43502 2.15217 6.43502 2.27273V4.81182L7.66547 6.04227C7.75068 6.12751 7.79855 6.24311 7.79855 6.36364C7.79855 6.48416 7.75068 6.59976 7.66547 6.685Z" fill="#74BDCB"/>
                                  </svg>
                                  {{task.time}}
                                </div>
                              </div>
                            </div>
                          </div>
                          <span class="text-[10px] text-[#FF0000]">Pending</span>
                        </div>
                      </div>
                      <p class="text-[10px] flex items-center text-[#8F9BB3] mt-4">
                        <svg class="mr-1" width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M7.89446 5.96683L4.67426 0.389268C4.53351 0.145511 4.28147 0 4.00002 0C3.71857 0 3.46651 0.145527 3.32579 0.389268L0.105551 5.96683C-0.0351914 6.21058 -0.0351757 6.50162 0.105551 6.74536C0.246293 6.98912 0.498333 7.13464 0.779801 7.13464H7.22023C7.50168 7.13464 7.75374 6.98912 7.89446 6.74538C8.03517 6.50162 8.03519 6.21058 7.89446 5.96683ZM4.64911 3.7864C4.62459 4.12497 4.33947 4.39019 4.00001 4.39019C3.66054 4.39019 3.37544 4.12497 3.3509 3.7864L3.35063 3.78229L3.28006 2.49497C3.26632 2.2965 3.33605 2.0993 3.47158 1.95359C3.60763 1.80732 3.80023 1.72343 4.00001 1.72343C4.19978 1.72343 4.39238 1.80732 4.52843 1.95359C4.66397 2.0993 4.73369 2.2965 4.71995 2.49497L4.64911 3.7864ZM4.71638 5.50395C4.71638 5.89896 4.39502 6.22032 4.00001 6.22032C3.605 6.22032 3.28364 5.89896 3.28364 5.50395C3.28364 5.10894 3.605 4.78758 4.00001 4.78758C4.39502 4.78758 4.71638 5.10894 4.71638 5.50395Z" fill="#FF0000"/>
                        </svg>
                        <span>{{task.comment}}</span>
                      </p>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
    
<script>
import {ref} from "vue";
import {TabGroup, TabList, Tab, TabPanels, TabPanel, TransitionRoot, TransitionChild, Dialog, DialogPanel, DialogTitle} from "@headlessui/vue";
import SideBarComponent from "../../components/SideBar.vue";
import HeaderComponent from "../../components/Header.vue";
import ConfirmationModal from "../../components/ConfirmationModal.vue";
// import MultiSelect from "../../components/MultiSelect";
export default {
  name: "NewObject",

  components: {
    SideBarComponent,
    HeaderComponent,
    ConfirmationModal,
    // MultiSelect,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
  },
  data() {
    return {
      objectID: this.$route.params.id,
      form: {
        employee_id: [],
        client_name: '',
        client_number: '',
        address: '',
        postcode: '',
        city_id: '',
        key_number: '',
        start_date: '',
        phone_number: '',
        google_map_url: '',
        implementation_time: '',
        from_time: '',
        rotation_type: '',
        pdf: '',
        contact_person_name: '',
        contact_person_phone_number: '',
      },
      task:{
        name:'',
      },
      tasks: [],
      search_task:'',
      taskDeletingID: '',
      pdfs: [],
      hours:0,
      minutes:0,
      seconds:0,
      fromHours:0,
      fromMinutes:0,
      cities: [],
      errors: {},
      implementationTime: 0,
      Employees: [
        {
          ID: "1",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Berry Cuda",
          date: "20/05/2023",
          isActive: true,
          time: "01:00 hrs",
          deadline: "20/05/2023 \n 15:30",
        },
        {
          ID: "2",
          img: require("../../assets/images/profiles/profile-1.png"),
          name: "Tressa Wexler",
          date: "20/05/2023",
          isActive: false,
          time: "01:00 hrs",
          deadline: "20/05/2023 \n 15:30",
        },
      ],
      employees: [],
      CompleteTask: [
        {
          ID: "1",
          img: require("../../assets/images/cover/object.png"),
          name: "Clean the windows",
          date: "20/05/2023",
          time: "15:30"
        },
        {
          ID: "2",
          img: require("../../assets/images/cover/object.png"),
          name: "Clean the Floor",
          date: "20/05/2023",
          time: "15:30"
        },
        {
          ID: "3",
          img: require("../../assets/images/cover/object.png"),
          name: "Dry Clean Sheets",
          date: "20/05/2023",
          time: "15:30"
        },
        {
          ID: "4",
          img: require("../../assets/images/cover/object.png"),
          name: "Clean Desk",
          date: "20/05/2023",
          time: "15:30"
        },
        {
          ID: "5",
          img: require("../../assets/images/cover/object.png"),
          name: "Paper work",
          date: "20/05/2023",
          time: "15:30"
        },
        {
          ID: "6",
          img: require("../../assets/images/cover/object.png"),
          name: "Lunch Break",
          date: "20/05/2023",
          time: "15:30"
        },
      ],
      PendingTask: [
        {
          ID: "1",
          img: require("../../assets/images/cover/object.png"),
          name: "Cleaning Entrance",
          date: "20/05/2023",
          time: "15:30",
          comment: "Could not clean the wondow, because nowindows"
        },
        {
          ID: "2",
          img: require("../../assets/images/cover/object.png"),
          name: "Watering All Plants",
          date: "20/05/2023",
          time: "15:30",
          comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
      ]
    };
  },
  computed:{
    isEditing() {
      return !!this.objectID
    },
    isTaskEditing() {
      return !!this.task.id
    }
  },
  watch: {
    hours(newValue) {
      this.hours = this.padNumber(newValue);
    },
    minutes(newValue) {
      this.minutes = this.padNumber(this.validateTime(newValue));
    },
    seconds(newValue) {
      this.seconds = this.padNumber(this.validateTime(newValue));
    },
    fromHours(newValue) {
      this.fromHours = this.padNumber(this.validateHours(newValue));
    },
    fromMinutes(newValue) {
      this.fromMinutes = this.padNumber(this.validateTime(newValue));
    }
  },
  mounted() {
    this.hours = this.padNumber(this.hours);
    this.minutes = this.padNumber(this.minutes);
    this.seconds = this.padNumber(this.seconds);
    this.fromHours = this.padNumber(this.fromHours);
    this.fromMinutes = this.padNumber(this.fromMinutes);
    this.fetchEmployee()
    this.fetchTask()
  },
  methods: {
    onChange(value) {
      this.emitter.emit('change', value);
    },
    changePDF(){
      this.pdfs=this.$refs.pdfFile.files
      console.log(this.pdfs)
      // this.form.pdf= this.$refs.pdfFile.files.item(0)
    },
    increment() {
      this.seconds++;

      if (this.seconds >= 60) {
        this.seconds = 0;
        this.minutes++;

        if (this.minutes >= 60) {
          this.minutes = 0;
          this.hours++;

          /*if (this.hours >= 24) {
            this.hours = 0;
          }*/
        }
      }
    },
    decrement() {
      this.seconds--;

      if (this.seconds < 0) {
        this.seconds = 59;
        this.minutes--;

        if (this.minutes < 0) {
          this.minutes = 59;
          this.hours--;

          if (this.hours < 0) {
            this.hours = 0;
          }
        }
      }
    },

    fetchEmployee(){
      // eslint-disable-next-line no-undef
      axios.get('employee')
          .then(response => {
            console.log(response)
            this.employees = response.data.object
          })
    },
    addTask(){
      // eslint-disable-next-line no-undef
      axios.post('tasks',{
        name: this.task.name,
        object_id: this.objectID
      })
          .then(() => {
            this.task={}
            this.toggleAddTaskModal(false)
            this.fetchTask()
          })
    },
    fetchTask(){
      // eslint-disable-next-line no-undef
      axios.get('tasks',{
        params:{
          name: this.search_task,
          object_id: this.objectID
        }
      })
          .then(response => {
            console.log(response)
            this.tasks = response.data.data
          })
    },
    fetchSingleTask(task){
      // this.task = task
      this.toggleAddTaskModal(true)
      // eslint-disable-next-line no-undef
      axios.get(`tasks/${task.id}`)
          .then((response) => {
            console.log(response)
            this.task = response.data.task
          })
    },
    editTask(){
      // eslint-disable-next-line no-undef
      axios.put(`tasks/${this.task.id}`,{
        name: this.task.name,
        object_id: this.objectID
      })
          .then(() => {
            this.toggleAddTaskModal(false)
            this.task={}
            this.fetchTask()
          })
    },
    deleteTask(){
      // eslint-disable-next-line no-undef
      axios.delete(`tasks/${this.taskDeletingID}`)
          .then(() => {
            this.toggleConfDeleteTask(false)
            this.fetchTask()
          })
    }
  },
  setup() {
    let isConfDeleteTask= ref(false);
    let isConfOpen = ref(false);
    let isConfSuccessOpen = ref(false);
    let isAddTaskModalOpen = ref(false);
    let isCompleteTaskModalOpen = ref(false);
    let toggleConfDeleteTask = (s) => {
      isConfDeleteTask.value = s;
    }
    let toggleConf = (s) => {
      isConfOpen.value = s;
    }
    let toggleConfSuccess = (s) => {
      isConfSuccessOpen.value = s;
    }
    let toggleAddTaskModal = (s) => {
      isAddTaskModalOpen.value = s;
    }
    let toggleCompleteTaskModal = (s) => {
      isCompleteTaskModalOpen.value = s;
    }
    return {
      isConfOpen, toggleConf,
      isConfSuccessOpen, toggleConfSuccess, 
      isAddTaskModalOpen, toggleAddTaskModal,
      isCompleteTaskModalOpen, toggleCompleteTaskModal,
      isConfDeleteTask,toggleConfDeleteTask,
    }
  }
};
</script>
<style>
.time-input::-webkit-outer-spin-button,
.time-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.time-input[type="number"] {
  -moz-appearance: textfield;
}
</style>
    