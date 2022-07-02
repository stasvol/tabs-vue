import { createStore } from 'vuex'

export default createStore({
  state: {
    error: null,
    name: '',
    email: '',
    phone: null,
    description: '',
    photo: []
  },
  getters: {
    error: state => state.error,
    getName({name, email}) {
      return name, email
    },
    getPhone({phone, description}) {
      return phone, description
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

    getName(state, name, email) {
      state.name = name
      state.email = email
    },

    getPhone(state, phone, description) {
      state.phone = phone
      state.description = description
    }
  },

  actions: {
    getName({commit, name,email}) {
      commit('getData', name,email)
    },
    getPhone({commit, phone, description}) {
      commit('getPhone', phone, description)
    }
  },

  modules: {
  }
})
