/**
 * Created by gnnt on 2018/4/13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Login = resolve => require(['../components/Login'], resolve)
const ErrorPage401 = resolve => require(['../components/ErrorPage/401'], resolve)
const ErrorPage404 = resolve => require(['../components/ErrorPage/404'], resolve)


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

export const constantRouterMap = [
    {
        path: '/login',
        component: Login
    },
    {
        path: '/401',
        component: ErrorPage401
    },
    {
        path: '/404',
        component: ErrorPage404
    },
    {
        path: '/',
        component: Layout
    }
]

export const asyncRouterMap = [
    {
        path: '/index',
        name: 'index',
        component: Layout,
        redirect: '/index/index',
        single: true,
        meta: {
            icon: 'index'
        },
        children: [
            {
                path: 'index',
                name: 'index_index',
                component: Index
            }
        ]
    },
    {
        path: '/permission',
        name: 'permission',
        component: Layout,
        redirect: '/permission/index',
        single: true,
        meta: {
            icon: 'permission'
        },
        children: [
            {
                path: 'index',
                name: 'permission_index',
                component: Permission
            }
        ]
    },
    {
        path: '/icons',
        name: 'icons',
        component: Layout,
        redirect: '/icons/index',
        single: true,
        meta: {
            icon: 'icon'
        },
        children: [
            {
                path: 'index',
                name: 'icons_index',
                component: IconIndex
            }
        ]
    },
    {
        path: '/charts',
        name: 'charts',
        component: Layout,
        redirect: 'none',
        single: false,
        meta: {
            icon: 'charts'
        },
        children: [
            {
                path: 'line',
                name: 'charts_line',
                component: Line,
                single: true,
            },
            {
                path: 'graph',
                name: 'charts_graph',
                component: Graph,
                single: true
            }
        ]
    },
    {
        path: '/example',
        name: 'example',
        component: Layout,
        redirect: 'none',
        single: false,
        meta: {
            icon: 'example'
        },
        children: [
            {
                path: 'tab',
                name: 'example_tab',
                component: Tab,
                single: true,
                meta: {
                    icon: 'tab'
                }
            },
            {
                path: 'table',
                name: 'example_table',
                component: TableIndex,
                redirect: '/example/table/baseTable',
                single: false,
                meta: {
                    icon: 'table'
                },
                children: [
                    {
                        path: 'baseTable',
                        name: 'example_table_base',
                        component: BaseTable,
                    },
                    {
                        path: 'customTable',
                        name: 'example_table_custom',
                        component: TableSimpleDemo
                    }
                ]
            },
            {
                path: 'steps',
                name: 'example_steps',
                component: Steps,
                single: true
            }
        ]
    },
    {
        path: '*',
        redirect: '/404'
    }
];

export default new Router({
    mode: 'history',
    routes: constantRouterMap,
    scrollBehavior: () => ({y: 0})
});
