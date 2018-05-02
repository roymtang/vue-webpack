/**
 * Created by gnnt on 2018/4/13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Main = resolve => require(['../components/main.vue'], resolve)
const Index = resolve => require(['../components/index.vue'], resolve)
const Login = resolve => require(['../components/Login'], resolve)
const ErrorPage401 = resolve => require(['../components/ErrorPage/401'], resolve)
const ErrorPage404 = resolve => require(['../components/ErrorPage/404'], resolve)
const IconList = resolve => require(['../components/IconManage/icon-list.vue'], resolve)
const CommodityOutList = resolve => require(['../components/CommodityManage/commodity-out-list'], resolve)
const AddCommodity = resolve => require(['../components/CommodityManage/commodity-add'], resolve)
const AddFirst = resolve => require(['../components/CommodityManage/add-first'], resolve)
const AddSecond = resolve => require(['../components/CommodityManage/add-second'], resolve)


const Layout = resolve => require(['../views/layout/layout'], resolve)

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
    }
]

export const asyncRouterMap = [
    {
        path: '/',
        component: Layout,
        children: [
            {
                path: 'main',
                component: Main
            },
            {
                path: 'addCommodity',
                component: AddCommodity,
                children: [
                    {
                        path: 'first',
                        component: AddFirst
                    },
                    {
                        path: 'second',
                        component: AddSecond
                    }
                ]
            },
            {
                path: 'commodityOutList',
                component: CommodityOutList
            },
            {
                path: 'iconList',
                component: IconList
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
