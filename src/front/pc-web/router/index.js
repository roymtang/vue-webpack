/**
 * Created by gnnt on 2018/4/13.
 */

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import PCWebMainComponent from '../components/pc-web-main-component'
import AddCommodity from '../components/CommodityManage/commodity-add'
import AddFirst from '../components/CommodityManage/add-first'
import AddSecond from '../components/CommodityManage/add-second'
import CommodityOutList from '../components/CommodityManage/commodity-out-list'
import IconList from '../components/iconManage/icon-list.vue'

import Login from '../components/login'
import ErrorPage404 from '../components/errorPage/404'
import Permission from '../components/permission/permission'


export const constantRouterMap = [
    {
        path: '/login',
        component: Login,
        hidden: true
    },
    {
        path: '/404',
        component: ErrorPage404,
        hidden: true
    },
    {
        path: '/pcWebMain',
        component: PCWebMainComponent
    },
    {
        path: '/pcWebMain/commodityManage/addCommodity',
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
        path: '/pcWebMain/commodityManage/commodityOutList',
        component: CommodityOutList
    },
    {
        path: '/pcWebMain/iconManage/iconList',
        component: IconList
    }
]

export const asyncRouterMap = [
    {
        path: '/permission',
        component: Permission
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
];

export default new Router({
    model: 'history',
    routes: constantRouterMap
});
