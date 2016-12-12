import ajax from '../config/ajax'

export default {
	addNum({
			commit,
			state
		}, id) {
			commit('REMBER_ANSWER', {
				id
			})
			if (state.itemNum < state.itemDetail.length) {
				commit('ADD_ITEMNUM', {
					num: 1
				})
			}
		},

		getData({
			commit,
			state
		}) {
			ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=' + state.nowActive_id).
			then(res => {
				commit('GET_DATA', {
					res
				})
			})
		},

		initializeData({
			commit
		}) {
			commit('INITIALIZE_DATA')
		},

		getUserInform({
			commit
		}) {
			let urlUserID;
			let localUrl = window.location.href;
			if (/users_id=/gi.test(localUrl)) {
				urlUserID = localUrl.match(/users_id=\d+/gi)[0].match(/\d+/gi)[0];
			}

			ajax('GET', 'http://wxinterface.putaoevent.com/getuser?users_id=' + urlUserID).then(res => {
				let user_info = res.user_info;
				if (user_info !== null) {
					ajax('GET', 'http://operating-activities.putao.com/service/user/add?openid=' + user_info.openid + '&nickname=' + user_info.nickname + '&sex=' + user_info.sex + '&province=' + user_info.province + '&city=1&country=' + user_info.country + '&headimgurl=' + user_info.headimgurl + '&unionid=' + user_info.unionid).then(res => {
						commit('GET_USER_INFORM', {
							res
						})
					})
				}
			})
		}
}