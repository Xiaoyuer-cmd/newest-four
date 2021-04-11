import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex)
// 初级写法
/*
const store = new Vuex.Store({
    state: { data对象 }, //状态管理====>状态管理====>通过state.data访问数据
    mutations: {
        functionName( state, params ) {
            ...修改state === => 组件中通过 this.$store.commit('functionName', params) 触发mutations ====> params为外界传入参数
        }
    },
    actions: {
        functionName(context, params) {  //context是一个对象，从它里面把咱们需要的commit方法解构出来
            let {//结构方法
                commit
            } = context
            commit('changeDataMut', params)
            ...异步操作 === => 通过 this.$store.dispatch('functionName', params) 触发mutations ====> params为外界传入参数
        }
    },
    getters: {}, //计算属性
    modules: {} //模块
})
*/
/*
const store = new Vuex.Store({
    state: {
        data: 0
    },
    getters: { //计算属性
        doubleGet(state) {
            return state.data * 2
        }
    },
    mutations: { //修改state  //mutation实质是一个函数，接收state和调用时传来的params参数
        changeDataMut(state, params) {
            state.data = params
        }
    },
    actions: { //异步操作
        changeDataAct(context, params) { //context是一个对象，从它里面把咱们需要的commit方法解构出来
            let {
                commit
            } = context
            commit('changeDataMut', params)
        }
    },
    modules: { //模块

    }
})
*/
// 推荐写法
import state from './state.js'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
})
export default store;