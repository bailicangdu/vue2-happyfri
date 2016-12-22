import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import './style/common'
import './config/rem'

ajax('GET', '/shopping/restaurants?latitude=31.16407&longitude=121.38876&offset=0&limit=20&extras[]=activities')


//ajax('GET', '/v2/index_entry?geohash=wtw3630xg5e&group_type=1&flags[]=F')


Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')