import {createStore} from 'vuex'

export default createStore({
    // state: {
    //   error: null,
    //   name: state.name,
    //   // name: JSON.parse(localStorage.getItem('name') || ''),
    //   email: '',
    //   check: false,
    //   phone: null,
    //   description: '',
    //   photo: []
    // },
    // state: {
    //   name: JSON.parse(localStorage.getItem('name') || []),
    // },

    getters: {

        error: state => state.error,

        getName({name, description, checkToggle}) {
            return {name, description, checkToggle}
        },

        getPhone({phone, email}) {
            return {phone, email}
        },

        checkValue({check}) {
            return {check}
        },

        getPhoto({photos}) {
            const removePhoto =(index) => photos.value =  photos.value.filter((photo, i) => i != index)
            return {photos, removePhoto}
        }
    },

    mutations: {
        setError(state, error) {
            state.error = error
        },
        clearError(state) {
            state.error = null
        },

        getName(state, name, description, checkToggle) {
            state.name = name
            state.description = description
            // state.email = email
            state.checkToggle = checkToggle
            // localStorage.setItem('name',JSON.stringify(state.name))
            // console.log(state.name)
        },

        getPhone(state, phone, email) {
            state.phone = phone
            state.description = email
        },

        checkValue(state, check) {

            state.check = check
            // state.check.name = check.name

            // state.checks = state.checks.push({check:value})
            // state.check = {check:value}

        },
        getPhoto(state, photos) {
            state.photos = photos
            // state.getSrc = getSrc
            const removePhoto =(index) => photos.value =  photos.value.filter((photo, i) => i != index)
            return {
                photos: photos,
                removePhoto
            }
        }

    },

    actions: {

        getName({commit}, {name, description, checkToggle}) {
            return commit('getName', {name, description, checkToggle})
        },
        getPhone({commit}, {phone, email}) {
            return commit('getPhone', {phone, email})
        },

        checkValue({commit}, {check}) {
            return commit('checkValue', check)
        },

        getPhoto({commit}, {photos}) {
            return commit('getPhoto', {photos})
        }
    },

    modules: {}
})


