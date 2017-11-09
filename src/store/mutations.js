/*
 * @Author: mrjzhang
 * @Date: 2017-11-09 21:17:53
 * @Last Modified by: mrjzhang
 * @Last Modified time: 2017-11-09 21:19:11
 */
import * as types from './mutation-types'
/**
 * Vuex 中的 mutation 非常类似于事件：每个 mutation 都有一个字符串的 事件类型 (type)
 * 和 一个 回调函数 (handler)。这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
 *
 * [ADD_ITEMNUM] 这样用的原因是，export 抛出的一个对象
 * 使用类似于a['key'] 这种访问方式，实际上是为mutation对象添加了属性。
 * mutations: {
    increment (state) {
      // 变更状态
      state.count++
    }
  }
 * 实际上 ADD_ITEMNUM 就是 事件类型（type）
 */

export default {

  // 我们可以使用 ES2015 风格的计算属性命名功能来使用一个常量作为函数名
  // 点击进入下一题
  [types.ADD_ITEMNUM](state, num) {
    state.itemNum += num;
  },
  //记录答案
  [types.REMBER_ANSWER](state, id) {
    state.answerid.push(id);
  },
  /*
  记录做题时间
   */
  [types.REMBER_TIME](state) {
    state.timer = setInterval(() => {
      state.allTime++;
    }, 1000)
  },
  /*
  初始化信息，
   */
  [types.INITIALIZE_DATA](state) {
    state.itemNum = 1;
    state.allTime = 0;
    state.answerid = [];
  },
}
