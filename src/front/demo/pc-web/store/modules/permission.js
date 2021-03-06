import { userRouterMap, constantRouterMap } from 'pcWeb/router'


function hasPermission(roles, route) {
    if (route.meta && route.meta.roles) {
        return roles.some(role => route.meta.roles.indexOf(role) >= 0)
    } else {
        return true
    }
}

function filterAsyncRouter(userRouterMap, roles) {
    const accessedRouters = userRouterMap.filter(route => {
        if (hasPermission(roles, route)) {
            if (route.children && route.children.length) {
                route.children = filterAsyncRouter(route.children, roles)
            }
            return true
        }
        return false
    })
    return accessedRouters
}

const permission = {
    state: {
        routers: constantRouterMap,
        addRouters: []
    },
    mutations: {
        SET_ROUTERS: (state, routers) => {
            state.addRouters = routers
            state.routers = constantRouterMap.concat(routers)
        }
    },
    actions: {
        GenerateRoutes({commit}, data) {
            return new Promise(resolve => {
                const {roles} = data
                let accessedRouters

                if (roles.indexOf('admin') >= 0) {
                    accessedRouters = userRouterMap
                } else {
                    accessedRouters = filterAsyncRouter(userRouterMap, roles)
                }

                commit('SET_ROUTERS', accessedRouters)
                resolve()
            })
        }
    }
}

export default permission
