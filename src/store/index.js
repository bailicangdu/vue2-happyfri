import Vue from 'vue'
import Vuex from 'vuex'

import mutations from './mutations'
import actions from './actions'
import ajax from '../config/ajax'


Vue.use(Vuex)

// 全局状态机 state，简单理解，这个对象中的数据全局都会使用，现在在index.js中初始化值
const state = {
  level: '第一周', //活动周数
  itemNum: 1, // 第几题
  allTime: 0, //总共用时
  timer: '', //定时器
  itemDetail: [{
    "topic_id": 20,
    "active_topic_id": 4,
    "type": "ONE",
    "topic_name": "题目一",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 1,
      "topic_id": 20,
      "answer_name": "答案aaaa",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 2,
      "topic_id": 20,
      "answer_name": "正确答案",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 3,
      "topic_id": 20,
      "answer_name": "答案cccc",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 4,
      "topic_id": 20,
      "answer_name": "答案dddd",
      "is_standard_answer": 1
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目二",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 5,
      "topic_id": 21,
      "answer_name": "答案A",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 6,
      "topic_id": 21,
      "answer_name": "答案B",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 7,
      "topic_id": 21,
      "answer_name": "正确答案",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 8,
      "topic_id": 21,
      "answer_name": "答案D",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目三",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 9,
      "topic_id": 21,
      "answer_name": "测试A",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 10,
      "topic_id": 21,
      "answer_name": "BBBBBB",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 11,
      "topic_id": 21,
      "answer_name": "CCCCCC",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 12,
      "topic_id": 21,
      "answer_name": "正确答案",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目四",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    // 四个选项，is_standard_answer表示是否是正确答案
    "topic_answer": [{
      "topic_answer_id": 13,
      "topic_id": 21,
      "answer_name": "正确答案",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 14,
      "topic_id": 21,
      "answer_name": "A是错的",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 15,
      "topic_id": 21,
      "answer_name": "D是对的",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 16,
      "topic_id": 21,
      "answer_name": "C说的不对",
      "is_standard_answer": 0
    }]
  }, {
    "topic_id": 21,
    "active_topic_id": 4,
    "type": "MORE",
    "topic_name": "题目五",
    "active_id": 1,
    "active_title": "欢乐星期五标题",
    "active_topic_phase": "第一周",
    "active_start_time": "1479139200",
    "active_end_time": "1482163200",
    "topic_answer": [{
      "topic_answer_id": 17,
      "topic_id": 21,
      "answer_name": "错误答案",
      "is_standard_answer": 1
    }, {
      "topic_answer_id": 18,
      "topic_id": 21,
      "answer_name": "正确答案",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 19,
      "topic_id": 21,
      "answer_name": "错误答案",
      "is_standard_answer": 0
    }, {
      "topic_answer_id": 20,
      "topic_id": 21,
      "answer_name": "错误答案",
      "is_standard_answer": 0
    }]
  }],
  answerid: [], //答案id，记录用户的选择的答案数组。
}

// 输出一个三个参数（状态state,动作actions,突变mutations）实例化之后的Vuex对象
export default new Vuex.Store({
  state,
  actions,
  mutations
})
