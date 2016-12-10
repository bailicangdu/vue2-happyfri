import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import './config/fastclick'
import './style/common'
import './config/rem'


Vue.use(VueRouter)

const router = new VueRouter({
	routes
})

let url = window.location.href;
if (!(/users_id=/gi.test(url))) {
	// window.location.href = 'http://wxinterface.putaoevent.com?wx_account_id=3&callback_url=' + 'http://test.fe.ptdev.cn/happyfri/';
}

new Vue({
	router,
	store,
}).$mount('#app')