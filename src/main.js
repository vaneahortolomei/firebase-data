import { createApp } from "vue";
import "./style/style.scss";
import router from "./route/index";
import store from "./store/index";


import App from "./App.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.mount("#app");

