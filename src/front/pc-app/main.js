import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import PCAppRouter from './router/index'
import PCAppIndexComponent from './components/pc-app-index-component'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueAxios, axios)

const router = new Router({
    mode: 'hash',
    routes: PCAppRouter
})

new Vue({
    el: '#app',
    router,
    components: {PCAppIndexComponent},
    template: "<PCAppIndexComponent/>"
})