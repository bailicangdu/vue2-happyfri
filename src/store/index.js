import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	level: '第一周',
	itemNum: 1,
	TransformNum: ['一', '二', '三', '四', '五', '六', '七', '八', '九'],
	itemDetail: [{
		title: '题目题目题目题目',
		content: ['所发生的发生', '所发生的发史蒂夫是非得失发生的发生地方生', '所发生的发生', '所发生的发生']
	}, {
		title: '题目题目说的是分身乏术发生地方读书分胜负水电费水电费水电费题目题目',
		content: ['所发生的发生', '所发生的发生', '所发生的事的发生的发生地方读书发生', '所发生的发生']
	}, {
		title: '题目题目题目题目说的发生的发生地方',
		content: ['所发生的发生', '所发生的发生', '所发生的发生', '所说的发生的发生地方睡沙发发生的发生']
	}, {
		title: '题目题目题目题',
		content: ['所发生的发生', '所发生的发生', '所发生的发生', '所说的发生的发']
	}, {
		title: '题目题目题目题目说的发生的发生地方',
		content: ['所发生的发生', '所发生的发生', '所发生的发生', '所说的发生的发生地方睡沙发发生的发生']
	}],
	answerid: {}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})