import App from '../App'

export default [{
    path: '/',
    component: App,
    children: [{
        path: '',
        component: r => require.ensure([], () => r(require('../page/home/index')), 'home')
    }, {
        path: '/item',
        component: r => require.ensure([], () => r(require('../page/item/index')), 'item')
    }, {
        path: '/score',
        component: r => require.ensure([], () => r(require('../page/score/index')), 'score')
    }]
}]