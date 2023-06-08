import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    weatherValues: []
  },
  getters: {
  },
  mutations: {
    setWeatherValue(state, payload) {
      state.weatherValues.unshift(payload)
    }
  },
  actions: {
  },
  modules: {
  }
})
