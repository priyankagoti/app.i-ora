<template>
  <div class="flex items-center justify-between mb-5">
    <h3 class="font-bold text-xl">{{ translatedObject.profileInfoLabel }}</h3>
    <button class="btn btn-sky" :disabled="loading" @click="editUser">
      <SpinnerComponent v-if="loading"/>
      <svg class="mr-2.5" width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.29728 1.94697L0.511591 6.73266C0.335245 6.90934 0.223795 7.14043 0.195336 7.38843L0.00465225 9.06272C-0.00777759 9.18046 0.00476819 9.29949 0.0414703 9.41206C0.0781724 9.52462 0.138205 9.62817 0.217649 9.71595C0.297092 9.80373 0.394158 9.87377 0.502509 9.92149C0.61086 9.96921 0.728058 9.99354 0.84645 9.99288H0.944117L2.61841 9.8022C2.86542 9.77362 3.09601 9.66405 3.27418 9.49059L8.05986 4.70025L5.29728 1.94697ZM9.67835 1.54235L8.46449 0.328488C8.36294 0.226539 8.24226 0.145645 8.10938 0.0904472C7.97649 0.0352498 7.83402 0.00683594 7.69012 0.00683594C7.54623 0.00683594 7.40375 0.0352498 7.27087 0.0904472C7.13799 0.145645 7.01731 0.226539 6.91576 0.328488L5.79027 1.45399L8.55285 4.21657L9.67835 3.09107C9.7803 2.98953 9.86119 2.86885 9.91639 2.73597C9.97159 2.60308 10 2.4606 10 2.31671C10 2.17282 9.97159 2.03034 9.91639 1.89746C9.86119 1.76457 9.7803 1.6439 9.67835 1.54235Z"
          fill="black"
        />
      </svg>
      <span>{{ translatedObject.editBtn }}</span>
    </button>
  </div>
  <div class="flex items-center mb-5">
    <div class="w-[150px] h-[150px] bg-body rounded-[20px] mr-8">
      <img v-if="profileUrl" :src="profileUrl" alt="" class="rounded-[20px] w-full h-full" />
      <img v-else src="../../assets/images/profiles/big-profile.png" alt="" class="rounded-[20px] w-full h-full" />
    </div>
    <div class="w-[200px]">
      <p class="text-base mb-5">{{ translatedObject.updateProfileText }}</p>

      <div class="flex">
        <div class="relative">
          <input type="file" id="fileInput" ref="profileImg" class="hidden" @change="onProfileChange" />
          <label for="fileInput" class="choose-file-label mr-2.5">
            {{ translatedObject.changeProfileBtn }}
          </label>
        </div>
<!--        <span class="sr-only">Change</span>
        <input type="file" class="choose-file-btn mr-2.5" />-->
<!--        <input type="file" class="btn btn-sky appearance-none mr-2.5">-->
<!--        <button class="btn btn-sky mr-2.5">Change</button>-->
        <button class="btn btn-light-sky" @click="removeProfile">{{ translatedObject.removeProfileBtn }}</button>
      </div>
<!--      <button class="btn btn-sky mr-2.5">Change</button>-->
    </div>
  </div>
  <div class="grid grid-cols-3 gap-20">
    <div class="">
      <label class="label" for="Salutation">{{ translatedObject.salutationLabel }}</label>
<!--      <input type="text" id="Salutation" placeholder="Salutation" class="input" />-->
      <select v-model="user.salutation_id" class="input">
        <option value="" selected>{{ translatedObject.salutationLabel }}</option>
        <option v-for="salutation in salutations" :key="salutation.id" :value="salutation.id">{{salutation.name}}</option>
      </select>
      <small
          v-if="errors && errors.salutation_id"
          class="text-danger"
      >{{ errors.salutation_id[0] }}</small>
    </div>
    <div class="">
      <label class="label" for="CompanyName">{{ translatedObject.companyNameLabel }}</label>
      <input type="text" v-model="user.company_name" id="CompanyName" :placeholder="translatedObject.enterCompanyName" class="input" />
      <small
          v-if="errors && errors.company_name"
          class="text-danger"
      >{{ errors.company_name[0] }}</small>
    </div>
    <div class=""></div>
    <div class="">
      <label class="label" for="FirstName">{{ translatedObject.firstNameLabel }}</label>
      <input type="text" v-model="user.first_name" id="FirstName" :placeholder="translatedObject.enterFirstName" class="input" />
      <small
          v-if="errors && errors.first_name"
          class="text-danger"
      >{{ errors.first_name[0] }}</small>
    </div>
    <div class="">
      <label class="label" for="Surname">{{ translatedObject.surnameLabel }}</label>
      <input type="text"  v-model="user.last_name" id="Surname" :placeholder="translatedObject.enterSurname" class="input" />
      <small
          v-if="errors && errors.last_name"
          class="text-danger"
      >{{ errors.last_name[0] }}</small>
    </div>
    <div class="">
      <label class="label" for="EmailAddress">{{ translatedObject.emailAddressLabel }}</label>
      <input type="email" v-model="user.email" id="EmailAddress" :placeholder="translatedObject.enterEmailAddress" class="input" />
      <small
          v-if="errors && errors.email"
          class="text-danger"
      >{{ errors.email[0] }}</small>
    </div>
    <div class="">
      <label class="label" for="ContactNumber">{{ translatedObject.contactLabel }}</label>
      <input type="text" v-model="user.contact_number" id="ContactNumber" :placeholder="translatedObject.enterContact" class="input" />
      <small
          v-if="errors && errors.contact_number"
          class="text-danger"
      >{{ errors.contact_number[0] }}</small>
    </div>
    <div class="">
      <label class="label" for="Password">{{ translatedObject.passwordLabel }}</label>
      <input type="password" v-model="user.password" id="Password" :placeholder="translatedObject.enterPassword" class="input" />
      <small
          v-if="errors && errors.password"
          class="text-danger"
      >{{ errors.password[0] }}</small>
    </div>
    <div class="">
      <label class="label" for="ConfirmPassword">{{ translatedObject.confirmPasswordLabel }}</label>
      <input type="password" v-model="user.password_confirmation" id="ConfirmPassword" :placeholder="translatedObject.enterConfirmPassword" class="input" />
      <small
          v-if="errors && errors.password_confirmation"
          class="text-danger"
      >{{ errors.password_confirmation[0] }}</small>
    </div>
  </div>
</template>

<script>

import SpinnerComponent from "../../components/Spinner.vue";
export default {
  name: "ProfileInformation",
  components:{
    SpinnerComponent,
  },
  data() {
    return {
      profileUrl: null,
      salutations: [],
      user:{},
      errors: {},
      loading: false,
    }
  },
  mounted() {
    this.fetchAuthUser()
    this.fetchSalutation()
  },
  methods: {
    onProfileChange() {
      const binaryData = []
      binaryData.push(this.$refs.profileImg.files.item(0))
      this.profileUrl = URL.createObjectURL(new Blob(binaryData, { type: 'application/zip' }))
    },
    removeProfile(){
      // eslint-disable-next-line no-undef
      axios.post(`remove-profile`,{
        user_id: this.auth_user_id,
        profile:''
      }, {
        headers:{
          'Accept-Language': this.translatedLang.value
        }
      })
          .then(() => {
           this.fetchAuthUser()
            this.emitter.emit('profile-edit')
          })
    },
    fetchAuthUser(){
      // eslint-disable-next-line no-undef
      axios.get(`list-user/${this.auth_user_id}`)
          .then(response => {
            this.user = response.data.data
            this.profileUrl = response.data.data.profile
            this.user.company_name = response.data.data.company[0].name
            this.user.password=''
          })
    },
    editUser(){
      this.loading = true
      const formData = new FormData()
      if (this.$refs.profileImg.files.item(0)) {
        formData.append('profile', this.$refs.profileImg.files.item(0))
      }
      formData.append('company_name',this.user.company_name )
      formData.append('first_name',this.user.first_name )
      formData.append('last_name',this.user.last_name )
      formData.append('contact_number',this.user.contact_number? this.user.contact_number: '')
      formData.append('salutation_id',this.user.salutation_id )
      formData.append('company_id',this.user.company_id )
      formData.append('email',this.user.email )
      // formData.append('username',this.user.username )
      if(this.user.password){
        formData.append('password',this.user.password )
      }
      if(this.user.password_confirmation){
        formData.append('password_confirmation',this.user.password_confirmation)
      }

      // eslint-disable-next-line no-undef
      axios.post('edit-profile',formData, {
        headers:{
          'Accept-Language': this.translatedLang.value
        }
      })
          .then(() => {
            this.errors = {}
            this.emitter.emit('profile-edit')
            this.$refs.profileImg.value = ''
            this.loading = false
            this.fetchAuthUser()
          })
      .catch(error => {
        this.errors = error.response.data.errors
        this.loading = false
      })
    },
    fetchSalutation(){
      // eslint-disable-next-line no-undef
      axios.get('salutation')
          .then(response => {
            this.salutations = response.data
          })
    },
  },

};
</script>
