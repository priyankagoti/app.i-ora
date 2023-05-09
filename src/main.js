import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import "./index.css";
import mitt from 'mitt';
const emitter = mitt();
// import axiosInstance from "@/plugins/axios";
import "@/plugins/lodash"
import store from "./store"
import "@/plugins/axios"

let app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(store);
// app.config.globalProperties.$axios = { ...axiosInstance }
app.mount("#app");
