import auth from '@/router/middleware/auth'
import guest from "@/router/middleware/guest";
import AuthLogin from "@/views/auth/login";
import AuthRegister from "@/views/auth/register";
import DashboardComponent from "@/views/Dashboard/Dashboard";
import ProfileComponent from "@/views/Profile/Profile";
import AdminComponent from "@/views/Admin/Admin";
import ObjectComponent from "@/views/Object/Object";
import NewObject from "@/views/Object/NewObject";

const routes = [
  {
    path: "/login",
    name: "Login",
    component: AuthLogin,
    meta: {
      middleware: [guest],
    },
  },
  {
    path: "/register",
    name: "Register",
    component: AuthRegister,
    meta: {
      middleware: [guest],
    },
  },
  {
    path: "/",
    name: "Home",
    redirect:"/dashboard",
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardComponent,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: ProfileComponent,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/admin",
    name: "Admin",
    component: AdminComponent,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/customers",
    name: "Customer",
    component: ObjectComponent,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/new-customer",
    name: "NewCustomer",
    component: NewObject,
    meta: {
      middleware: [auth],
    },
  },
  {
    path: "/edit-customer/:id",
    name: "EditCustomer",
    component: NewObject,
    meta: {
      middleware: [auth],
    },
  },
];
export default routes
