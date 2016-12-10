import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

let userID;
let localUrl = window.location.href;

if (/users_id=/gi.test(localUrl)) {
	userID = localUrl.match(/users_id=\d+/gi)[0].match(/\d+/gi)[0];
}

const state = {
	level: '第一周',
	itemNum: 1,
	allTime: 0,
	user_id: userID,
	active_id: null,
	active_topic_id: null,
	timer: null,
	TransformNum: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十', '三十一', '三十二', '三十三', '三十四', '三十五', '三十六', '三十七', '三十八', '三十九', '四十', '四十一', '四十二', '四十三', '四十四', '四十五', '四十六', '四十七', '四十八', '四十九', '五十'],
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "丽丽漂亮吗",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 66,
			"topic_id": 20,
			"answer_name": "漂亮",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 67,
			"topic_id": 20,
			"answer_name": "很漂亮",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 68,
			"topic_id": 20,
			"answer_name": "非常漂亮",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 69,
			"topic_id": 20,
			"answer_name": "美～",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 21,
		"active_topic_id": 4,
		"type": "MORE",
		"topic_name": "1+1等于几",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 70,
			"topic_id": 21,
			"answer_name": "3",
			"is_standard_answer": 1
		}, {
			"topic_answer_id": 71,
			"topic_id": 21,
			"answer_name": "4",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 72,
			"topic_id": 21,
			"answer_name": "5",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 73,
			"topic_id": 21,
			"answer_name": "6",
			"is_standard_answer": 0
		}]
	}],
	answerid: {}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})