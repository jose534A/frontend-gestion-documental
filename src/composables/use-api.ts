import axios from "axios";


const useApi = axios.create({
    baseURL: "http://192.168.0.47:3000",
})

useApi.interceptors.request.use((config) => {
    config.headers["apikey"] = 'documental'
    config.headers["apisecret"] = 'Documental2021file'
    config.headers["Content-Type"] = "application/json"
    return config
})


export { useApi }