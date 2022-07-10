import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import useVuelidate from "@vuelidate/core";
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

// export const bus = new Vue()
// Vue.config.productionTip = false

createApp(App).use(useVuelidate).use(store).use(router).mount('#app')

