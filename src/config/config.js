const targetUrl = process.env.NODE_ENV == 'development' ? '' : 'http://test.fe.ptdev.cn/happyfri/'
const basePath = 'http://test.fe.ptdev.cn/happyfri/'
const urlArr = ['static/img/2-1.png', 'static/img/4-1.jpg', 'static/img/4-2.png', 'static/img/4-3.png', 'static/img/4-4.png', 'static/img/5-2.png']
const weixinOrder = 3;
let url = window.location.href;
let activeTopicId = url.match(/active_topic_id=\d+/gi) && url.match(/active_topic_id=\d+/gi)[0] || '';


export {
	targetUrl,
	basePath,
	urlArr,
	weixinOrder,
	activeTopicId
}