import { createStore } from 'vuex'

export default createStore({
  state: {
    error: null,
    name: '',
    email: ''
  },
  getters: {
    error: state => state.error,
    getData({name, email}) {
      return name, email
    }

  },
  mutations: {
    setError(state, error) {
      console.log(error)
      state.error = error
    },
    clearError(state) {
      state.error = null
    },

    getData(state, name, email) {
      state.name = name
      state.email = email
    }
  },

  actions: {
    getData({commit, name,email}) {
      commit('getData', name,email)
    }
  },

  modules: {
  }
})
