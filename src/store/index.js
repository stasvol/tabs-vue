import { createStore } from 'vuex'

export default createStore({
  // state: {
  //   error: null,
  //   name: '',
  //   email: '',
  //   check: false,
  //   phone: null,
  //   description: '',
  //   photo: []
  // },
  getters: {

    error: state => state.error,

    getName({name, email, check}) {
      return {name, email, check}
    },

    getPhone({phone, description}) {
      return {phone, description}
    },

    checkValue({check}) {
      return check.value
    },


  },
  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    },

    getName(state, name, email, check) {
      state.name = name
      state.email = email
      state.check = check
      console.log(name, email, check)
    },

    getPhone(state, phone, description) {
      state.phone = phone
      state.description = description
    },

    checkValue(state, check) {
      console.log(check.value)
      state.check = check.value
    },
  },

  actions: {
    getName({commit}, {name, email, check}) {
      console.log(name, email, check)
      return commit('getName', {name, email, check})


    },
    getPhone({commit}, {phone, description}) {
      return commit('getPhone', {phone, description})
    },

    checkValue({commit}, {check}) {
      return commit('checkValue', check.value)
    },
  },

  modules: {
  }
})
