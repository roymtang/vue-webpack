import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import PCWebRouter from './router'
import PCWebIndexComponent from './components/pc-web-index-component.vue'

import 'src/front/common/icons'
import i18n from 'src/front/common/lang'

Vue.use(ElementUI, {
    size: 'medium',
    i18n: (key, value) => i18n.t(key, value)
})

Vue.use(Router)
Vue.use(VueAxios, axios)

const router = new Router({
    mode: 'history',
    routes: PCWebRouter
})

new Vue({
    el: '#app',
    router,
    i18n,
    components: {PCWebIndexComponent},
    template: "<PCWebIndexComponent/>"
})