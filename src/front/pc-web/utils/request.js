import axios from 'axios'
import store from '../store'
import {getToken} from "./auth";

const service = axios.create({
    baseURL: '',
    timeout: 5000
})

service.interceptors.request.use(config => {
    if (store.getters.token) {
        config.headers['X-Token'] = getToken()
    }

    return config
}, error => {
    console.log(error)
    Promise.reject(error)
})

export default service
