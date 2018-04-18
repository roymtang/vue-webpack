import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Router from 'vue-router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import PCAppIndex from 'pcApp/components/pc-app-index'
import PCWebIndex from 'pcWeb/components/pc-web-index'

import PCAppRouter from 'pcApp/router/pc-app-router'
import PCWebRouter from 'pcWeb/router/pc-web-router'


Vue.use(ElementUI)
Vue.use(Router)
Vue.use(VueAxios, axios)

var userAgentInfo = navigator.userAgent;
var agents = ["Android","iPhone","SymbianOS","Windows Phone","iPad","iPod", "iPhone"];
var flag = false;
for (var v = 0; v < agents.length; v++) {
    if (userAgentInfo.indexOf(agents[v]) > 0) {
        flag = true;
        break;
    }
}

if (flag) {
    const router = new Router({
        mode: 'hash',
        routes: PCAppRouter
    })

    new Vue({
        el: '#app',
        router,
        components: {PCAppIndex},
        template: "<PCAppIndex/>"
    })
} else {
    const router = new Router({
        mode: 'history',
        routes: PCWebRouter
    })

    new Vue({
        el: '#app',
        router,
        components: {PCWebIndex},
        template: "<PCWebIndex/>"
    })
}



