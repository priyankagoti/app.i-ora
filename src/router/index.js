import { createWebHistory, createRouter } from "vue-router";
import AuthLogin from "../views/auth/login.vue";
import AuthRegister from "../views/auth/register.vue";
import DashboardComponent from "../views/Dashboard/Dashboard.vue"
import ProfileComponent from "../views/Profile/Profile.vue"
import AdminComponent from "../views/Admin/Admin.vue"
import ObjectComponent from "../views/Object/Object.vue"
import NewObject from "../views/Object/NewObject.vue"

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
  {
    path: "/object",
    name: "Object",
    component: ObjectComponent
  },
  {
    path: "/new-object",
    name: "NewObject",
    component: NewObject
  },
];

// Create Vue Router Object

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
