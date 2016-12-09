import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
	level: '第一周',
	itemNum: 1,
	allTime: 0,
	timer: null,
	TransformNum: ['一', '二', '三', '四', '五', '六', '七', '八', '九'],
	itemDetail: [{
		title: '题目题目题目题目',
		content: [{
			id: 1,
			text: '所发生的发生'
		}, {
			id: 2,
			text: '所发发生的发生的发生的发生的发生的生的发生'
		}, {
			id: 3,
			text: '所发生的发生'
		}, {
			id: 4,
			text: '所发生发生的的发生'
		}]
	}],
	answerid: {}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})