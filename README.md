# 说明

>  非常简单的一个vue2 + vuex的项目，整个流程一目了然，适合作为入门练习。

>  vuex的存在对于vue来说简直如同灵魂一般，让vue在组件之间的通信非常方便。

>  vue2中像react一样采用了虚拟dom，对于vue这种小型框架，提升的效率不言而喻，能和react一较高下。

>  组件一体化的体验非常棒，写起来非常舒服。

>  如果对您有帮助，您可以点右上角 "Star" 支持一下 谢谢！ ^_^

>  如有问题请直接在 Issues 中提，或者可以加我的QQ 1264889788

>  开发环境 macOS 10.12.3  Chrome 55

>  但是这个项目过于简单，感觉才刚开始就写完了，vue2中很多功能都没有用到，所以打算用vue2写一个复杂的项目，尽可能用到vue的所有知识。目前项目已经接近完成。[地址在这里](https://github.com/bailicangdu/vue2-elm)


## 项目运行（nodejs 6.0+）
``` bash
# 安装依赖
npm install

# 开启本地服务器localhost:8080
npm run dev

# 发布环境
npm run build
```



## 路由配置
```js
import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
}]

```



## 配置actions
```js
import ajax from '../config/ajax'

export default {
	addNum({ commit, state }, id) {
		commit('REMBER_ANSWER', { id })
		if (state.itemNum < state.itemDetail.length) {
			commit('ADD_ITEMNUM', {
				num: 1
			})
		}
	},

	getData({ commit, state }) {
		ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4').
		then(res => {
			commit('GET_DATA', {
				res
			})
		})
	},

	initializeData({ commit }) {
		commit('INITIALIZE_DATA')
	}
}

```


## mutations
```js
const GET_DATA = 'GET_DATA'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_USER_INFORM = 'GET_USER_INFORM'

export default {
	[GET_DATA](state, payload) {
		if (payload.res.httpStatusCode == 200) {
			state.itemDetail = payload.res.topiclist;
		}
	},

	[GET_USER_INFORM](state, payload) {
		state.user_id = payload.res.users_id;
	},

	[ADD_ITEMNUM](state, payload) {
		state.itemNum += payload.num;
	},

	[REMBER_ANSWER](state, payload) {
		state.answerid[state.itemNum] = payload.id;
	},

	[REMBER_TIME](state) {
		state.timer = setInterval(() => {
			state.allTime++;
		}, 1000)
	},

	[INITIALIZE_DATA](state) {
		state.itemNum = 1;
		state.allTime = 0;
	},
}
```

## 创建store
```js
import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'


Vue.use(Vuex)

const state = {
	level: '第一周',
	itemNum: 1,
	allTime: 0,
	timer: '',
	itemDetail: [],
	answerid: {}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})
```


## 创建vue实例
```js
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './router/router'
import store from './store/'

Vue.use(VueRouter)
const router = new VueRouter({
	routes
})

new Vue({
	router,
	store,
}).$mount('#app')
```


# 效果演示


[demo地址](http://test.fe.ptdev.cn/happyfri/)（请用chrome手机模式预览）
   
### 移动端扫描下方二维码

![](https://github.com/bailicangdu/vue2-happyfri/blob/master/src/images/ewm.png)



##### 如果对你有帮助，请star一下吧😊
