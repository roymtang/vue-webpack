/**
 * Created by gnnt on 2018/4/13.
 */

import PCWebMainComponent from '../components/pc-web-main-component'
import AddCommodity from '../components/CommodityManage/commodity-add'
import AddFirst from '../components/CommodityManage/add-first'
import AddSecond from '../components/CommodityManage/add-second'
import CommodityOutList from '../components/CommodityManage/commodity-out-list'
import IconList from '../components/iconManage/icon-list.vue'

export default [
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