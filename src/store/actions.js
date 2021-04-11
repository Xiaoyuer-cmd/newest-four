/*
 * action.js ====> 提交方法给mutation修改数据
 */
export default {
    changeDataAct(context, params) { //context是一个对象，从它里面把咱们需要的commit方法解构出来
        context.commit("CHANGEDATAMUT", params);
    }
}