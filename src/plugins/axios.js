import axios from 'axios'
import store from '../store'

if (store.getters['auth/getToken']) {
    const  token  = store.getters['auth/getToken']
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
// axios.defaults.baseURL = 'https://dreamspotacademy.com/public/i-ora/public/api/'
axios.defaults.baseURL = 'http://ns1.i-ora.de/i-ora-web/public/api/'

window.axios = axios