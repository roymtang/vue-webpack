import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import PCWebRouter from './router/pc-web-router'
import PCWebIndexComponent from './components/pc-web-index-component.vue'
import VueI18n from 'vue-i18n'
import messages from 'config/language'

Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueAxios, axios)
Vue.use(VueI18n)

const router = new Router({
    mode: 'history',
    routes: PCWebRouter
})

const i18n = new VueI18n({
    locale: 'en',
    messages
})

new Vue({
    el: '#app',
    router,
    i18n,
    components: {PCWebIndexComponent},
    template: "<PCWebIndexComponent/>"
})