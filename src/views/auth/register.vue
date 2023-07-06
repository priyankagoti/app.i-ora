<template>
  <div
      class="3xl:p-10 p-7 w-screen h-screen bg-body grid gap-10 grid-cols-2 overflow-auto"
  >
    <div class="3xl:p-16 2xl:p-7 p-8">
      <div class="2xl:max-w-[582px] max-w-[482px] mx-auto h-full">
        <div class="">
          <div class="flex items-center justify-between 3xl:mb-14 mb-10">
            <div class="">
              <h1 class="text-black font-bold 3xl:text-4xl text-3xl mb-1">
                {{translatedObject.getStartTitle}}
              </h1>
              <p class="text-[#8F9BB3] 3xl:text-xl 2xl:text-lg text-base">
                {{translatedObject.getStartedText}}
              </p>
              <small
                  v-if="errors && errors.profile"
                  class="text-danger"
              >{{ errors.profile[0] }}</small>
            </div>
            <div
                class="w-[100px] h-[100px] bg-white rounded-2xl flex-center relative"
            >
              <img v-if="form.profile" :src="form.profile" alt="" class="rounded-2xl">
              <svg
                  v-else
                  width="25"
                  height="32"
                  viewBox="0 0 25 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M19.5003 7.25C19.5003 11.2541 16.3663 14.5 12.5003 14.5C8.63431 14.5 5.50031 11.2541 5.50031 7.25C5.50031 3.24594 8.63431 0 12.5003 0C16.3663 0 19.5003 3.24594 19.5003 7.25ZM0 28.6309C0 21.6548 5.59646 15.9993 12.5 15.9993C19.4035 15.9993 24.9999 21.6548 25 28.6309C25 30.4912 23.5076 31.9993 21.6667 31.9993H3.33335C1.49241 31.9993 0 30.4912 0 28.6309Z"
                    fill="#74BDCB"
                />
              </svg>
              <input
                  type="file"
                  ref="profileImg"
                  @change="changeProfile"
                  name=""
                  id="UploadProfile"
                  class="hidden w-0 h-0"
              />
              <label class="bg-[#FFA384] cursor-pointer flex-center rounded-full absolute -bottom-[2px] -left-[2px] w-7 h-7" for="UploadProfile">
                <svg
                    width="11"
                    height="11"
                    viewBox="0 0 11 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.52548 4.92524H6.0731V1.47286C6.0731 1.15466 5.81532 0.897461 5.49771 0.897461C5.18009 0.897461 4.92231 1.15466 4.92231 1.47286V4.92524H1.46993C1.15231 4.92524 0.894531 5.18244 0.894531 5.50064C0.894531 5.81883 1.15231 6.07603 1.46993 6.07603H4.92231V9.52841C4.92231 9.84661 5.18009 10.1038 5.49771 10.1038C5.81532 10.1038 6.0731 9.84661 6.0731 9.52841V6.07603H9.52548C9.8431 6.07603 10.1009 5.81883 10.1009 5.50064C10.1009 5.18244 9.8431 4.92524 9.52548 4.92524Z"
                      fill="black"
                  />
                  <path
                      d="M9.52548 4.92524H6.0731V1.47286C6.0731 1.15466 5.81532 0.897461 5.49771 0.897461C5.18009 0.897461 4.92231 1.15466 4.92231 1.47286V4.92524H1.46993C1.15231 4.92524 0.894531 5.18244 0.894531 5.50064C0.894531 5.81883 1.15231 6.07603 1.46993 6.07603H4.92231V9.52841C4.92231 9.84661 5.18009 10.1038 5.49771 10.1038C5.81532 10.1038 6.0731 9.84661 6.0731 9.52841V6.07603H9.52548C9.8431 6.07603 10.1009 5.81883 10.1009 5.50064C10.1009 5.18244 9.8431 4.92524 9.52548 4.92524"
                      stroke="black"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div class="mb-3">
            <div class="relative ">
              <svg
                  class="auth-input-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="19"
                  viewBox="0 0 17 19"
                  fill="none"
              >
                <path
                    d="M9.02715 1.61888L1.62417 0.324668C1.28062 0.26267 0.930347 0.371167 0.667639 0.62691C0.404931 0.890402 0.25 1.27014 0.25 1.66538V17.9942C0.25 18.4204 0.553125 18.7692 0.923611 18.7692H3.11285V14.7005C3.11285 13.9488 3.63826 13.3443 4.29167 13.3443H5.97569C6.6291 13.3443 7.15451 13.9488 7.15451 14.7005V18.7692H10.0174V2.95959C10.0174 2.29311 9.59972 1.72738 9.02715 1.61888ZM3.95486 11.6006H2.94444C2.81045 11.6006 2.68195 11.5394 2.58721 11.4304C2.49246 11.3214 2.43924 11.1735 2.43924 11.0194C2.43924 10.8652 2.49246 10.7174 2.58721 10.6084C2.68195 10.4994 2.81045 10.4381 2.94444 10.4381H3.95486C4.08885 10.4381 4.21735 10.4994 4.3121 10.6084C4.40684 10.7174 4.46007 10.8652 4.46007 11.0194C4.46007 11.1735 4.40684 11.3214 4.3121 11.4304C4.21735 11.5394 4.08885 11.6006 3.95486 11.6006ZM3.95486 9.27567H2.94444C2.81045 9.27567 2.68195 9.21443 2.58721 9.10543C2.49246 8.99643 2.43924 8.84859 2.43924 8.69444C2.43924 8.54028 2.49246 8.39244 2.58721 8.28344C2.68195 8.17444 2.81045 8.1132 2.94444 8.1132H3.95486C4.08885 8.1132 4.21735 8.17444 4.3121 8.28344C4.40684 8.39244 4.46007 8.54028 4.46007 8.69444C4.46007 8.84859 4.40684 8.99643 4.3121 9.10543C4.21735 9.21443 4.08885 9.27567 3.95486 9.27567ZM3.95486 6.95073H2.94444C2.81045 6.95073 2.68195 6.8895 2.58721 6.78049C2.49246 6.67149 2.43924 6.52365 2.43924 6.3695C2.43924 6.21535 2.49246 6.06751 2.58721 5.95851C2.68195 5.8495 2.81045 5.78827 2.94444 5.78827H3.95486C4.08885 5.78827 4.21735 5.8495 4.3121 5.95851C4.40684 6.06751 4.46007 6.21535 4.46007 6.3695C4.46007 6.52365 4.40684 6.67149 4.3121 6.78049C4.21735 6.8895 4.08885 6.95073 3.95486 6.95073ZM3.95486 4.6258H2.94444C2.81045 4.6258 2.68195 4.56456 2.58721 4.45556C2.49246 4.34656 2.43924 4.19872 2.43924 4.04456C2.43924 3.89041 2.49246 3.74257 2.58721 3.63357C2.68195 3.52457 2.81045 3.46333 2.94444 3.46333H3.95486C4.08885 3.46333 4.21735 3.52457 4.3121 3.63357C4.40684 3.74257 4.46007 3.89041 4.46007 4.04456C4.46007 4.19872 4.40684 4.34656 4.3121 4.45556C4.21735 4.56456 4.08885 4.6258 3.95486 4.6258ZM7.32292 11.6006H6.3125C6.17851 11.6006 6.05001 11.5394 5.95526 11.4304C5.86052 11.3214 5.80729 11.1735 5.80729 11.0194C5.80729 10.8652 5.86052 10.7174 5.95526 10.6084C6.05001 10.4994 6.17851 10.4381 6.3125 10.4381H7.32292C7.45691 10.4381 7.58541 10.4994 7.68015 10.6084C7.7749 10.7174 7.82812 10.8652 7.82812 11.0194C7.82812 11.1735 7.7749 11.3214 7.68015 11.4304C7.58541 11.5394 7.45691 11.6006 7.32292 11.6006ZM7.32292 9.27567H6.3125C6.17851 9.27567 6.05001 9.21443 5.95526 9.10543C5.86052 8.99643 5.80729 8.84859 5.80729 8.69444C5.80729 8.54028 5.86052 8.39244 5.95526 8.28344C6.05001 8.17444 6.17851 8.1132 6.3125 8.1132H7.32292C7.45691 8.1132 7.58541 8.17444 7.68015 8.28344C7.7749 8.39244 7.82812 8.54028 7.82812 8.69444C7.82812 8.84859 7.7749 8.99643 7.68015 9.10543C7.58541 9.21443 7.45691 9.27567 7.32292 9.27567ZM7.32292 6.95073H6.3125C6.17851 6.95073 6.05001 6.8895 5.95526 6.78049C5.86052 6.67149 5.80729 6.52365 5.80729 6.3695C5.80729 6.21535 5.86052 6.06751 5.95526 5.95851C6.05001 5.8495 6.17851 5.78827 6.3125 5.78827H7.32292C7.45691 5.78827 7.58541 5.8495 7.68015 5.95851C7.7749 6.06751 7.82812 6.21535 7.82812 6.3695C7.82812 6.52365 7.7749 6.67149 7.68015 6.78049C7.58541 6.8895 7.45691 6.95073 7.32292 6.95073ZM7.32292 4.6258H6.3125C6.17851 4.6258 6.05001 4.56456 5.95526 4.45556C5.86052 4.34656 5.80729 4.19872 5.80729 4.04456C5.80729 3.89041 5.86052 3.74257 5.95526 3.63357C6.05001 3.52457 6.17851 3.46333 6.3125 3.46333H7.32292C7.45691 3.46333 7.58541 3.52457 7.68015 3.63357C7.7749 3.74257 7.82812 3.89041 7.82812 4.04456C7.82812 4.19872 7.7749 4.34656 7.68015 4.45556C7.58541 4.56456 7.45691 4.6258 7.32292 4.6258ZM15.4871 8.57199L10.691 7.4165V18.7692H15.2378C15.8879 18.7692 16.4167 18.1608 16.4167 17.4129V9.8972C16.4167 9.25707 16.0374 8.71226 15.4871 8.57199ZM13.8906 16.4442H12.8802C12.7462 16.4442 12.6177 16.383 12.523 16.274C12.4282 16.165 12.375 16.0171 12.375 15.863C12.375 15.7088 12.4282 15.561 12.523 15.452C12.6177 15.343 12.7462 15.2818 12.8802 15.2818H13.8906C14.0246 15.2818 14.1531 15.343 14.2479 15.452C14.3426 15.561 14.3958 15.7088 14.3958 15.863C14.3958 16.0171 14.3426 16.165 14.2479 16.274C14.1531 16.383 14.0246 16.4442 13.8906 16.4442ZM13.8906 14.1193H12.8802C12.7462 14.1193 12.6177 14.058 12.523 13.949C12.4282 13.84 12.375 13.6922 12.375 13.5381C12.375 13.3839 12.4282 13.2361 12.523 13.1271C12.6177 13.0181 12.7462 12.9568 12.8802 12.9568H13.8906C14.0246 12.9568 14.1531 13.0181 14.2479 13.1271C14.3426 13.2361 14.3958 13.3839 14.3958 13.5381C14.3958 13.6922 14.3426 13.84 14.2479 13.949C14.1531 14.058 14.0246 14.1193 13.8906 14.1193ZM13.8906 11.7943H12.8802C12.7462 11.7943 12.6177 11.7331 12.523 11.6241C12.4282 11.5151 12.375 11.3673 12.375 11.2131C12.375 11.059 12.4282 10.9111 12.523 10.8021C12.6177 10.6931 12.7462 10.6319 12.8802 10.6319H13.8906C14.0246 10.6319 14.1531 10.6931 14.2479 10.8021C14.3426 10.9111 14.3958 11.059 14.3958 11.2131C14.3958 11.3673 14.3426 11.5151 14.2479 11.6241C14.1531 11.7331 14.0246 11.7943 13.8906 11.7943Z"
                    fill="#74BDCB"
                />
              </svg>
              <input type="text" :placeholder="translatedObject.companyName" class="auth-input" v-model="form.company_name" />
            </div>
            <small
                v-if="errors && errors.company_name"
                class="text-danger"
            >{{ errors.company_name[0] }}</small>
          </div>
          <div class="mb-3">
            <div class="relative">
              <svg
                  class="auth-input-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
              >
                <path
                    d="M7.23649 10.6904C6.92989 10.6904 6.68045 10.9588 6.68045 11.2887V14.5169H5.59117V11.2887C5.59117 10.3121 6.32926 9.51765 7.23649 9.51765C7.42389 9.51755 7.60991 9.55209 7.78646 9.61976V5.79626C7.78646 5.03592 7.2119 4.41734 6.50569 4.41734C5.94675 4.41734 5.45657 4.80235 5.28603 5.3754L3.21183 12.3431L0.433594 14.5662L4.28985 20L7.78642 17.1605V11.2052C7.74852 10.9148 7.51668 10.6904 7.23649 10.6904ZM7.79252 0H8.8818V2.08487H7.79252V0ZM4.80039 1.96884L5.52694 1.09515L6.96961 2.48575L6.24307 3.35945L4.80039 1.96884ZM9.70272 2.47719L11.1454 1.08655L11.872 1.96024L10.4293 3.35089L9.70272 2.47719ZM13.4625 12.3431L11.3883 5.37543C11.2177 4.80235 10.7276 4.41734 10.1686 4.41734C9.46239 4.41734 8.88783 5.03592 8.88783 5.79626V9.6198C9.06438 9.55213 9.2504 9.5176 9.4378 9.51769C10.345 9.51769 11.0831 10.3122 11.0831 11.2887V14.5169H9.99381V11.2887C9.99381 10.9588 9.7444 10.6904 9.4378 10.6904C9.15753 10.6904 8.92566 10.9149 8.88783 11.2055V17.1605L12.3844 20L16.2407 14.5662L13.4625 12.3431Z"
                    fill="#74BDCB"
                />
              </svg>
              <!--            <input type="text" placeholder="Salutation" class="auth-input" v-model="form.salutation_id"/>-->
              <select v-model="form.salutation_id" class="auth-input">
                <option value="" selected>--Please choose an option--</option>
                <option v-for="salutation in salutations" :key="salutation.id" :value="salutation.id">{{salutation.name}}</option>
              </select>
            </div>
            <small
                v-if="errors && errors.salutation_id"
                class="text-danger"
            >{{ errors.salutation_id[0] }}</small>
          </div>
          <div class="mb-3">
            <div class="relative">
              <svg
                  class="auth-input-icon"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1876 4.53128C12.1876 7.03384 10.2288 9.06257 7.81253 9.06257C5.39627 9.06257 3.4375 7.03384 3.4375 4.53128C3.4375 2.02873 5.39627 0 7.81253 0C10.2288 0 12.1876 2.02873 12.1876 4.53128ZM0 17.8948C0 13.5347 3.49781 10 7.81254 10C12.1273 10 15.6251 13.5347 15.6251 17.8948C15.6251 19.0575 14.6924 20.0001 13.5418 20.0001H2.08336C0.932766 20.0001 0 19.0575 0 17.8948Z"
                    fill="#74BDCB"
                />
              </svg>
              <input type="text" :placeholder="translatedObject.firstNameLabel" class="auth-input" v-model="form.first_name" />
            </div>
            <small
                v-if="errors && errors.first_name"
                class="text-danger"
            >{{ errors.first_name[0] }}</small>
          </div>
          <div class="mb-3">
            <div class="relative">
              <svg
                  class="auth-input-icon"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1876 4.53128C12.1876 7.03384 10.2288 9.06257 7.81253 9.06257C5.39627 9.06257 3.4375 7.03384 3.4375 4.53128C3.4375 2.02873 5.39627 0 7.81253 0C10.2288 0 12.1876 2.02873 12.1876 4.53128ZM0 17.8948C0 13.5347 3.49781 10 7.81254 10C12.1273 10 15.6251 13.5347 15.6251 17.8948C15.6251 19.0575 14.6924 20.0001 13.5418 20.0001H2.08336C0.932766 20.0001 0 19.0575 0 17.8948Z"
                    fill="#74BDCB"
                />
              </svg>
              <input type="text" :placeholder="translatedObject.surnameLabel" class="auth-input" v-model="form.last_name"/>
            </div>
            <small
                v-if="errors && errors.last_name"
                class="text-danger"
            >{{ errors.last_name[0] }}</small>
          </div>
          <div class="mb-3">
            <div class="relative">
              <svg
                  class="auth-input-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="19"
                  viewBox="0 0 21 19"
                  fill="none"
              >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.20189 5.09237C0.8341 5.30456 0.530817 5.59961 0.320564 5.94978C0.110312 6.29995 -1.02291e-06 6.69373 0 7.09408V16.4086C0 17.0347 0.26942 17.6351 0.748991 18.0778C1.22856 18.5205 1.879 18.7692 2.55722 18.7692H17.9005C18.5787 18.7692 19.2292 18.5205 19.7087 18.0778C20.1883 17.6351 20.4577 17.0347 20.4577 16.4086V7.09408C20.4577 6.69373 20.3474 6.29995 20.1372 5.94978C19.9269 5.59961 19.6236 5.30456 19.2558 5.09237L11.5842 0.66642C11.1778 0.431944 10.7081 0.307617 10.2289 0.307617C9.74959 0.307617 9.27997 0.431944 8.87354 0.66642L1.20189 5.09237ZM4.54545 7.95213C4.40575 7.86611 4.24906 7.80633 4.08434 7.7762C3.91961 7.74608 3.75006 7.7462 3.58539 7.77656C3.42071 7.80692 3.26412 7.86692 3.12456 7.95314C2.98501 8.03936 2.86521 8.1501 2.77202 8.27906C2.67883 8.40801 2.61407 8.55265 2.58144 8.7047C2.5488 8.85676 2.54893 9.01326 2.58182 9.16527C2.64824 9.47227 2.84406 9.74234 3.1262 9.91607L9.51924 13.8499C9.72935 13.9793 9.97628 14.0483 10.2289 14.0483C10.4815 14.0483 10.7284 13.9793 10.9385 13.8499L17.3315 9.91607C17.4712 9.83005 17.5912 9.71947 17.6846 9.59065C17.778 9.46183 17.843 9.31728 17.8759 9.16527C17.9088 9.01326 17.9089 8.85676 17.8763 8.7047C17.8437 8.55265 17.7789 8.40801 17.6857 8.27906C17.5925 8.1501 17.4727 8.03936 17.3332 7.95314C17.1936 7.86692 17.037 7.80692 16.8723 7.77656C16.7077 7.7462 16.5381 7.74608 16.3734 7.7762C16.2087 7.80633 16.052 7.86611 15.9123 7.95213L10.2289 11.4492L4.54545 7.95213Z"
                    fill="#74BDCB"
                />
              </svg>
              <input
                  type="email"
                  :placeholder="translatedObject.emailAddressLabel"
                  class="auth-input"
                  v-model="form.email"
              />
            </div>
            <small
                v-if="errors && errors.email"
                class="text-danger"
            >{{ errors.email[0] }}</small>
          </div>
          <div class="mb-3">
            <div class="relative">
              <svg
                  class="auth-input-icon"
                  width="16"
                  height="20"
                  viewBox="0 0 16 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
              >
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M12.1876 4.53128C12.1876 7.03384 10.2288 9.06257 7.81253 9.06257C5.39627 9.06257 3.4375 7.03384 3.4375 4.53128C3.4375 2.02873 5.39627 0 7.81253 0C10.2288 0 12.1876 2.02873 12.1876 4.53128ZM0 17.8948C0 13.5347 3.49781 10 7.81254 10C12.1273 10 15.6251 13.5347 15.6251 17.8948C15.6251 19.0575 14.6924 20.0001 13.5418 20.0001H2.08336C0.932766 20.0001 0 19.0575 0 17.8948Z"
                    fill="#74BDCB"
                />
              </svg>
              <input type="text" :placeholder="translatedObject.usernameLabel" class="auth-input" v-model="form.username"/>
            </div>
            <small
                v-if="errors && errors.username"
                class="text-danger"
            >{{ errors.username[0] }}</small>
          </div>
          <div class="mb-3">
            <div class="relative">
              <svg
                  class="auth-input-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
              >
                <path
                    d="M17.9438 2.05616C15.2024 -0.685388 10.7417 -0.685388 8.00016 2.05616C6.97982 3.07647 6.30611 4.3642 6.05209 5.77974C5.82775 7.02853 5.94158 8.29848 6.37966 9.47707L0 15.8567V19.1713L7.96934 11.2021L8.79786 12.0306L0.828747 20H6.14365V18.3427H7.80091V16.6854H9.45832V14.6849L10.5229 13.6203C11.7015 14.0585 12.9714 14.1722 14.2201 13.948C15.6358 13.694 16.9233 13.0203 17.9438 11.9998C20.6854 9.25828 20.6854 4.79752 17.9438 2.05616H17.9438ZM15.8723 6.61365C15.1858 7.30013 14.0728 7.30013 13.3864 6.61365C12.6998 5.92712 12.6998 4.81416 13.3864 4.12768C14.0728 3.4412 15.1858 3.4412 15.8723 4.12768C16.5588 4.81416 16.5586 5.92712 15.8723 6.61361V6.61365Z"
                    fill="#74BDCB"
                />
              </svg>
              <input type="password" :placeholder="translatedObject.passwordLabel" class="auth-input" v-model="form.password"/>
            </div>
            <small
                v-if="errors && errors.password"
                class="text-danger"
            >{{ errors.password[0] }}</small>
          </div>
          <div class="mb-3">
            <div class="relative">
              <svg
                  class="auth-input-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
              >
                <path
                    d="M17.9438 2.05616C15.2024 -0.685388 10.7417 -0.685388 8.00016 2.05616C6.97982 3.07647 6.30611 4.3642 6.05209 5.77974C5.82775 7.02853 5.94158 8.29848 6.37966 9.47707L0 15.8567V19.1713L7.96934 11.2021L8.79786 12.0306L0.828747 20H6.14365V18.3427H7.80091V16.6854H9.45832V14.6849L10.5229 13.6203C11.7015 14.0585 12.9714 14.1722 14.2201 13.948C15.6358 13.694 16.9233 13.0203 17.9438 11.9998C20.6854 9.25828 20.6854 4.79752 17.9438 2.05616H17.9438ZM15.8723 6.61365C15.1858 7.30013 14.0728 7.30013 13.3864 6.61365C12.6998 5.92712 12.6998 4.81416 13.3864 4.12768C14.0728 3.4412 15.1858 3.4412 15.8723 4.12768C16.5588 4.81416 16.5586 5.92712 15.8723 6.61361V6.61365Z"
                    fill="#74BDCB"
                />
              </svg>
              <input
                  type="password"
                  :placeholder="translatedObject.confirmPasswordLabel"
                  class="auth-input"
                  v-model="form.password_confirmation"
              />
            </div>
            <small
                v-if="errors && errors.password_confirmation"
                class="text-danger"
            >{{ errors.password_confirmation[0] }}</small>
          </div>

        </div>
        <div class="flex items-center mb-2.5">
          <input type="checkbox" id="conditions" class="w-7 h-7 mr-2.5 flex-shrink-0" v-model="terms_conditions">
          <label class="text-xs" for="conditions">{{translatedObject.termsAndConditions}}</label>
        </div>
        <div class="flex items-center mb-2.5">
          <input type="checkbox" id="privacyPolicy" class="w-7 h-7 mr-2.5 flex-shrink-0" v-model="privacyPolicy">
          <label class="text-xs" for="privacyPolicy">
            {{translatedObject.privacyAndPolicy}}
<!--            By using this from you agree with the storage and handling of your data by this website in accordance with our-->
<!--            <span class="text-[#ffa384]">Privacy Policy.</span>.*-->
          </label>
        </div>
        <div class="mb-10">
          <small
              v-if="errMsg"
              class="text-danger"
          >{{ errMsg }}</small>
        </div>

        <button class="auth-btn mb-7" type="button" @click="register">{{translatedObject.signUpBtn}}</button>
        <p class="text-black 3xl:text-xl text-lg text-center">
         {{translatedObject.haveAccount}}
          <RouterLink to="/login" class="text-[#ffa384]">{{translatedObject.signInLink}}</RouterLink>
        </p>
      </div>
    </div>
    <AuthCover />
  </div>
</template>

<script>
import AuthCover from "../../components/AuthCover.vue";
// import axios from "@/plugins/axios";
export default {
  name: "AuthRegister",
  components: {
    AuthCover,
  },
  data(){
    return{
      form:{
        first_name:'',
        email: '',
        password: '',
        password_confirmation: '',
        last_name: '',
        username: '',
        company_name: '',
        salutation_id: '',
        profile: null,
      },

      errors: {},
      salutations: [],
      terms_conditions: false,
      privacyPolicy:false,
      errMsg: '',
    }
  },
  mounted() {
    this.fetchSalutation()
  },
  methods:{
    fetchSalutation(){
      // eslint-disable-next-line no-undef
      axios.get('salutation')
          .then(response => {
            this.salutations = response.data
          })
    },
    changeProfile() {
      const binaryData = []
      binaryData.push(this.$refs.profileImg.files.item(0))
      this.form.profile = URL.createObjectURL(new Blob(binaryData, { type: 'application/zip' }))
    },
    register(){
      if(this.terms_conditions && this.privacyPolicy) {
        const formData = new FormData()
        if (this.$refs.profileImg.files.item(0)) {
          formData.append('profile', this.$refs.profileImg.files.item(0))
        }
        formData.append('company_name',this.form.company_name )
        formData.append('first_name',this.form.first_name )
        formData.append('last_name',this.form.last_name )
        formData.append('salutation_id',this.form.salutation_id )
        formData.append('email',this.form.email )
        formData.append('username',this.form.username )
        formData.append('password',this.form.password )
        formData.append('password_confirmation',this.form.password_confirmation)
        // eslint-disable-next-line no-undef
        axios.post('auth/register',formData)
            .then(() => {
              // const user =
              // window.localStorage.setItem('auth.user', JSON.stringify(state))
              this.$router.push('/dashboard'||this.$route.path)
            })
            .catch(error => {
              this.errors = error.response.data.errors
              this.errMsg = ''
              // console.log(error.response.data.errors)
            })
      }
      else {
        this.errMsg = 'Read all privacy policy and terms and conditions.'
        // console.log('Read all privacy policy and terms and conditions.')
      }
    }
  }
};
</script>
