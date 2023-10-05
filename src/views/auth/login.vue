<template>
  <div
      class="3xl:p-10 p-7 w-screen h-screen bg-body grid gap-10 grid-cols-2 overflow-auto"
  >
    <div class="3xl:p-16 2xl:p-7 p-8">
      <div class="2xl:max-w-[582px] max-w-[482px] mx-auto h-full flex flex-col">
        <div class="flex h-full items-center 3xl:pb-24 pb-16">
          <div class="w-full">
            <h1 class="text-black font-bold text-4xl mb-1">
              {{translatedObject.commonWebTitle}}
            </h1>
            <p class="text-[#8F9BB3] mb-2 3xl:text-xl text-lg">
              {{translatedObject.commonWebText1}}
            </p>
            <p class="text-[#8F9BB3] mb-14 3xl:text-xl text-lg">
              {{translatedObject.commonWebText}}
<!--             Please Sign in here to your Account,<br />
              Have your landing pages online in minutes.-->
            </p>
            <div class="relative mb-20">
<!--              <select @change="$store.dispatch('auth/fetchJsonFile',$event.target.value)" class="lang-select">-->
<!--                <option value="en" :selected="translatedLang==='en'">-->
<!--                  English-->
<!--                </option>-->
<!--                <option value="de" :selected="translatedLang==='de'">German</option>-->
<!--              </select>-->
              <VueMultiselect
                  class="w-72"
                  v-model="translatedLang"
                  :placeholder="translatedObject.loginChooseLang"
                  :options="languageOption"
                  :searchable="false"
                  :close-on-select="true"
                  :show-labels="false"
                  label="name"
                  track-by="value"
                  @select="$store.dispatch('auth/fetchJsonFile',$event)"
              >
              </VueMultiselect>
            </div>
            <div class="mb-10">
              <div class="relative 3xl:mb-14 ">
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
                <input type="text" :placeholder="translatedObject.userNameUser" class="auth-input" v-model="form.username" />
              </div>
              <small
                  v-if="errors && errors.username"
                  class="text-danger"
              >{{ errors.username[0] }}</small>
            </div>
            <div class="mb-5">
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
                    :placeholder="translatedObject.passwordUser"
                    v-model="form.password"
                    class="auth-input"
                />
              </div>
              <small
                  v-if="errors && errors.password"
                  class="text-danger"
              >{{ errors.password[0] }}</small>
            </div>

            <p class="text-black 3xl:text-xl text-base mt-5 text-right font-semibold">
<!--              Forgot your password?-->
              {{translatedObject.forgotPasswordUser}}
            </p>
          </div>
        </div>
        <button class="auth-btn 3xl:mb-20 2xl:mb-10 mb-7" type="button" @click="submit">{{translatedObject.loginBtn}}</button>

        <div class="text-black 3xl:text-xl text-base mt-5 text-start">
          <p class="font-bold">{{translatedObject.loginNotMember}}</p>
          <p>{{translatedObject.loginDiscoverText}}</p>
        </div>
        <div class="text-black 3xl:text-xl text-base mt-5 text-start">
          <RouterLink to="/register">
            <p class="font-bold">{{translatedObject.loginRegisterText}} <span class="font-normal">{{translatedObject.loginEmbarkText}}</span> </p>
          </RouterLink>
        </div>
<!--        <p class="text-black 3xl:text-xl text-lg mt-5 text-center">-->
<!--          {{translatedObject["don'tHaveAccount"]}}-->
<!--          <RouterLink to="/register" class="text-[#ffa384]">{{translatedObject.signUpLink}}</RouterLink>-->
<!--        </p>-->
      </div>
    </div>
    <AuthCover />
  </div>
</template>

<script>
import AuthCover from "../../components/AuthCover.vue";
import { RouterLink } from "vue-router";
import { authMethods } from '@/store/helpers'
import VueMultiselect from 'vue-multiselect'
import "vue-multiselect/dist/vue-multiselect.css"

export default {
  name: "AuthLogin",
  props: {
    msg: String,
  },
  components: {
    AuthCover,
    RouterLink,
    VueMultiselect,
  },
  data() {
    return {
      form: {
        username: '',
        password: '',
      },
      language: 'en',
      status: '',
      errMsg: '',
      errors: {},
      languageOption: [
          {
            name:"English",
            value:"en"
          },
        {
          name:"German",
          value:"de"
        }
      ]
    }
  },
  computed: {

  },
  methods: {
    ...authMethods,
    submit(){
      this.logIn(this.form)
          .then(response => {
            if (response.status === 401) {
              this.errMsg = response.data.message
            }
            if (response.status === 422) {
              this.errors = response.data.errors
            }
            if (response.status === 200){
              // this.$router.go({ name: this.$route.query.redirectFrom || 'Dashboard' })
              this.$router.go('/dashboard'||this.$route.path)
            }
            // this.$router.push(this.$route.query.redirectFrom || { name: 'home' })
          })
    }
  }
};
</script>
