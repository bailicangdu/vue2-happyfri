/*
 * @Author: mrjzhang
 * @Date: 2017-11-09 21:22:56
 * @Last Modified by: mrjzhang
 * @Last Modified time: 2017-11-09 21:26:20
 */
import Vue from 'vue'
import Router from 'vue-router'

// router module
import App from '../App'
import Item from '../page/item'
import Home from '../page/home'
/**
 *
 * 说明: require.ensure在需要的时候才下载依赖的模块
 * 当参数指定的模块都下载下来了（下载下来的模块还没执行），便执行参数指定的回调函数。require.ensure会
 * 创建一个chunk，且可以指定该chunk的名称，如果这个chunk名已经存在了，则将本次依赖的模块合并到已经存在
 * 的chunk中，最后这个chunk在webpack构建的时候会单独生成一个文件。
 *
 * 语法: require.ensure(dependencies: String[], callback: function([require]), [chunkName: String])
 * dependencies: 依赖的模块数组
 * callback: 回调函数，该函数调用时会传一个require参数
 * chunkName: 模块名，用于构建时生成文件时命名使用
 */

// 挂载Router
 Vue.use(Router)

// 定义路由规则，并输出Router对象
export default new Router({
  routes: [{
    path: '/',
    component: App,
    children: [{
      path: '',
      component: Home
    }, {
      path: '/item',
      component: Item
    }, {
      path: '/score',
      component: r => require.ensure([], () => r(require('../page/score')), 'score')
    }]
  }]
})
