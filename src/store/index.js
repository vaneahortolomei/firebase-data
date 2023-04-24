import {createStore} from "vuex";
import Services from "../services/service.js";

const store = createStore({
    state: {
        user: localStorage.getItem("user"),
    },
    mutations: {
        SET_USER_DATA(state, userData) {
            state.user = userData;
            localStorage.setItem("user", JSON.stringify(userData));

            localStorage.setItem("access_token", JSON.stringify(userData.token));

            // axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        },
        LOGOUT_USER_DATA(){
            localStorage.removeItem("user");
            localStorage.removeItem("access_token");
            location.reload();
        },
    },
    actions: {
        register({commit}, credentials) {
            return Services.registerUser(credentials)
                .then(({data}) => {
                    commit("SET_USER_DATA", data);
                });
        },
        login({commit}, credentials) {
            return Services.loginUser(credentials)
                .then(({data}) => {
                    commit("SET_USER_DATA", data);
                });
        },
        logout({commit}){
            commit("LOGOUT_USER_DATA");
        },
    },
    getters: {
        loggedIn(state) {
            return !!state.user;
        },
    },
});

export default store;
