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
	}, {
		title: '题目题目说的是分身乏术发生地方读书分胜负水电费水电费水电费题目题目',
		content: [{
			id: 5,
			text: '所发生的发生'
		}, {
			id: 6,
			text: '所发生发生的发生的发生的的发生'
		}, {
			id: 7,
			text: '所发生的发生'
		}, {
			id: 8,
			text: '所发生发生的发生的的发生'
		}]
	}, {
		title: '题目题目题目题目说的发生的发生地方',
		content: [{
			id: 9,
			text: '所发生的发生'
		}, {
			id: 10,
			text: '所发生发生的发生的发生的发生的发生的发生的的发生'
		}, {
			id: 11,
			text: '所发生发生的发生的发生的发生的发生的发生的发生的的发生'
		}, {
			id: 12,
			text: '所发生的发生'
		}]
	}, {
		title: '题目题目题目题',
		content: [{
			id: 13,
			text: '所发生的发生'
		}, {
			id: 14,
			text: '所发生的发生'
		}, {
			id: 15,
			text: '所发生的发生'
		}, {
			id: 16,
			text: '所发生的发生'
		}]
	}, {
		title: '题目题目题目题目说的发生的发生地方',
		content: [{
			id: 17,
			text: '所发生的发生'
		}, {
			id: 18,
			text: '所发发生的发生的发生的发生的发生的发生的生的发生'
		}, {
			id: 19,
			text: '所发生的发生'
		}, {
			id: 20,
			text: '所发生发生的发生的的发生'
		}]
	}],
	answerid: {}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})