const ADD_ITEMNUM = 'ADD_ITEMNUM'

export default {
	[ADD_ITEMNUM](state, payload) {
		state.itemNum += payload.num;
	}
}