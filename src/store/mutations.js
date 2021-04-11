/*
 * mutation.js ====>修改数据
 */
export default {
    //第一个参数是store的state对象，第二个参数是传递过来的参数
    //名字使用全部大写，是为了和actions里面的方法名区分开
    CHANGEDATAMUT(state, params) {
        state.data = params
    },
}