// import axios from "axios";
const state = {
  user: getState('auth.user'),
  token: getState('auth.token'),
  language:getState('lang'),
  jsonFile: {}
}

const mutations = {
  SET_USER(state, user) {
    state.user = user
    saveState('auth.user', user)
  },
  SET_TOKEN(state, token) {
    state.token = token
    saveState('auth.token', token)
  },
  SET_JSON_FILE(state, jsonFile) {
    state.jsonFile = jsonFile
  },
  SET_LANGUAGE(state, language) {
    state.language = language
    saveState('lang', language)
  }
}

const getters = {
  loggedIn(state) {
    return !!state.user
  },
  getUser(state) {
    return state.user
  },
  getToken(state) {
    return state.token
  },
  getJsonFile(state) {
    return state.jsonFile
  },
  getLanguage(state){
    return state.language
  }
}

const actions = {
  // This is automatically run in `src/state/store.js` when the app
  // starts, along with any other actions named `init` in other modules.
  // TODO
  init({ dispatch }) {
    dispatch('validate')
  },

  // eslint-disable-next-line no-shadow
  logIn({ commit, dispatch, getters }, form = {}) {
    if (getters.loggedIn) {
      return dispatch('validate')
    }
    // eslint-disable-next-line no-undef
    return axios.post('auth/login', form, {
      headers:{
        'Accept-Language': getters.getLanguage.value
      }
    }).then(response => {
      commit('SET_TOKEN', response.data.data.token)
      commit('SET_USER', response.data.data.user)
      return response
    })
      .catch(error => error.response)
  },

  // Logs out the current user.
  logOut() {
    localStorage.removeItem('auth.user');
    localStorage.removeItem('auth.token');
    // commit('SET_USER', '')
    // commit('SET_TOKEN', '')
  },

  // Validates the current user's token and refreshes it  with new data from the API.
  validate({ state, getters }) {
    if (!state.user) {
      return Promise.resolve(null)
    }
    return getters.getUser
  },
  fetchJsonFile({ commit },language){
    // eslint-disable-next-line no-undef
    axios.get(`translations`,{
      headers:{
        'Accept-Language': language.value
      }
    }).then(response => {
      commit('SET_JSON_FILE', response.data)
      commit('SET_LANGUAGE', language)
          // return response.data.text;
        })
        .catch(() => {
          return ''; // Return an empty string or handle error as per your requirements
        });
  },
}
function isJson(str) {
  try {
    // eslint-disable-next-line no-param-reassign
    str = JSON.parse(str)
    return Object.prototype.toString.call(str) === '[object Array]' || Object.prototype.toString.call(str) === '[object Object]'
  } catch (e) {
    return false
  }
}
function getState(key) {
  if(isJson(window.localStorage.getItem(key))){
    return JSON.parse(window.localStorage.getItem(key))
  }
  else{
    return window.localStorage.getItem(key)
  }

}

function saveState(key, state) {
  if(Object.prototype.toString.call(state) === '[object Array]' || Object.prototype.toString.call(state) === '[object Object]')
  {
    window.localStorage.setItem(key, JSON.stringify(state))
  }
  else {
    window.localStorage.setItem(key, state)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}
