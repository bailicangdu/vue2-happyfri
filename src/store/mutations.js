const GET_DATA = 'GET_DATA'
const ADD_ITEMNUM = 'ADD_ITEMNUM'
const REMBER_ANSWER = 'REMBER_ANSWER'
const REMBER_TIME = 'REMBER_TIME'
const INITIALIZE_DATA = 'INITIALIZE_DATA'
const GET_USER_INFORM = 'GET_USER_INFORM'

export default {
	[GET_DATA](state, payload) {
		if (payload.res.httpStatusCode == 200) {
			state.activeCodeState = 200;
			state.itemDetail = payload.res.topiclist;
			if (payload.res.topiclist.length > 0) {
				state.level = payload.res.topiclist[0].active_topic_phase
				state.active_id = payload.res.topiclist[0].active_id;
				state.active_topic_id = payload.res.topiclist[0].active_topic_id;
			}
		} else if (payload.res.httpStatusCode == 500) {
			state.activeCodeState = 500;
			alert('活动不存在')
		} else if (payload.res.httpStatusCode == 300) {
			state.activeCodeState = 300;
			alert('活动尚未开始')
		} else if (payload.res.httpStatusCode == 301) {
			state.activeCodeState = 301;
			alert('活动已经结束')
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