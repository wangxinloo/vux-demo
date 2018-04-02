import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HelloFromVux from '@/components/HelloFromVux'

Vue.use(Router)

export default new Router({
  base:__dirname,
  likActiveClass:'link-active',
  routes: [
    {
      path: '/',
      name: 'login',
      component: resolve => require(['../components/login.vue'],resolve),
      meta:{title:'登录'}
    },
	{
      path: '/init',
      name: 'init',
      component: resolve => require(['../components/init.vue'], resolve),
      meta:{title:'首页'},
      children: [
        {
          path: 'personal/userInfo',
          name: 'userInfo',
          component: resolve => require(['../components/personal/userInfo.vue'], resolve),
          meta: {title: '用户'}
        },
        {
          path: 'home',
          name: 'home',
          component: resolve => require(['../components/home.vue'], resolve),
          meta: {title: '首页'}
        }
      ]
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
