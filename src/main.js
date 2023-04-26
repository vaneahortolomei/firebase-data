import {createApp, reactive} from "vue";
import "./style/style.scss";
import router from "./route/index";
import store from "./store/index";
import App from "./App.vue";


const app = createApp(App);

//GlobalNotification
const message = reactive({message: ""});

app.use(router);
app.use(store);
app.provide("key", message);

app.mount("#app");

