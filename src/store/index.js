import {createStore} from "vuex";
import Services from "../services/service.js";

const store = createStore({
    state: {
        data: localStorage.getItem("data"),
    },
    mutations: {
        SET_USER_DATA(state, userData) {
            state.data = userData;
            localStorage.setItem("data", JSON.stringify(userData));

            localStorage.setItem("access_token", JSON.stringify(userData.token));
            setTimeout(() => {
                location.reload();
            });
        },
        LOGOUT_USER_DATA(){
            localStorage.removeItem("data");
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
            return !!state.data;
        },
    },
});

export default store;
