<template>
  <div>
    <div>
      <h1 class="VueView">过滤器filters的使用</h1>
      <h3 class="h3style">{{ price | myprice }}（局部过滤器）</h3>
      <h3 class="h3style">{{ title | Globalfilter }}（全局过滤器）</h3>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      price: 10,
      title: '我去=>(我去)被全局过滤器替换为***',
    }
  },
  //   局部过滤器
  filters: {
    myprice: function (price) {
      return '$' + price
    },
  },
  created() {},
  mounted() {},
  methods: {},
}
</script>

<style  scoped>
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