<template>
  <div class="body-space">
    <SideBarComponent />
    <HeaderComponent v-if="isView" title="View Customer"/>
    <HeaderComponent v-else :title="isEditing? translatedObject.editCustomerLabel:translatedObject.addNewCustomerBtn" />
    <div class="p-5 bg-white rounded-[20px]" ref="scrollToTop">
      <div class="flex items-cente justify-between mb-5">
        <div>
          <h4 class="text-xl font-bold">{{translatedObject.clientDetailsTitle}}</h4>
          <p class="text-danger">{{errorMessage}}</p>
        </div>

        <!--        <button class="btn btn-sky">
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
                </button>-->
      </div>
      <div class="grid grid-cols-6 gap-20">
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <label class="label" for="ClientName">{{translatedObject.clientNameLabel}} *</label>
          <input
              type="text"
              id="ClientName"
              :placeholder="translatedObject.enterClientName"
              class="input"
              v-model="form.client_name"
          />
          <small
              v-if="errors && errors.client_name"
              class="text-danger"
          >{{ errors.client_name[0] }}</small>
        </div>
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <label class="label" for="ClientNumber">{{translatedObject.clientNumberLabel}}</label>
          <input
              type="text"
              id="ClientNumber"
              :placeholder="translatedObject.enterClientNumber"
              class="input"
              v-model="form.client_number"
          />
          <small
              v-if="errors && errors.client_number"
              class="text-danger"
          >{{ errors.client_number[0] }}</small>
        </div>
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <label class="label" for="Address">{{translatedObject.address}} *</label>
          <input
              type="text"
              id="Address"
              :placeholder="translatedObject.addressLabel"
              class="input"
              v-model="form.address"
          />
          <small
              v-if="errors && errors.address"
              class="text-danger"
          >{{ errors.address[0] }}</small>
        </div>
        <div class="col-span-6 md:col-span-3 lg:col-span-1">
          <label class="label" for="PostcodeCity">{{translatedObject.postcode}} *</label>
          <input
              type="text"
              id="PostcodeCity"
              :placeholder="translatedObject.enterPostcodeCity"
              class="input"
              v-model="form.postcode"
          />
          <small
              v-if="errors && errors.postcode"
              class="text-danger"
          >{{ errors.postcode[0] }}</small>
        </div>
        <div class="col-span-6 md:col-span-3 lg:col-span-1">
          <label class="label" for="City">{{translatedObject.cityLabel}} *</label>
          <input
              type="text"
              id="City"
              :placeholder="translatedObject.enterCity"
              class="input"
              v-model="form.city_name"
          />
          <small
              v-if="errors && errors.city_name"
              class="text-danger"
          >{{ errors.city_name[0] }}</small>
        </div>
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <label class="label" for="KeyNumber">{{translatedObject.keyNumberLabel}}</label>
          <input
              type="text"
              id="KeyNumber"
              :placeholder="translatedObject.enterKeyNumber"
              class="input"
              v-model="form.key_number"
          />
          <small
              v-if="errors && errors.key_number"
              class="text-danger"
          >{{ errors.key_number[0] }}</small>
        </div>
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <label class="label" for="StartDate">{{translatedObject.startDateLabel}} *</label>
          <input
              type="date"
              id="StartDate"
              :min="minDate"
              class="input"
              v-model="form.start_date"
          />
          <small
              v-if="errors && errors.start_date"
              class="text-danger"
          >{{ errors.start_date[0] }}</small>
        </div>
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <label class="label" for="PhoneNumber">{{translatedObject.phoneNumberLabel}} *</label>
          <input
              type="text"
              id="PhoneNumber"
              :placeholder="translatedObject.enterPhoneNumber"
              class="input"
              v-model="form.phone_number"
          />
          <small
              v-if="errors && errors.phone_number"
              class="text-danger"
          >{{ errors.phone_number[0] }}</small>
        </div>
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <label class="label" for="GoogleMapURL">{{translatedObject.googleUrlLabel}}</label>
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
        <div class="col-span-6 md:col-span-3 lg:col-span-2">
          <label class="label" for="status">{{translatedObject.objectStatus}}</label>
          <select v-model="form.status" class="input">
            <option :value="1">Activate</option>
            <option :value="0">Deactivate</option>
          </select>
        </div>

        <div class="col-span-6 md:col-span-3 lg:col-span-2 2xl:col-span-1">
          <label class="label" for="ImplementationTime">{{translatedObject.impTimeLabel}}</label>
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
              <!--                  <span>:</span>
                                <input v-model.number="seconds" type="number" class="time-input" />-->
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
        <div class="col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-1">
          <label class="label" for="PhoneNumber">{{ translatedObject.fromTimeLabel }} </label>
          <div
              class="bg-body rounded-full p-1 flex items-center justify-center h-12"
          >
            <!--                <span class="text-xs">From &nbsp;</span>-->
            <input v-model.number="fromHours"  type="number" class="time-input" />
            <span>:</span>
            <input v-model.number="fromMinutes" type="number" class="time-input" />
          </div>
        </div>
        <div class="col-span-6 md:col-span-3 lg:col-span-2 xl:col-span-1">
          <label class="label" for="PhoneNumber">{{ translatedObject.atTimeLabel }} </label>
          <div
              class="bg-body rounded-full p-1 flex items-center justify-center h-12"
          >
            <!--                <span class="text-xs">From &nbsp;</span>-->
            <input v-model.number="atHours"  type="number" class="time-input" />
            <span>:</span>
            <input v-model.number="atMinutes" type="number" class="time-input" />
          </div>
        </div>

        <div class="col-span-6 lg:col-span-3">
          <label class="label">{{translatedObject.rotationLabel}}
            <small
                v-if="errors && errors.rotation_type"
                class="text-danger text-sm"
            >{{ errors.rotation_type[0] }}</small>
          </label>
          <div class="flex gap-20">
            <div class="relative">
              <input
                  class="rotation-input peer"
                  type="radio"
                  name="Rotation"
                  id="rotation"
                  value="1"
                  v-model="form.rotation_type"
              />
              <label for="rotation" class="rotation-check">
                <span class="text-xs">{{translatedObject.weekRotation}}</span>
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
                  value="2"
                  v-model="form.rotation_type"
              />
              <label for="rotation-weekly" class="rotation-check">
                <span class="text-xs">{{translatedObject['2WeekRotation']}}</span>
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
                  value="3"
                  v-model="form.rotation_type"
              />
              <label for="rotation-monthly" class="rotation-check">
                <span class="text-xs">{{translatedObject.monthlyRotation}}</span>
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
        <div class="col-span-4 xl:col-span-2">
          <label class="label">{{translatedObject.daysLabel}}</label>
          <div class="flex justify-between items-center">
            <!--            <div>
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
                        </div>-->
            <MultiCheckbox v-model:value="form.days" :options="translatedLang.value==='en'?daysOptions:daysOptionsDe" />
          </div>
        </div>
        <div class="col-span-4"></div>
        <div class="col-span-3 flex flex-col">
          <label class="label">{{translatedObject.uploadPdfLabel}}
            <small
                v-if="errors && errors.pdf"
                class="text-danger text-sm"
            >{{ errors.pdf[0] }}</small>
          </label>
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
            <span class="block text-xs text-black">{{translatedObject.enterDocument}}</span>
          </label>
          <p v-for="pdf in pdfs" class="text-blue-700 font-bold" :key="pdf.name">
            {{pdf.name}}
          </p>
        </div>
        <div class="col-span-3">
          <label class="label">{{translatedObject.taskListLabel}}</label>
          <div class="rounded-lg p-5 bg-body">
            <div class="relative mb-5">
              <input
                  type="text"
                  :placeholder="translatedObject.searchBar"
                  v-model="searchPdf"
                  @input="fetchObject"
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
                v-for="pdf in form.objectDocuments"
                :key="pdf.id"
                class="relative mb-2.5 rounded-full flex justify-between items-center bg-white p-1 pl-4"
            >
              <span class="text-xs">{{pdf.name}}</span>
              <div class="flex">
                <a :href="pdf.pdf" download>
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
                </a>
                <button
                    class="w-[30px] h-[30px] bg-body rounded-full flex-center"
                    @click="$event => toggleConfDeletePdf(true)"
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
                <ConfirmationModal
                    :isOpenModal="isConfDeletePdfOpen"
                    title="Do you really want to delete this pdf?"
                    text="Please enter “Delete”"
                    :closeModal="$event => toggleConfDeletePdf(false)"
                    btnText="Delete Pdf"
                    :SubmitModal="$event => {deletePdf(pdf.id);}"
                />
              </div>
            </div>
            <!--            <div
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
                        </div>-->
          </div>
        </div>
        <div class="col-span-3">
          <label class="label" for="PersonName">{{translatedObject.personNameLabel}}</label>
          <input
              type="text"
              id="PersonName"
              :placeholder="translatedObject.enterPersonName"
              v-model="form.contact_person_name"
              class="input"
          />
          <small
              v-if="errors && errors.contact_person_name"
              class="text-danger"
          >{{ errors.contact_person_name[0] }}</small>
        </div>
        <div class="col-span-3">
          <label class="label" for="PersonPhoneNumber">{{translatedObject.phoneNumberLabel}}</label>
          <input
              type="text"
              id="PersonPhoneNumber"
              :placeholder="translatedObject.enterPhoneNumber"
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
      <h4 class="text-xl font-bold mb-5">{{translatedObject.EmployeeInfoTitle}}</h4>
      <div class="">
        <label class="label" for="EmployeeName">{{translatedObject.EmployeeNameLabel}} *</label>
        <VueMultiselect
            v-model="form.employee_id"
            :options="employees"
            :searchable="false"
            :close-on-select="false"
            :show-labels="false"
            :multiple="true"
            :max="2"
            label="first_name"
            track-by="first_name"
            :placeholder="translatedObject.enterEmployeeName"
            @select="event => checkObjects(event)"
        >
        </VueMultiselect>
        <small
            v-if="errors && errors.employee_id"
            class="text-danger text-sm"
        >{{ errors.employee_id[0] }}</small>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-30">
      <!--              All Task                  -->
      <div>
        <UpdateCustomerTask v-if="isEditing" :objectID="objectID"/>
        <TaskComponent v-else/>
      </div>

      <ObjectHistory  v-if="isEditing"  :object-history="form.objectHistory" :objectID="objectID"/>
    </div>
    <div class="mt-5 flex justify-end">
      <button type="button" class="btn btn-light-sky mr-5" @click="$router.push('/customers')">{{translatedObject.cancelBtn}}</button>
      <button v-if="!isView" type="button" class="btn btn-sky" @click="confirmSave" :disabled="loading">
        <SpinnerComponent v-if="loading"/>
        {{isEditing?translatedObject.updateBtn:translatedObject.saveBtn}}
      </button>
    </div>
  </div>
  <ConfirmationModal
      :isOpenModal="isConfOpen"
      :title="translatedObject.objectWithoutEmpPopupTitle"
      :text="translatedObject.objectWithoutEmpPopupText"
      :closeModal="$event => toggleConf(false)"
      :btnText="translatedObject.saveWithoutEmpBtn"
      :closeBtnText="translatedObject.cancelBtn"
      :SubmitModal="$event => {isEditing ? update() :store()}"
  />
  <ConfirmationModal
      :isOpenModal="isConfSuccessOpen"
      :title="translatedObject.updateSuccessTitle"
      :closeModal="$event => toggleConfSuccess(false)"
      :btnText="translatedObject.backObjBtn"
      :closeBtnText="translatedObject.cancelBtn"
      :SubmitModal="$event => {toggleConfSuccess(false); closeModal()}"
  />
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
              <button @click="$event => selectNo(false)" class="w-full h-7 p-2 bg-body rounded-md flex items-center justify-end">
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7.42079 6.08931L11.7176 1.73259C12.1089 1.33579 12.1089 0.694406 11.7176 0.297603C11.3262 -0.0992008 10.6937 -0.0992008 10.3023 0.297603L6.00555 4.65432L1.70876 0.297603C1.31741 -0.0992008 0.684854 -0.0992008 0.293509 0.297603C-0.0978363 0.694406 -0.0978363 1.33579 0.293509 1.73259L4.5903 6.08931L0.293509 10.446C-0.0978363 10.8428 -0.0978363 11.4842 0.293509 11.881C0.488681 12.0789 0.744907 12.1784 1.00113 12.1784C1.25736 12.1784 1.51358 12.0789 1.70876 11.881L6.00555 7.52429L10.3023 11.881C10.4975 12.0789 10.7537 12.1784 11.01 12.1784C11.2662 12.1784 11.5224 12.0789 11.7176 11.881C12.1089 11.4842 12.1089 10.8428 11.7176 10.446L7.42079 6.08931Z"
                      fill="#18203A"
                  />
                </svg>
              </button>
              <div class="flex items-center">
                <div class="w-full text-center p-6">
                  <h3 class="w-full text-xl font-bold text-black mb-9">{{translatedObject.alertTitle}}</h3>
                  <img src="../../assets/images/cover/alert.png" class="block mx-auto mix-blend-multiply" />
                  <p class="text-sm text-black my-5">
                    {{translatedObject.alertText}}
                    <!--                    Are you sure you want to assign this <br/> Employee to this customer?-->
                  </p>
                  <div class="mt-5 flex justify-center">
                    <button type="button" class="btn btn-white mr-5" @click="$event => selectNo(false)">{{translatedObject.noBtn}}</button>
                    <button type="button" class="btn btn-sky text-white" @click="$event => toggleAlertModal(false)">{{translatedObject.yesBtn}}</button>
                  </div>
                </div>
                <div class="w-full max-w-sm bg-white p-6">
                  <div class="flex items-center justify-between mb-5 ">
                    <DialogTitle as="h3" class="text-xl font-bold text-black">Employee Customers</DialogTitle>
                    <!--                    <button @click="$event => selectNo(false)" class="w-7 h-7 bg-body rounded-md flex items-center justify-center">
                                          <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                              fill-rule="evenodd"
                                              clip-rule="evenodd"
                                              d="M7.42079 6.08931L11.7176 1.73259C12.1089 1.33579 12.1089 0.694406 11.7176 0.297603C11.3262 -0.0992008 10.6937 -0.0992008 10.3023 0.297603L6.00555 4.65432L1.70876 0.297603C1.31741 -0.0992008 0.684854 -0.0992008 0.293509 0.297603C-0.0978363 0.694406 -0.0978363 1.33579 0.293509 1.73259L4.5903 6.08931L0.293509 10.446C-0.0978363 10.8428 -0.0978363 11.4842 0.293509 11.881C0.488681 12.0789 0.744907 12.1784 1.00113 12.1784C1.25736 12.1784 1.51358 12.0789 1.70876 11.881L6.00555 7.52429L10.3023 11.881C10.4975 12.0789 10.7537 12.1784 11.01 12.1784C11.2662 12.1784 11.5224 12.0789 11.7176 11.881C12.1089 11.4842 12.1089 10.8428 11.7176 10.446L7.42079 6.08931Z"
                                              fill="#18203A"
                                            />
                                          </svg>
                                        </button>-->
                  </div>
                  <table class="w-full text-xs font-semibold text-left">
                    <thead class="bg-body">
                    <tr class="text-sm font-bold">
                      <td class="p-4 rounded-l-xl">{{ translatedObject.customersLabel }}</td>
                      <td class="p-4 rounded-r-xl">{{translatedObject.objectProject}}</td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr
                        v-for="(object,index) in empObjects"
                        :key="object.id"
                        class="border-b border-body"
                    >
                      <td class="text-xs p-4 font-bold">
                        {{ index+1 }}
                      </td>
                      <td class="text-xs font-normal p-4">
                        <div class="">
                            <span class="block text-black font-bold">{{
                                object.client_name
                              }}</span>
                          <span class="block text-[#8F9BB3] text-[10px]"
                          >{{ object.pending_task }} Open,
                              {{ object.complete_task }} Completed</span
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
import {ref} from "vue";
import SideBarComponent from "../../components/SideBar.vue";
import HeaderComponent from "../../components/Header.vue";
import ConfirmationModal from "../../components/ConfirmationModal.vue";
import SpinnerComponent from "../../components/Spinner.vue";
import MultiCheckbox from "@/components/MultiCheckbox";
import TaskComponent from "@/views/Object/Task";
import UpdateCustomerTask from "@/views/Object/UpdateCustomerTask.vue";
import ObjectHistory from "@/views/Object/ObjectHistory";
import VueMultiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.css"
import {Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot} from "@headlessui/vue";
import axios from "axios";
import _ from "lodash";

export default {
  name: "NewObject",

  components: {
    SideBarComponent,
    HeaderComponent,
    ConfirmationModal,
    SpinnerComponent,
    MultiCheckbox,
    VueMultiselect,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    TaskComponent,
    UpdateCustomerTask,
    ObjectHistory,
  },
  data() {
    return {
      daysOptions: [
        { name: "Mon", id: 'mon' },
        { name: "Tue", id: 'tue' },
        { name: "Wed", id: 'wed' },
        { name: "Thus", id: 'thus' },
        { name: "Fri", id: 'fri' },
        { name: "Sat", id: 'sat' },
        { name: "Sun", id: 'sun' },
      ],
      daysOptionsDe:[
        { name: "Mon", id: 'mon' },
        { name: "Die", id: 'tue' },
        { name: "Mit", id: 'wed' },
        { name: "Don", id: 'thus' },
        { name: "Fre", id: 'fri' },
        { name: "Sam", id: 'sat' },
        { name: "Son", id: 'sun' },
      ],
      objectID: this.$route.params.id,
      form: {
        status:1,
        employee_id: null,
        client_name: '',
        client_number: '',
        address: '',
        postcode: '',
        city_name: '',
        key_number: '',
        start_date: '',
        phone_number: '',
        google_map_url: '',
        implementation_time: '',
        from_time: '',
        at_time: '',
        rotation_type: '1',
        days:[],
        contact_person_name: '',
        contact_person_phone_number: '',
      },
      task_list_ids: [],
      searchPdf: '',
      pdfs: [],
      hours:0,
      minutes:0,
      seconds:0,
      fromHours:0,
      fromMinutes:0,
      atHours:0,
      atMinutes:0,
      cities: [],
      errors: {},
      errorMessage:'',
      implementationTime: 0,
      employees: [],
      empObjects: [],
      selectedEmpId:null,
      loading: false,
      isAlertModalOpen: false,
      userObjects: 0
    };
  },
  computed:{
    isEditing() {
      return !!this.objectID
    },
    isView(){
      return this.$route.params.type==='view'
    },
    minDate() {
      let minDate = new Date();
      minDate = minDate.toISOString();
      return minDate.split("T")[0]
    },
  },
  watch: {
    hours(newValue) {
      this.hours = this.padNumber(this.validateHours(newValue));
    },
    minutes(newValue) {
      this.minutes = this.padNumber(this.validateTime(newValue));
    },
    /*seconds(newValue) {
      this.seconds = this.padNumber(this.validateTime(newValue));
    },*/
    fromHours(newValue) {
      this.fromHours = this.padNumber(this.validateHours(newValue));
    },
    fromMinutes(newValue) {
      this.fromMinutes = this.padNumber(this.validateTime(newValue));
    },
    atHours(newValue) {
      this.atHours = this.padNumber(this.validateHours(newValue));
    },
    atMinutes(newValue) {
      this.atMinutes = this.padNumber(this.validateTime(newValue));
    }
  },
  mounted() {
    this.emitter.on("selected-task", (selectedTask) => {
      console.log('selectedTask from parent', selectedTask.map(task => task.id))
      this.task_list_ids = selectedTask.map(task => task.id)
    });
    this.hours = this.padNumber(this.hours);
    this.minutes = this.padNumber(this.minutes);
    // this.seconds = this.padNumber(this.seconds);
    this.fromHours = this.padNumber(this.fromHours);
    this.fromMinutes = this.padNumber(this.fromMinutes);
    this.atHours = this.padNumber(this.atHours);
    this.atMinutes = this.padNumber(this.atMinutes);
    this.fetchEmployee()
    if(this.isEditing){
      this.fetchObject()
    }
  },
  methods: {
    async checkObjects(e){
      this.selectedEmpId = e.id
      await this.fetchEmpObjects()
      if(this.userObjects>10){
        this.toggleAlertModal(true)
      }
      else {
        this.selectedEmpId=null
      }
    },
    toggleAlertModal(s) {
      this.isAlertModalOpen= s;
    },
    selectNo(s){
      this.form.employee_id =this.form.employee_id.filter(e => e.id !== this.selectedEmpId)
      this.toggleAlertModal(s)
    },
    changePDF(){
      this.pdfs=this.$refs.pdfFile.files
    },
    increment() {
      this.seconds++;

      // if (this.seconds >= 60) {
      //   this.seconds = 0;
      this.minutes++;

      if (this.minutes >= 60) {
        this.minutes = 0;
        this.hours++;

        if (this.hours >= 24) {
          this.hours = 0;
        }
      }
      // }
    },
    decrement() {
      // this.seconds--;
      //
      // if (this.seconds < 0) {
      //   this.seconds = 59;
      this.minutes--;

      if (this.minutes < 0) {
        this.minutes = 59;
        this.hours--;

        if (this.hours < 0) {
          this.hours = 0;
        }
      }
      // }
    },
    refreshForm(){
      this.form = {}
      this.errors = {}
      this.errorMessage = ''
      this.hours = 0
      this.minutes = 0
      this.seconds = 0
      this.fromHours = 0
      this.fromMinutes = 0
      this.atHours = 0
      this.atMinutes = 0
    },
    fetchEmployee(){
      // eslint-disable-next-line no-undef
      axios.get('employee')
          .then(response => {
            this.employees = response.data.object
          })
    },
    fetchObject(){
      axios.get(`object/${this.objectID}`,{
        params:{
          search:this.searchPdf
        }
      })
          .then(response=>{
            this.form = _.merge(this.form,response.data.data)
            this.form.status = response.data.data.status
            this.form.days = response.data.data.days.split(',')
            this.form.employee_id = response.data.data.employeeObjects
            this.form.objectDocuments = response.data.data.objectDocuments
            this.form.objectHistory = response.data.data.objectHistory
            let implementation_time = response.data.data.implementation_time.split(':')
            this.hours = implementation_time[0]
            this.minutes = implementation_time[1]
            let from_time = response.data.data.from_time?.split(':')
            this.fromHours = from_time[0]
            this.fromMinutes = from_time[1]
            let at_time = response.data.data.at_time?.split(':')
            this.atHours = at_time?.[0] ?? 0
            this.atMinutes = at_time?.[1] ?? 0
          })
          .catch(()=>{})
    },
    async fetchEmpObjects(){
      await axios.get(`object/user/${this.selectedEmpId}`)
          .then(res =>{
            this.empObjects = res.data.object
            this.userObjects = res.data.total_user_object
            console.log('userObjects',this.userObjects)
          })
    },
    confirmSave(){
      this.loading = true
      if(!this.form.employee_id) {
        this.toggleConf(true)
      } else {
        if(this.isEditing){
          this.update()
        } else {
          this.store()
        }
      }
    },
    store(){
      this.toggleConf(false)
      this.form.implementation_time = `${this.hours}:${this.minutes}`
      this.form.from_time = `${this.fromHours}:${this.fromMinutes}`
      this.form.at_time = `${this.atHours}:${this.atMinutes}`
      const formData = new FormData()
      formData.append('user_id',this.auth_user_id)
      formData.append('status',this.form.status)
      formData.append('client_name',this.form.client_name)
      formData.append('client_number',this.form.client_number)
      formData.append('address',this.form.address)
      formData.append('postcode',this.form.postcode)
      formData.append('city_name',this.form.city_name)
      formData.append('key_number',this.form.key_number)
      formData.append('start_date',this.form.start_date)
      formData.append('phone_number',this.form.phone_number)
      formData.append('google_map_url',this.form.google_map_url)
      formData.append('implementation_time',this.form.implementation_time)
      formData.append('from_time',this.form.from_time)
      formData.append('at_time',this.form.at_time)
      formData.append('rotation_type',this.form.rotation_type)
      formData.append('contact_person_name',this.form.contact_person_name)
      formData.append('contact_person_phone_number',this.form.contact_person_phone_number)
      if (this.task_list_ids.length > 0) {
        for (let i = 0; i < this.task_list_ids.length; i++) {
          formData.append('task_list_ids[]', this.task_list_ids[i])
        }
      }
      if(this.form.employee_id){
        for(let i=0; i<this.form.employee_id.length; i++){
          formData.append(`employee_id[${i}]`,this.form.employee_id[i].id)
        }
      }
      if(this.pdfs.length>0){
        for(let i=0; i<this.pdfs.length; i++){
          formData.append(`pdf[${i}]`,this.pdfs[i])
        }
      }
      if(this.form.days.length>0){
        for(let i=0; i<this.form.days.length; i++){
          formData.append(`days[${i}]`,this.form.days[i])
        }
      }

      axios.post('object',formData,{
        headers:{
          'Accept-Language': this.translatedLang.value
        }
      })
          .then(()=>{
            this.toggleConfSuccess(true)
            this.loading = false
          })
          .catch(error=>{
            this.errors = error.response.data.errors
            this.loading = false
          })
    },
    update(){
      this.toggleConf(false)
      this.form.implementation_time = `${this.hours}:${this.minutes}`
      this.form.from_time = `${this.fromHours}:${this.fromMinutes}`
      this.form.at_time = `${this.atHours}:${this.atMinutes}`
      const formData = new FormData()
      formData.append('id',this.objectID)
      formData.append('status',this.form.status)
      formData.append('user_id',this.auth_user_id)
      formData.append('client_name',this.form.client_name)
      formData.append('client_number',this.form.client_number ?? "")
      formData.append('address',this.form.address)
      formData.append('postcode',this.form.postcode)
      formData.append('city_name',this.form.city_name)
      formData.append('key_number',this.form.key_number ?? "")
      formData.append('start_date',this.form.start_date)
      formData.append('phone_number',this.form.phone_number)
      formData.append('google_map_url',this.form.google_map_url ?? "")
      formData.append('implementation_time',this.form.implementation_time)
      formData.append('from_time',this.form.from_time)
      formData.append('at_time',this.form.at_time)
      formData.append('rotation_type',this.form.rotation_type)
      formData.append('contact_person_name',this.form.contact_person_name ?? "")
      formData.append('contact_person_phone_number',this.form.contact_person_phone_number ?? "")
      if(this.form.employee_id){
        for(let i=0; i<this.form.employee_id.length; i++){
          formData.append(`employee_id[${i}]`,this.form.employee_id[i].id)
        }
      }
      if(this.pdfs.length>0){
        for(let i=0; i<this.pdfs.length; i++){
          formData.append(`pdf[${i}]`,this.pdfs[i])
        }
      }
      if(this.form.days.length>0){
        for(let i=0; i<this.form.days.length; i++){
          formData.append(`days[${i}]`,this.form.days[i])
        }
      }
      formData.append('_method','put')
      axios.post(`object/${this.objectID}`,formData, {
        headers:{
          'Accept-Language': this.translatedLang.value
        }
      })
          .then(()=>{
            this.toggleConfSuccess(true)
            this.loading = false
          })
          .catch(error=>{
            this.errorMessage=error.response.data.message
            this.$nextTick(() => {
              this.$refs.scrollToTop.scrollTop = 0;
            });
            this.errors = error.response.data.errors
            this.loading = false
          })
    },
    deletePdf(id){
      axios.delete(`object-documents/${id}`,{
        headers:{
          'Accept-Language': this.translatedLang.value
        }
      })
          .then(()=>{
            this.fetchObject()
            this.toggleConfDeletePdf(false)
          })
    },
    closeModal() {
      this.$router.push('/customers')
      this.refreshForm()
    },
  },
  setup() {
    let isConfOpen = ref(false);
    let isConfSuccessOpen = ref(false);
    let isConfDeletePdfOpen = ref(false);

    let toggleConf = (s) => {
      isConfOpen.value = s;
    }
    let toggleConfSuccess = (s) => {
      isConfSuccessOpen.value = s;
    }
    let toggleConfDeletePdf = (s) => {
      isConfDeletePdfOpen.value = s;
    }
    return {
      isConfOpen, toggleConf,
      isConfSuccessOpen, toggleConfSuccess,
      isConfDeletePdfOpen, toggleConfDeletePdf,
      // isAlertModalOpen, toggleAlertModal
    }
  }
};
</script>
<style lang="scss">
.time-input::-webkit-outer-spin-button,
.time-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
.time-input[type="number"] {
  -moz-appearance: textfield;
}
.multiselect__option--highlight {
  background: #74bdcb;
}
.multiselect__option--selected.multiselect__option--highlight {
  background: #0971b8;
}

.multiselect__option--selected.multiselect__option--highlight::after {
  background: #0971b8;
}

.multiselect__option--highlight::after {
  background: #74bdcb;
}

.multiselect__tag {
  background: #74bdcb;
}
</style>
    