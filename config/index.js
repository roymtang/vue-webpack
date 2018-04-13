'use strict'

const path = require('path')

module.exports = {
    dev: {
        // 静态资源文件夹
        assetsSubDirectory: 'static',
        //发布路径
        assetsPublicPath: '/',
        // 代理配置表，在这里可以配置特定的请求代理到对应的API接口
        // 例如将'localhost:8080/api/xxx'代理到'www.example.com/api/xxx'
        proxyTable: {},
        host: 'localhost',
        port: 8080,
        //自动打开浏览器
        autoOpenBrowser: true,
        // 在浏览器是否展示错误蒙层
        errorOverlay: true,
        // 是否展示错误通知
        notifyOnErrors: true,
        // 关闭css的source map
        cssSourceMap: false
    },

    build: {
        // index.html文件的生成地方
        index: path.resolve(__dirname, '../dist/index.html'),
        // 编译生成的文件目录
        assetsRoot: path.resolve(__dirname, '../dist'),
        // 编译生成的静态文件目录
        assetsSubDirectory: 'static',
        // 编译发布的根目录，可配置为资源服务器域名或者cdn域名
        assetsPublicPath: '/',

        productionSourceMap: true,
        // https://webpack.js.org/configuration/devtool/#production
        devtool: '#source-map',

        // 是否开启生产环境的gzip压缩
        productionGzip: false,
        // 开启gzip压缩的文件的后缀名称，
        productionGzipExtensions: ['js', 'css'],
    }
}