<template>
  <div>
    <tabbar>
      <tabbar-item selected link="/init/home">
        <img slot="icon" src="static/bottom/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot>
        <img slot="icon" src="static/bottom/icon_nav_msg.png">
        <span slot="label">信息</span>
      </tabbar-item>
      <tabbar-item link="/init/personal/userInfo">
        <img slot="icon" src="static/bottom/icon_nav_article.png">
        <span slot="label">用户</span>
      </tabbar-item>
      <tabbar-item badge="2">
        <img slot="icon" src="static/bottom/icon_nav_cell.png">
        <span slot="label">新闻</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem, Group, Cell } from 'vux'

  export default {
    components: {
      Tabbar,
      TabbarItem,
      Group,
      Cell
    }
  }
</script>
<style>

</style>