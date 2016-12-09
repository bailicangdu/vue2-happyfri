var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
    //var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./build/webpack.dev.conf')

// default port where dev server listens for incoming traffic
//var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
//var proxyTable = config.dev.proxyTable

//var app = express()
var compiler = webpack(webpackConfig)


// var devMiddleware = require('webpack-dev-middleware')(compiler, {
//     publicPath: webpackConfig.output.publicPath,
//     stats: {
//         colors: true,
//         chunks: false
//     }
// })
// 

var proxy = [{
    path: '/*/*',
    target: 'http://operating-activities.putao.com',
    host: 'operating-activities.putao.com',
    secure: false
}];

var server = new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    proxy: proxy,
    stats: {
        colors: true,
    },
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
    // force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function(compilation) {
    compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
        hotMiddleware.publish({
            action: 'reload'
        })
        cb()
    })
})

// proxy api requests
// Object.keys(proxyTable).forEach(function(context) {
//     var options = proxyTable[context]
//     if (typeof options === 'string') {
//         options = {
//             target: options
//         }
//     }
//     app.use(proxyMiddleware(context, options))
// })


// handle fallback for HTML5 history API
//server.use(require('connect-history-api-fallback')())

// serve webpack bundle output
//app.use(devMiddleware)

//app.use(DevServer)

// enable hot-reload and state-preserving
// compilation error display
server.use(hotMiddleware)

// serve pure static assets
// var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
// server.use(staticPath, express.static('./static'))
server.app.get('*', function(req, res) {
    res.sendFile(__dirname + '/index.html')
});
server.listen(8088, function() {
    console.log('正常打开8088端口')
})