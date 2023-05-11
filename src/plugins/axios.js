import axios from 'axios'
import store from '../store'

if (store.getters['auth/getToken']) {
    const  token  = store.getters['auth/getToken']
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
axios.defaults.baseURL = 'http://i-ora.dreamspotacademy.com/api/'

window.axios = axios