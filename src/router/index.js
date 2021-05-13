import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../pages/Home.vue"
import Order from "../pages/Order.vue"
import Market from "../pages/Market.vue"
import Personal from "../pages/Personal.vue"
import Login from "../pages/login/login.vue"
import Useinfo from "../pages/useinfo/useinfo.vue"
import Myinfo from "../pages/myinfo/myinfo.vue"
import Myloginpwd from "../pages/myloginpwd/myloginpwd.vue"
import Mybuypwd from "../pages/Mybuypwd/Mybuypwd.vue"
import Shiming from "../pages/shiming/shiming.vue"
import MyTeam from "../pages/myTeam/myTeam.vue"
import Callus from "../pages/callus/callus.vue"
import MachineMarket from "../pages/machinemarket/machinemarket.vue"
import MyMachine from "../pages/mymachine/mymachine"
import orderList from "../pages/order/orderList.vue"
import myOrder from "../pages/order/myOrder.vue"

Vue.use(VueRouter)

export default new VueRouter({
    routes:[
        {
            path:"/home",
            component:Home,
            meta:{showFooter:true}
        },
        {
            path:"/market",
            component:Market,
            meta:{showFooter:true},
            children:[
                {
                    path:"/market/machinemarket",
                    component:MachineMarket,
                    meta:{showFooter:true}
                },
                {
                    path:"/market/mymachine",
                    component:MyMachine,
                    meta:{showFooter:true}
                },
                {
                    path:"/market",
                    redirect:"/market/machinemarket"
                },
            ]
        },
        {
            path:"/order",
            component:Order,
            meta:{showFooter:true},
        },
        {
            path:"/personal",
            component:Personal,
            meta:{showFooter:true}
        },
        {
            path:"/login",
            component:Login,
            meta:{showFooter:false}
        },
        {
            path:"/useinfo",
            component:Useinfo,
            meta:{showFooter:false},
            children:[
                {
                    path:"/useinfo/myinfo",
                    component:Myinfo
                },
                {
                    path:"/useinfo/myloginpwd",
                    component:Myloginpwd
                },
                {
                    path:"/useinfo/mybuypwd",
                    component:Mybuypwd
                },
                {
                    path:"/useinfo",
                    redirect:"/useinfo/myinfo"
                }
            ]
        },
        {
            path:"/shiming",
            component:Shiming,
            meta:{showFooter:false}
        },
        {
            path:"/myTeam",
            component:MyTeam,
            meta:{showFooter:false}
        },
        {
            path:"/callUs",
            component:Callus,
            meta:{showFooter:false}
        },
        {
            path:"/myorder",
            component:myOrder,
            meta:{showFooter:true}
        },
        {
            path:"/orderlist",
            component:orderList,
            meta:{showFooter:true}
        },
        {
            path:"/",
            redirect:"/home"
        }
    ]
})