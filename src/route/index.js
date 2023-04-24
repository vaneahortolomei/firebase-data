import {createRouter, createWebHashHistory} from "vue-router";

import Dashboard from "../pages/DashboardPage.vue";
import Home from "../pages/HomePage.vue";
import Auth from "../pages/AuthenticatePage.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: "/dashboard",
        name: "dashboard",
        component: Dashboard,
        meta: {requiresAuth: true}
    },
    {
        path: "/authenticate",
        name: "authenticate",
        component: Auth,
    },
];

const router = createRouter({

    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes,
    linkExactActiveClass: "",
});

export default router;

router.beforeEach((to, from) => {

    const loggedIn = localStorage.getItem("user");
    if (to.meta.requiresAuth && !loggedIn) {
        return {
            path: '/',
        }
    }
});
