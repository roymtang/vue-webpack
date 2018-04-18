import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import MobileAppRouter from './router/mobile-app-router'
import MobileAppIndexComponent from './components/mobile-app-index-component.vue'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueAxios, axios)

const router = new Router({
    mode: 'hash',
    routes: MobileAppRouter
})

new Vue({
    el: '#app',
    router,
    components: {MobileAppIndexComponent},
    template: "<MobileAppIndexComponent/>"
})