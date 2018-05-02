'use strict'
const path = require('path')
const utils = require('./utils')
const config = require('../config')
var webpack = require('webpack')

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

module.exports = {
    context: path.resolve(__dirname, '../'),
    entry: {
        'mobile-app-index': './src/front/mobile-app/main.js',
        'mobile-web-index': './src/front/mobile-web/main.js',
        'pc-app-index': './src/front/pc-app/main.js',
        'pc-web-index': './src/front/pc-web/main.js',
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].js',
        publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            'src': path.resolve(__dirname, '../src'),
            'config': path.resolve(__dirname, '../config'),
            'components': path.resolve(__dirname, '../src/components'),
            'mobileWeb': path.resolve(__dirname, '../src/front/mobile-web'),
            'mobileApp': path.resolve(__dirname, '../src/front/mobile-app'),
            'pcWeb': path.resolve(__dirname, '../src/front/pc-web'),
            'pcApp': path.resolve(__dirname, '../src/front/pc-app')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: resolve('src'),
                exclude: /node_modules/
            },
            {
                test: /\.svg$/,
                loader: 'svg-sprite-loader',
                include: [resolve('src/front/common/icons')],
                options: {
                    symbolId: 'icon-[name]'
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                exclude: [resolve('src/front/common/icons')],
                options: {
                    limit: 10000,
                    name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:7].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                }
            }
        ]
    }
}