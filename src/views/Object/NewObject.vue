<template>
  <div
    class="body-space"
  >
    <SideBarComponent />
    <HeaderComponent title="Add New Object" />
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
          <span>Edit</span>
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
          />
        </div>
        <div class="col-span-2">
          <label class="label" for="ClientNumber">Client Number *</label>
          <input
            type="text"
            id="ClientNumber"
            placeholder="Enter Client Number"
            class="input"
          />
        </div>
        <div class="col-span-2">
          <label class="label" for="Address">Address</label>
          <input
            type="text"
            id="Address"
            placeholder="Enter Address"
            class="input"
          />
        </div>
        <div class="col-span-2">
          <label class="label" for="PostcodeCity">Postcode City</label>
          <input
            type="text"
            id="PostcodeCity"
            placeholder="Enter Postcode City"
            class="input"
          />
        </div>
        <div class="col-span-2">
          <label class="label" for="KeyNumber">Key Number</label>
          <input
            type="text"
            id="KeyNumber"
            placeholder="Enter Key Number"
            class="input"
          />
        </div>
        <div class="col-span-2">
          <label class="label" for="StartDate">Start Date *</label>
          <input
            type="text"
            id="StartDate"
            placeholder="dd/mm/yyyy"
            class="input"
          />
        </div>
        <div class="col-span-3">
          <label class="label" for="PhoneNumber">Phone Number</label>
          <input
            type="text"
            id="PhoneNumber"
            placeholder="Enter Phone Number"
            class="input"
          />
        </div>
        <div class="col-span-3">
          <label class="label" for="GoogleMapURL">Google Map URL*</label>
          <input
            type="text"
            id="GoogleMapURL"
            placeholder="https://google.com"
            class="input"
          />
        </div>
        <div class="col-span-2">
          <div class="grid grid-cols-2 gap-6">
            <div class="">
              <label class="label" for="PhoneNumber">Phone Number</label>
              <div
                class="flex bg-body rounded-full p-1 items-center justify-between"
              >
                <button
                  class="w-10 h-10 flex items-center justify-center rounded-full bg-white"
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
                <span class="text-xs">00:00 hrs</span>
                <button
                  class="w-10 h-10 flex items-center justify-center rounded-full bg-white"
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
                <span class="text-xs">At / From 00:00</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-span-2">
          <label class="label">Rotation</label>
          <div class="flex gap-5">
            <input
              class="hidden peer"
              type="radio"
              name="Rotation"
              id="rotation"
              checked
            />
            <label
              for="rotation"
              class="relative flex items-center bg-body p-2.5 px-5 rounded-full cursor-pointer peer-checked:bg-sky peer-checked:text-white text-center h-12"
            >
              <span class="text-xs">Weekly</span>
            </label>
            <input
              class="hidden peer"
              type="radio"
              name="Rotation"
              id="rotation-weekly"
            />
            <label
              for="rotation-weekly"
              class="relative flex items-center bg-body p-2.5 px-5 rounded-full cursor-pointer peer-checked:bg-sky peer-checked:text-white text-center h-12"
            >
              <span class="text-xs">Every 2 weeks</span>
            </label>
            <input
              class="hidden peer"
              type="radio"
              name="Rotation"
              id="rotation-monthly"
            />
            <label
              for="rotation-monthly"
              class="relative flex items-center bg-body p-2.5 px-5 rounded-full cursor-pointer peer-checked:bg-sky peer-checked:text-white text-center h-12"
            >
              <span class="text-xs">Monthly</span>
            </label>
          </div>
        </div>
        <div class="col-span-3">
          <label class="label" for="PersonName">Person Name</label>
          <input
            type="text"
            id="PersonName"
            placeholder="Enter Person Name"
            class="input"
          />
        </div>
        <div class="col-span-3">
          <label class="label" for="PersonPhoneNumber">Phone Number</label>
          <input
            type="text"
            id="PersonPhoneNumber"
            placeholder="Enter Phone Number"
            class="input"
          />
        </div>
      </div>
    </div>
    <div class="p-5 bg-white rounded-[20px] mb-30 mt-30">
      <h4 class="text-xl font-bold mb-5">Employee Information</h4>
      <div class="">
        <label class="label" for="EmployeeName">Employee Name *</label>
        <input
          type="text"
          id="EmployeeName"
          placeholder="Enter Employee Name"
          class="input"
        />
      </div>
    </div>
    <div class="grid grid-cols-2 gap-30">
      <div class="p-5 bg-white rounded-[20px]">
        <div class="flex items-center justify-between mb-5">
          <h4 class="text-xl font-bold">All Tasks</h4>
          <button class="btn btn-light-sky">
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
            placeholder="Employee Id"
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
          class="flex items-center py-2 justify-between border-b-2 border-[body]"
        >
          <p class="text-sm">Task 1</p>
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
        </div>
        <div class="flex items-center py-2 justify-between">
          <p class="text-sm">Task 1</p>
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
        </div>
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
    </div>
  </div>
</template>
    
<script>
import SideBarComponent from "../../components/SideBar.vue";
import HeaderComponent from "../../components/Header.vue";
export default {
  name: "NewObject",

  components: {
    SideBarComponent,
    HeaderComponent,
  },
  data() {
    return {
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
    };
  },
};
</script>
    