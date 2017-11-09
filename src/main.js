import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// 无效引入
import ajax from './config/ajax'
import './style/common'
import './config/rem'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})

