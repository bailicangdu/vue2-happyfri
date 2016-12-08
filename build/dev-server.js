require('./check-versions')()
var config = require('../config')
if (!process.env.NODE_ENV) process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var opn = require('opn')
var WebpackDevServer = require('webpack-dev-server')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
    // Define HTTP proxies to your custom API backend
    // https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

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
    target: 'http://download.fir.im',
    host: 'download.fir.im',
    secure: false
}];

var app = new WebpackDevServer(compiler, {
    publicPath: webpackConfig.output.publicPath,
    proxy: proxy,
    stats: {
        colors: true,
        chunks: false
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
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
//app.use(devMiddleware)

//app.use(DevServer)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

// app.app.get('*', function(req, res) {
//     res.sendFile('/project/happyfri/happyfri/happyfri/index.html')
// });
module.exports = app.listen(port, function(err) {
    if (err) {
        console.log(err)
        return
    }
    var uri = 'http://localhost:' + port
    console.log('Listening at ' + uri + '\n')

    // when env is testing, don't need open it
    if (process.env.NODE_ENV !== 'testing') {
        //opn(uri)//自动打开浏览器
    }
})