import ajax from '../config/ajax'

export default {
    addNum({ commit, state }, id) {
        commit('REMBER_ANSWER', { id })
        if (state.itemNum < state.itemDetail.length) {
            commit('ADD_ITEMNUM', { num: 1 })
        }
    },

    getData({ commit, state }) {
        ajax('GET', 'http://operating-activities.putao.com/happyfriday?active_topic_id=4').
        then(res => {
            commit('GET_DATA', { res })
        })
    },

    remberTime({commit, state}){
    	state.timer = setInterval(() => {
			commit('REMBER_TIME')
		}, 1000)
    }
}
