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
  // state: {
  //   checks: []
  // },
  getters: {

    error: state => state.error,

    getName({name, email, checkToggle}) {
      return {name, email, checkToggle}
    },

    getPhone({phone, description}) {
      return {phone, description}
    },

    checkValue({check}) {
      return {check}
    },

    getPhoto({photos}) {
      return {photos}
    }
    },

  mutations: {
    setError(state, error) {
      state.error = error
    },
    clearError(state) {
      state.error = null
    },

    getName(state, name, email, checkToggle) {

      state.name = name
      state.email = email
      state.checkToggle = checkToggle
    },

    getPhone(state, phone, description) {
      state.phone = phone
      state.description = description
    },

    checkValue(state, check) {

        state.check = check
        // state.check.name = check.name

      // state.checks = state.checks.push({check:value})
      // state.check = {check:value}

    },
    getPhoto(state,photos) {
      state.photos = photos
      // state.getSrc = getSrc

    }

  },

  actions: {
    getName({commit}, {name, email, checkToggle}) {
      return commit('getName', {name, email, checkToggle})


    },
    getPhone({commit}, {phone, description}) {
      return commit('getPhone', {phone, description})
    },

    checkValue({commit}, {check}) {
      return commit('checkValue',check)
    },

    getPhoto({commit}, {photos}) {
      return commit('getPhoto', {photos})
    }
  },

  modules: {
  }
})
