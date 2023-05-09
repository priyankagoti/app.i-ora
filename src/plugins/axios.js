import axios from 'axios'
import store from '../store'

if (store.getters['auth/getUser']) {
    const { token } = store.getters['auth/getUser']
    axios.defaults.headers.common.Authorization = `Bearer ${token}`
}
axios.defaults.baseURL = 'http://i-ora.dreamspotacademy.com/api/'

window.axios = axios