import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import ajax from '../config/ajax'
import {
	activeTopicId
} from '../config/config'


Vue.use(Vuex)

let nowActive = '';
if (activeTopicId !== '') {
	nowActive = activeTopicId.match(/\d+/gi)[0]
}

const state = {
	level: '',
	itemNum: 1,
	allTime: 0,
	activeCodeState: 0,
	nowActive_id: nowActive,
	user_id: '',
	active_id: '',
	active_topic_id: '',
	timer: '',
	TransformNum: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二', '十三', '十四', '十五', '十六', '十七', '十八', '十九', '二十', '二十一', '二十二', '二十三', '二十四', '二十五', '二十六', '二十七', '二十八', '二十九', '三十'],
	itemDetail: [{
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "是分身乏术分",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 66,
			"topic_id": 20,
			"answer_name": "说的发",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 67,
			"topic_id": 20,
			"answer_name": "说的发",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 68,
			"topic_id": 20,
			"answer_name": "说的发生",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 69,
			"topic_id": 20,
			"answer_name": "说的发",
			"is_standard_answer": 1
		}]
	}, {
		"topic_id": 20,
		"active_topic_id": 4,
		"type": "ONE",
		"topic_name": "是分身乏术分身乏术分似懂非懂所发生的发生分身乏术分是非得失分身乏术说",
		"active_id": 1,
		"active_title": "欢乐星期五标题",
		"active_topic_phase": "第一周",
		"active_start_time": "1479139200",
		"active_end_time": "1482163200",
		"topic_answer": [{
			"topic_answer_id": 66,
			"topic_id": 20,
			"answer_name": "说的发生的发生的分身乏术的发生的的发分服",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 67,
			"topic_id": 20,
			"answer_name": "说的发生的发生的分身乏术的发生的术分服",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 68,
			"topic_id": 20,
			"answer_name": "说的发生的发生的分身乏术的发生身乏术分服",
			"is_standard_answer": 0
		}, {
			"topic_answer_id": 69,
			"topic_id": 20,
			"answer_name": "说的发生的发生的分失分身乏术分服",
			"is_standard_answer": 1
		}]
	}],
	answerid: {}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})