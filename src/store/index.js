// import { createApp } from 'vue'
import { createStore } from 'vuex'
import auth from '@/store/auth/auth'
// const app = createApp({ /* your root component */ })
const store = createStore({
  modules: {
    auth,
  }
})

export default store