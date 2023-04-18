import axios from "axios";

const data = axios.create({
    baseURL: "http://localhost:3030",
    withCredentials: false,
    headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
    },
});

export default {
    getUsers() {
        return data.get("/dashboard").then(response => response.data);
    },
};
