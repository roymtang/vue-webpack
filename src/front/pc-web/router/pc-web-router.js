/**
 * Created by gnnt on 2018/4/13.
 */

import Main from '../components/main.vue'
import CommodityAdd from '../components/CommodityManage/commodity-add'
import CommodityOutList from '../components/CommodityManage/commodity-out-list'
import First from '../components/CommodityManage/add-first.vue'
import Second from '../components/CommodityManage/add-second.vue'

export default [
    {
        name: 'pc-web-router',
        path: '/menu',
        component: Main
    },
    {
        name: 'pc-web-router',
        path: '/menu/commodityManage/addCommodity',
        component: CommodityAdd,
        children: [
            {
                path: 'first',
                component: First
            },
            {
                path: 'second',
                component: Second
            }
        ]
    },
    {
        name: 'pc-web-router',
        path: '/menu/commodityManage/commodityOutList',
        component: CommodityOutList
    }
]
