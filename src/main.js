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
import globalMixin from './mixin'

let app = createApp(App)
app.config.globalProperties.emitter = emitter;
app.use(router);
app.use(store);
app.mixin(globalMixin);

app.mount("#app");
