import Vue from 'vue'
import axios from "axios";
import app from '@/App'
import router from './router'
import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'


Vue.prototype.$axios = axios
// axios.defaults.baseURL = '/doc'
axios.defaults.headers.post['Content-Type'] = 'text/plain'
Vue.config.productionTip = false
axios.defaults.withCredentials = true

Vue.use(ElementUi)

new Vue({
    router,
    render: h => h(app)
}).$mount('#app')

axios.interceptors.request.use(conf => {
    if (conf.push === '/') {

    } else {
        if (localStorage.getItem('authentication')) {
            conf.headers.authentication = localStorage.getItem('authentication')
        }
    }
    return conf;
})


axios.interceptors.response.use(res => {
    if (res.status === 200 && res.data.message === 'loginSuccess'){
        router.replace({
            path: '/home',
            // query: {redirect: router.currentRoute.fullPath}
        }).catch((err)=>{
            return true
        })
    }


    return res;
}, error => {
    if ((error.response.status === 401 || error.response.status === 403)) {
        ElementUi.Message(error.response.data)
        router.replace({
            path: '/login',
            query: {redirect: router.currentRoute.fullPath}
        })
        return Promise.reject(error)
    }
    return error.response;
})
