import { createStore } from 'vuex'

export default createStore({
  state: {
    error: null
  },
  getters: {
    error: state => state.error

  },
  mutations: {
    setError(state,error) {
      console.log(error)
      state.error = error
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
  },
  modules: {
  }
})
