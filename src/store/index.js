import {createStore} from 'vuex'
import {getState} from "core-js/modules/web.url-search-params.constructor";

export default createStore({
    // state: {
    //   error: null,
    //   name:'',
    //   // name: JSON.parse(localStorage.getItem('name') || ''),
    //   email: '',
    //   check: [],
    //   checked: [],
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
            // console.log('Getters -'  +   name?.name)
            return {name, description, checkToggle}
        },

        getPhone({phone, email}) {
            return {phone, email}
        },

        checkValue({checked}) {
            return {checked}
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
            // console.log('Mutations -'  +  name.name)
        },

        getPhone(state, phone, email) {
            state.phone = phone
            state.description = email
        },

        checkValue(state, checked) {
            state.checked = checked

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
            // console.log('Actions -' + name)
            return commit('getName', {name, description, checkToggle})
        },
        getPhone({commit}, {phone, email}) {
            return commit('getPhone', {phone, email})
        },

        checkValue({commit}, {checked}) {
            return commit('checkValue', checked)
        },

        getPhoto({commit}, {photos} ) {
            return commit('getPhoto', {photos})
        }
    },

    modules: {}
})


