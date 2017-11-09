// 无效引入
import ajax from '../config/ajax'

/**
 * Action 提交的是 mutation，而不是直接变更状态。
 * Action 可以包含任意异步操作。
 */
export default {
  addNum({ commit, state }, id) {
    //点击下一题，记录答案id，判断是否是最后一题，如果不是则跳转下一题
    commit('REMBER_ANSWER', id);
    if (state.itemNum < state.itemDetail.length) {
      commit('ADD_ITEMNUM', 1);
    }
  },
  //初始化信息
  initializeData({ commit }) {
    commit('INITIALIZE_DATA');
  }
}
