import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'
import ajax from './config/ajax'
import FastClick from './config/fastclick'
import {
	basePath
} from './config/config'
import './style/common'
import './config/rem'


Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

if ('addEventListener' in document) {
	document.addEventListener('DOMContentLoaded', function() {
		FastClick.attach(document.body);
	}, false);
}


let url = window.location.href;
if (!(/users_id=/gi.test(url))) {
	window.location.href = 'http://wxinterface.putaoevent.com?wx_account_id=3&callback_url=' + basePath
}

let jssdkUrl = url.split('#')[0]

ajax('GET', 'http://wxinterface.putaoevent.com/jssdk?wx_account_id=3&callback_url=' + basePath + '&url=' + jssdkUrl).
then((res) => {
	wx.config({
		debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
		appId: res.appId, // 必填，公众号的唯一标识
		timestamp: res.timestamp, // 必填，生成签名的时间戳
		nonceStr: res.nonceStr, // 必填，生成签名的随机串
		signature: res.signature, // 必填，签名，见附录1
		jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
	});
})

wx.ready(function() {
	wx.onMenuShareTimeline({
		title: '第一个题目，进来才知道', // 分享标题
		link: basePath, // 分享链接
		imgUrl: 'http://test.fe.ptdev.cn/happyfri/pthome.jpeg', // 分享图标
	});

	wx.onMenuShareAppMessage({
		title: '第一个题目，进来才知道', // 分享标题
		desc: '这些知识我打赌你一个都不知道', // 分享描述
		link: basePath, // 分享链接
		imgUrl: 'http://test.fe.ptdev.cn/happyfri/pthome.jpeg', // 分享图标
		type: 'link', // 分享类型,music、video或link，不填默认为link
		dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
	});
})

new Vue({
	router,
	store,
}).$mount('#app')