const ADD_SCORES = 'ADD_SCORES'

export default {
	[ADD_SCORES](state, payload) {
		state.scores += payload.num;
	}
}