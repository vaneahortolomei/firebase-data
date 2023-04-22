import {createStore} from "vuex";
import Services from "../services/service.js";
import axios from "axios";

const store = createStore({
    state: {
        user: null,
    },
    mutations: {
        SET_USER_DATA(state, data) {
            localStorage.setItem("user", JSON.stringify(data));

            localStorage.setItem("access_token", JSON.stringify(data.token));

            axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
            state.user = data;
        },
    },
    actions: {
        register({commit}, credentials) {
            return Services.registerUser(credentials)
                .then(({data}) => {
                    commit("SET_USER_DATA", data);
                });
        },
        login(){
            console.log('login user');
        }
    },
});

export default store;
