import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import './style/common'
import './config/rem'

Vue.use(VueRouter)

const router = new VueRouter({
	mode: 'history',
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')