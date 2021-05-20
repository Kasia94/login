import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logged: false
  },
  mutations: {
    setLogged (state, payload) {
      state.logged = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
