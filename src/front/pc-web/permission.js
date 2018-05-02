import router from './router'
import store from './store'
import {getToken} from './utils/auth'

const whiteList = ['/login']

function hasPermission(roles, permissionRoles) {
    if (roles.indexOf('admin') >= 0) {
        return true
    }
    if (!permissionRoles) {
        return true
    }

    return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

router.beforeEach((to, from, next) => {
    console.log(to.fullPath)
    if (getToken()) {
        if (to.path === '/login') {
            next({path: ''})
        } else {
            if (store.getters.roles.length === 0) {
                store.dispatch('GetUserInfo').then(res => {
                    const roles = res.data.roles
                    store.dispatch('GenerateRoutes', {roles}).then(() => {
                        router.addRoutes(store.getters.addRouters)
                        next({...to, replace: true})
                    })
                }).catch(() => {
                    store.dispatch('FedLogOut').then(() => {
                        next({path: '/login'})
                    })
                })
            } else {
                if (hasPermission(store.getters.roles, to.meta.roles)) {
                    next()
                } else {
                    next({path: '/401', replace: true, query: {noGoBack: true}})
                }
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