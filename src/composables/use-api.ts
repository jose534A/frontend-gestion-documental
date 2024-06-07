import axios from "axios";


export const useApi = axios.create({
    baseURL: "http://192.168.0.47:3000",
    headers: {
        "Content-Type": "application/json",
    },
})