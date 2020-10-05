import Vue from 'vue'
import Vuex from 'vuex'
import {apiCall} from '@/config/apiConfig'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tutorials: [],
  },
  getters: {
  },
  mutations: {
    RELOADDATA(state,data) {
      state.tutorials = data
      console.log(data)
    }
  },
  actions: {
    reloadData(context,param) {
      apiCall(param).then(function(data) {
        //console.log(data)
        context.commit('RELOADDATA', data.data)
      })
    }
  },
  modules: {
  }
})
