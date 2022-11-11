import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)


const routes = [
    {
        path: '/hpIndex',
        name: '/hpIndex',
        component: () => import('@/views/hp/hpIndex')
    },
    {
        path: '/dictList',
        name: '/dictList',
        component: () => import('@/views/dict/dictList')
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
    }, {
        path: '/home',
        name: '/home',
        component: () => import('@/views/Home')
    }, {
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
    }

]


const router = new VueRouter({
    mode: 'history',
    // base: process.env.BASE_URL,
    routes
})
export default router
