import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import PCWebRouter from './router/pc-web-router'
import PCWebIndexComponent from './components/pc-web-index-component'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueAxios, axios)

const router = new Router({
    mode: 'history',
    routes: PCWebRouter
})

new Vue({
    el: '#app',
    router,
    components: {PCWebIndexComponent},
    template: "<PCWebIndexComponent/>"
})