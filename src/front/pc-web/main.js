import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

import router from './router'
import i18n from 'src/front/common/lang'
import store from './store'

import 'src/front/common/icons'
import './permission'
import './mock'

Vue.use(ElementUI, {
    size: 'medium',
    i18n: (key, value) => i18n.t(key, value)
})

Vue.use(VueAxios, axios)

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: {App},
    template: "<App/>"
})
