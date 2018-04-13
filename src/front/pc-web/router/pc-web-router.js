/**
 * Created by gnnt on 2018/4/13.
 */

import Main from '../components/main.vue'
import CommodityAdd from '../components/CommodityManage/commodity-add'
import CommodityOutList from '../components/CommodityManage/commodity-out-list'

export default [
    {
        name: 'pc-web-router',
        path: '/menu',
        component: Main
    },
    {
        name: 'pc-web-router',
        path: '/menu/commodityManage/addCommodity',
        component: CommodityAdd
    },
    {
        name: 'pc-web-router',
        path: '/menu/commodityManage/commodityOutList',
        component: CommodityOutList
    }
]
