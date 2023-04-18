import {createRouter, createWebHashHistory} from "vue-router";

import Dashboard from "../pages/DashboardPage.vue";
import Home from "../pages/HomePage.vue";
import Register from "../pages/RegisterPage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
    },
];

const router = createRouter({

    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass: "",
});

export default router;
