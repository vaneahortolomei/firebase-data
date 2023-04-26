import axios from "axios";

const data = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: false,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JSON.parse(localStorage.getItem("access_token"))}`,
    },
});

export default {
    getUsers() {
        return data.get("/dashboard").then(response => response.data);
    },
    registerUser(credentials) {
        return data.post("/register", credentials);
    },
    loginUser(credentials) {
        return data.post("/login", credentials);
    },
};
