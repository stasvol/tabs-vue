import { createApp } from 'vue'
import useVuelidate from "@vuelidate/core";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import usePhotos  from "@/utils/photo";
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'

// export const bus = new Vue()
// Vue.config.productionTip = false
// export const bus = new createApp(App)
createApp(App).use('photo', usePhotos).use(useVuelidate).use(store).use(router).mount('#app')

