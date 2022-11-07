import VueRouter from "vue-router";

const router = [
    {
        path: 'limit',
        name: 'limit',
        component: () => import('@/views/limit/creditLimit')
    }
]


var vueRouter = new VueRouter(
    {
        router
    }
);
