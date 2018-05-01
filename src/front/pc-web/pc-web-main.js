import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'
import VueAxios from 'vue-axios'

import router from './router'
import PCWebIndexComponent from './components/pc-web-index-component.vue'
import Login from './components/login'

import 'src/front/common/icons'
import i18n from 'src/front/common/lang'

import store from './store'

Vue.use(ElementUI, {
    size: 'medium',
    i18n: (key, value) => i18n.t(key, value)
})

Vue.use(VueAxios, axios)

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    if (store.getters.token) {
        if (to.path === '/login') {
            next({
                path: '/'
            })
        } else {
            if (store.getters.roles.length === 0) {
                store.dispatch('GetUserInfo').then(response => {
                    const roles = response.data.roles
                    store.dispatch('GenerateRoutes', {roles}).then(() => {
                        router.addRoutes(store.getters.addRouters)
                        console.log(store.getters.addRouters)
                        next({...to, replace: true})
                    })
                }).catch(err => {
                    console.log(err)
                })
            } else {
                next()
            }
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next('/login')
        }
    }
})

require('./mock')

new Vue({
    el: '#app',
    router,
    store,
    i18n,
    components: {Login},
    template: "<Login/>"
})
