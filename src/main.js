import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Toaster from "@meforma/vue-toaster";
import Loading from 'vue3-loading-screen'

createApp(App).use(store).use(Toaster).use(Loading ,{
    bg: '#b5b6be',
    icon: '<i class="fa-duotone fa-loader"></i>',
    slot : "Uploading",
    size: 3,
    icon_color: 'red',
}).use(router).mount('#app')
