<template>
    <div>
        <div>
            <h1 class="VueView">状态管理(vuex使用)</h1>
            <h3 class="h3style">
                <Button type="primary" @click="changeData">Action修改数据</Button>
                <!--访问state中的数据-->
                {{ this.$store.state.data }}
            </h3>
            <h3 class="h3style">getters计算：{{ this.$store.getters.doubleGet }}</h3>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        created() {},
        mounted() {
            this.$store.commit('CHANGEDATAMUT', 100) //触发mutations
        },
        methods: {
            changeData() {
                // 通过dispatch 触发 action 并传参,同时提交mutations方法
                this.$store.dispatch('changeDataAct', 200) //此时data就变成200啦
            },
        },
    }
</script>
<style scoped>
    .VueView {
        background-color: beige;
        padding: 10px 0;
        text-align: center;
    }

    .h3style:nth-child(even) {
        background-color: green;
        padding: 10px 0;
        text-align: center;
        color: #fff;
    }

    .h3style:nth-child(odd) {
        background-color: #08c;
        padding: 10px 0;
        text-align: center;
        color: #fff;
    }
</style>>