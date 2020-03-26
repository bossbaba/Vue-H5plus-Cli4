import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CurrentPages:"index",
    CurrentPagesActive:0,
    CurrentPagesTitle:"主页"
  },
  mutations: {
    clickChangesCurrentPages(state,current){
      state.CurrentPages = current
    },
    clickChangesCurrentPagesActive(state,active) {
      state.CurrentPagesActive = active
    },
    clickChangesCurrentPagesTitle(state,title) {
      state.CurrentPagesTitle = title
    }
  },
  actions: {

  }
})
