/**
 * api接口统一管理
 * 首先我们在api.js中引入我们封装的get和post方法
 */
import { get, post } from './http.js'
/*
现在， 例如我们有这样一个接口， 是一个post请求：
http: //www.baiodu.com/api/v1/users/my_address/address_edit_before
我们可以在api.js中这样封装：
*/
// const apiAddress = p => post('api/v1/users/my_address/address_edit_before', p);

const api = [
    // apiAddress()
]
export default api
// 然后在我们的页面中可以这样调用我们的api接口：
/* *
import { apiAddress } from '@/request/api'; // 导入我们的api接口
export default {
    name: 'Address',
    created() {
        this.onLoad();
    },
    methods: {
        // 获取数据
        onLoad() {
            // 调用api接口，并且提供了两个参数
            apiAddress({
                type: 0,
                sort: 1
            }).then(res => {
                // 获取数据成功后的其他操作
                // ………………
            })
        }
    }
}
 */