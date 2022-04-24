import axios from 'axios'
import nprogress from 'nprogress';
import 'nprogress/nprogress.css'
import store from '@/store'

const requests = axios.create({
    baseURL: '/api',
    timeout: 10000,
})



requests.interceptors.request.use((config) => {
    nprogress.start()
    if (localStorage.getItem('UUIDTOKEN')) {
        config.headers.userTempId = localStorage.getItem('UUIDTOKEN')
    }

    if (store.state.user.token) {
        config.headers.token = store.state.user.token
    }
    return config
})

requests.interceptors.response.use((response) => {
    nprogress.done()
    return response.data
}, (error) => {
    return Promise.reject(new Error('failure'))
})


export default requests