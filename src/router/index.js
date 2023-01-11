import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/Home.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/layout',
        name: 'layout',
        component: layout,
        children: [
            {
                path: '/hpIndex',
                name: '/hpIndex',
                component: () => import('@/views/hp/hpIndex')
            },
            {
                path: '/dictList',
                name: '/dictList',
                component: () => import('@/views/system/dict/dictList')
            },
            {
                path: '/addressBaseInfo',
                name: '/addressBaseInfo',
                component: () => import('@/views/address/AddressBaseInfo')
            }, {
                path: '/login',
                name: '/login',
                component: () => import('@/views/login/Login')
            }, {
                path: '/sys',
                name: '/sys',
                component: () => import('@/views/consumer/SysController')
            }, {
                path: '/person_search',
                name: '/person',
                component: () => import('@/views/product/PersonShow')
            }, {
                path: '/photo',
                name: '/photo',
                component: () => import('@/views/product/photo')
            },  {
                path: '/work',
                name: '/work',
                component: () => import('@/views/work/work')
            }, {
                path: '/limit',
                name: '/limit',
                component: () => import('@/views/limit/creditLimit')
            },
            {
                path: '/limitApply',
                name: '/limitApply',
                component: () => import('@/views/limit/creditLimitApply')
            },
            {
                path: '/contractList',
                name: '/contractList',
                component: () => import('@/views/cont/contractList')
            },
            {
                path: '/contractApply',
                name: '/contractApply',
                component: () => import('@/views/cont/contractApply')
            }, {
                path: '/custManager',
                name: '/custManager',
                component: () => import('@/views/system/cust/custManage')
            }
        ]
    },
    {
        path: '/NavMenu',
        name: 'NavMenu',
        component: ()=>import('@/views/nav/NavMenu')
    }

]


const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})
export default router
