/**
 * Created by gnnt on 2018/4/13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const ErrorPage401 = resolve => require(['../views/error/401'], resolve)
const ErrorPage404 = resolve => require(['../views/error/404'], resolve)
const Login = resolve => require(['../views/login'], resolve)
const Layout = resolve => require(['../views/layout/layout'], resolve)
const Index = resolve => require(['../views/index'], resolve)
const IconIndex = resolve => require(['../views/icons'], resolve)
const Line = resolve => require(['../views/charts/line'], resolve)
const Graph = resolve => require(['../views/charts/graph'], resolve)
const TableSimpleDemo = resolve => require(['../views/table/table-simple-demo'], resolve)
const Permission = resolve => require(['../views/permission'], resolve)
const Tab = resolve => require(['../views/tabs'], resolve)
const TableIndex = resolve => require(['../views/table'], resolve)
const BaseTable = resolve => require(['../views/table/base'], resolve)
const Steps = resolve => require(['../views/steps'], resolve)

const Test1 = resolve => require(['../views/index/Test1'], resolve)
const Test2 = resolve => require(['../views/index/Test2'], resolve)


export const constantRouterMap = [
    {
        path: '/',
        component: Layout,
        redirect: '/index/index',
        meta: {
            hidden: true
        }
    },
    {
        path: '/login',
        component: Login,
        meta: {
            hidden: true,
        }
    },
    {
        path: '/index',
        name: 'index',
        component: Layout,
        redirect: '/index/index',
        meta: {
            icon: 'index',
            hasChildren: false
        },
        children: [
            {
                path: 'index',
                name: 'index_index',
                component: Index,
                children: [
                    {
                        path: 'aa',
                        name: 'index_index_aa',
                        component: Test1,
                        meta: {
                            hidden: true
                        }
                    },
                    {
                        path: 'bb',
                        name: 'index_index_bb',
                        component: Test2,
                        meta: {
                            hidden: true
                        }
                    }
                ]
            }
        ]
    },
    {
        path: '/401',
        component: ErrorPage401,
        meta: {
            hidden: true
        }
    },
    {
        path: '/404',
        component: ErrorPage404,
        meta: {
            hidden: true
        }
    }
]

export const userRouterMap = [
    {
        path: '/icons',
        name: 'icons',
        component: Layout,
        redirect: '/icons/index',
        meta: {
            icon: 'icon',
            hasChildren: false,
            keepAlive: false
        },
        children: [
            {
                path: 'index',
                name: 'icons_index',
                component: IconIndex,
                keepAlive: false
            }
        ]
    },
    {
        path: '/permission',
        name: 'permission',
        component: Layout,
        redirect: '/permission/index',
        meta: {
            icon: 'permission',
            hasChildren: false,
            keepAlive: true
        },
        children: [
            {
                path: 'index',
                name: 'permission_index',
                component: Permission,
                keepAlive: true
            }
        ]
    },
    {
        path: '/charts',
        name: 'charts',
        component: Layout,
        redirect: 'none',
        meta: {
            icon: 'charts',
            hasChildren: true
        },
        children: [
            {
                path: 'line',
                name: 'charts_line',
                component: Line,
                meta: {
                    hasChildren: false
                }
            },
            {
                path: 'graph',
                name: 'charts_graph',
                component: Graph,
                meta: {
                    hasChildren: false
                }
            }
        ]
    },
    {
        path: '/example',
        name: 'example',
        component: Layout,
        redirect: 'none',
        meta: {
            icon: 'example',
            hasChildren: true
        },
        children: [
            {
                path: 'tab',
                name: 'example_tab',
                component: Tab,
                meta: {
                    icon: 'tab',
                    hasChildren: false
                }
            },
            {
                path: 'table',
                name: 'example_table',
                component: TableIndex,
                redirect: '/example/table/baseTable',
                meta: {
                    icon: 'table',
                    hasChildren: true
                },
                children: [
                    {
                        path: 'baseTable',
                        name: 'example_table_base',
                        component: BaseTable,
                        meta: {
                            hasChildren: false
                        }
                    },
                    {
                        path: 'customTable',
                        name: 'example_table_custom',
                        component: TableSimpleDemo,
                        meta: {
                            hasChildren: false
                        }
                    }
                ]
            },
            {
                path: 'steps',
                name: 'example_steps',
                component: Steps,
                meta: {
                    hasChildren: false
                }
            }
        ]
    },
    {
        path: '*',
        redirect: '/404',
        meta: {
            hidden: true
        }
    }
];

export default new Router({
    // mode: 'history',
    base: '/dist/',
    routes: constantRouterMap,
    scrollBehavior: () => ({y: 0})
});
