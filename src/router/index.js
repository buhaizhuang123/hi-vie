import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/hpIndex',
        name: 'hpIndex',
        component: () => import('@/views/hp/hpIndex')
    },
    {
        path: '/dictList',
        name: 'dictList',
        component: () => import('@/views/dict/dictList')
    },
    {
        path: '/addressBaseInfo',
        name: 'addressBaseInfo',
        component: () => import('@/views/address/AddressBaseInfo')
    }, {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login/Login')
    }, {
        path: '/sys',
        name: 'sys',
        component: () => import('@/views/consumer/SysController')
    }, {
        path: '/person_search',
        name: 'person',
        component: () => import('@/views/product/PersonShow')
    },{
        path: '/photo',
        name: 'photo',
        component: () => import('@/views/product/photo')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
