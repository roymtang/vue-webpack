import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import MobileWebRouter from './router/mobile-web-router'
import MobileWebIndexComponent from './components/mobile-web-index-component'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueAxios, axios)

const router = new Router({
    mode: 'hash',
    routes: MobileWebRouter
})

new Vue({
    el: '#app',
    router,
    components: {MobileWebIndexComponent},
    template: "<MobileWebIndexComponent/>"
})