/**
 * Created by gnnt on 2018/4/13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = resolve => require(['../components/main.vue'], resolve)
const Login = resolve => require(['../components/Login'], resolve)
const ErrorPage401 = resolve => require(['../components/ErrorPage/401'], resolve)
const ErrorPage404 = resolve => require(['../components/ErrorPage/404'], resolve)


const Layout = resolve => require(['../views/layout/layout'], resolve)
const Index = resolve => require(['../views/index'], resolve)
const IconIndex = resolve => require(['../views/icons'], resolve)
const Line = resolve => require(['../views/charts/line'], resolve)
const Graph = resolve => require(['../views/charts/graph'], resolve)
const TableSimpleDemo = resolve => require(['../views/table/table-simple-demo'], resolve)

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
        component: Layout,
        redirect: '/index/index',
        children: [
            {
                path: 'index',
                component: Index
            }
        ]
    },
    {
        path: '/icons',
        component: Layout,
        redirect: '/icons/index',
        children: [
            {
                path: 'index',
                component: IconIndex
            }
        ]
    },
    {
        path: '/charts',
        component: Layout,
        redirect: 'none',
        children: [
            {
                path: 'line',
                component: Line
            },
            {
                path: 'graph',
                component: Graph
            }
        ]
    },
    {
        path: '/table',
        component: Layout,
        redirect: 'none',
        children: [
            {
                path: 'simpleDemo',
                component: TableSimpleDemo
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
