/*
#****基础配置****
*/
// 初始化
import './style/Publickstyle-pc.css'
// import './style/Publickstyle-app.css'
import './style/main.css'
import './style/main.less'
import './style/main.scss'
/* ############## */
import Vue from 'vue';
import App from './App.vue';
/* ############## */
import router from './router/router.js'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
/* ############## */
import store from './store/store.js'
import Vuex from 'vuex';
Vue.use(Vuex)
/* ############## */
import axios from 'axios'
import qs from 'axios'
import api from './axios/api.js'
Vue.prototype.$axios = api
Vue.prototype.$qs = qs
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
/* ############## */
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
/* ############## */
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
/* ############## */
import * as filters from './filters/filters.js' // 过滤器
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
/* ############## */
// 全局前置路由守卫
router.beforeEach((to, from, next) => {
    window.document.title = '小虞  ||  ' + to.meta.title;
    if (to.meta.requireAuth === true) { // 判断该路由是否需要登录权限
        if (store.state.token) { // 通过vuex state获取当前的token是否存在
            next();
        } else {
            next({
                path: '/homeentry', // 将跳转的路由path作为参数，登录成功后跳转到该路由
                query: {
                    // redirect: to.fullPath
                }
            })
        }
    } else {
        next();
    }
})
/* ############## */
/* ############## */
/* ############## */
/* ############## */
/* ############## */
var vm = new Vue({
    el: '#app',
    render(createElements) {
        return createElements(App)
    },
    router,
    store,
    axios,
})