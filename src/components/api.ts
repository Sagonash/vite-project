import axios from 'axios';

export const client = axios.create({
    baseURL: "https://cpt-stage-2.duckdns.org/api"
});

client.interceptors.request.use(config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`
    return config
})

client.interceptors.response.use(response => {
    return response
}, error => {
    if (error.request){
        axios.post(`${client.defaults.baseURL}/auth/refresh-token?refreshToken=${localStorage.getItem('refreshToken')}`)
        .then(function(refResponse){
            localStorage.setItem("accessToken", refResponse.data.accessToken)
            localStorage.setItem("refreshToken", refResponse.data.refreshToken)
        })
        .catch(function(refError){
            localStorage.removeItem("accessToken")
            localStorage.removeItem("refreshToken")
        })
        return new Promise(() => { })
    }
    else return Promise.reject(error)
})