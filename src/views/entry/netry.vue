<template>
  <div class="layout">
    <Sider :width="300" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
      <h2 class="layoutTitle">
        <Icon type="ios-contrast" />
        {{ firstLevelTitle }}
      </h2>
      <Menu active-name="1-2" theme="dark" width="auto" :open-names="['1']">
        <Submenu
          :name="SubmenuIndex"
          v-for="(SubmenuItem,SubmenuIndex) in entry.Submenu"
          :key="SubmenuIndex"
        >
          <template slot="title">
            <Icon type="ios-navigate"></Icon>
            {{ SubmenuItem.SubmenuTitle }}
          </template>
          <MenuItem
            :name="ItemMenuItemIndex+ItemMenuItem.id"
            v-for="(ItemMenuItem,ItemMenuItemIndex) in SubmenuItem.MenuItem"
            :key="ItemMenuItemIndex"
            @click.native="leftColumnEventAssignment"
          >{{ ItemMenuItemIndex }}</MenuItem>
        </Submenu>
      </Menu>
    </Sider>
    <Layout :style="{marginLeft: '300px'}">
      <Header :style="{background: '#fff', boxShadow: '0 2px 3px 2px rgba(0,0,0,.1)'}">小虞儿</Header>
      <Content :style="{padding: '0 16px 16px'}">
        <Breadcrumb :style="{margin: '16px 0'}">
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Components</BreadcrumbItem>
          <BreadcrumbItem>Layout</BreadcrumbItem>
        </Breadcrumb>
        <Card>
          <div style="height: 600px">
            <router-view></router-view>
          </div>
        </Card>
      </Content>
    </Layout>
  </div>
</template>
<script>
import entry from './entry.json'
export default {
  data() {
    return {
      firstLevelTitle: '小虞儿笔记',
      entry: entry,
    }
  },
  methods: {
    // 左侧栏事件分配
    leftColumnEventAssignment() {
      console.log('左侧栏事件分配')
    },
  },
}
</script>
<style scoped>
@import './entry.css';
</style>