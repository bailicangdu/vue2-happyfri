var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./build/webpack.dev.conf.js');


var proxy = [{
	path: '/*/*', //必须得有一个文件地址，如果顶层文件夹名字不同，则用/*/代替
	target: 'http://download.fir.im',
	host: 'download.fir.im',
	secure: false
}];
var server = new WebpackDevServer(webpack(config), {
	publicPath: config.output.publicPath,
	proxy: proxy,
	progress: true,
	stats: {
		colors: true
	}
});

//将其他路由，全部返回index.html
server.app.get('*', function(req, res) {
	res.sendFile(__dirname + '/index.html')
});
server.listen(8090, function() {
	console.log('正常打开8090端口')
});