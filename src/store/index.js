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
	itemDetail: [],
	answerid: {}
}

export default new Vuex.Store({
	state,
	actions,
	mutations
})