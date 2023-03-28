import {createWebHistory, createRouter} from "vue-router";
import AuthLogin from "../views/auth/login.vue";
import AuthRegister from "../views/auth/register.vue";
import DashboardComponent from "../views/Dashboard/Dashboard.vue"

// Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "Login",
    component: AuthLogin
  },
  {
    path: "/register",
    name: "Register",
    component: AuthRegister
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardComponent
  }
];

// Create Vue Router Object

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
