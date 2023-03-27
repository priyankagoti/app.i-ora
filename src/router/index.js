import Vue from 'vue'
import VueRouter from 'vue-router'
import AuthLogin from '../views/auth/login.vue'
import AuthRegister from '../views/auth/register.vue'
  
Vue.use(VueRouter)
  
const routes = [
    {
        path: '/login',
        name: 'Login',
        component: AuthLogin
    },
    //  Added our new route file named profile.vue
    {
        path: '/register',
        name: 'Register',
        Component: AuthRegister
  
    },
]
  
// Create Vue Router Object
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
  
export default router