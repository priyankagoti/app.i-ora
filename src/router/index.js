import {createWebHistory, createRouter} from "vue-router";
import AuthLogin from "../views/auth/login.vue";
import AuthRegister from "../views/auth/register.vue";
import DashboardComponent from "../views/Dashboard/Dashboard.vue"
import ProfileComponent from "../views/Profile/Profile.vue"
import  AdminComponent from "../views/Admin/Admin.vue"

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
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileComponent
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminComponent
  },
];

// Create Vue Router Object

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
