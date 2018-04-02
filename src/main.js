// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import {WechatPlugin, AjaxPlugin, LoadingPlugin, ToastPlugin, AlertPlugin} from 'vux'

import App from './App'
import Home from './components/HelloFromVux'
import router from './router'


/**
 * 加载插件
 */
Vue.use(Vuex)
Vue.use(WechatPlugin)
Vue.use(AjaxPlugin)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(AlertPlugin)

const store = new Vuex.Store({})
store.registerModule('vux',{
  state:{
  	loading:false,
  	showBack:true,
  	title:'',
  	number:''
  },
  mutations:{
  	updateLoading (state,loading){
  	  state.loading = loading
  	},
    updateShowBack (state, showBack) {
      state.showBack = showBack
    },
    updateTitle (state, title) {
      state.title = title
    },
    updateNumber (state, number){
      let num = ''
      if(number <= 0){
        state.number = num
      }else {
        num = number.toString()
        state.number = num
      }
    }
  }
})

/**
 * 公用组件
 */
Vue.prototype.updateTitle = function (value) {
  this.$store.commit('updateTitle', value)
}




FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app-box')
