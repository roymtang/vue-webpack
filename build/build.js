'use strict'

process.env.NODE_ENV = 'production'

const ora = require('ora')
const rm = require('rimraf')
const path = require('path')
const webpack = require('webpack')
const config = require('../config')
const webpackConfig = require('./webpack.prod.conf')
const chalk = require('chalk')

const spinner = ora('building for production...')
spinner.start()

// 删除打包目标目录下的文件
rm(path.join(config.build.assetsRoot, config.build.assetsSubDirectory), err => {
    if (err) throw err
    // 进行打包
    webpack(webpackConfig, (err, stats) => {
        // 打包完成
        spinner.stop()
        if (err) throw err
        // 输出打包的状态
        process.stdout.write(stats.toString({
                colors: true,
                modules: false,
                children: false,
                chunks: false,
                chunkModules: false
            }) + '\n\n')

        if (stats.hasErrors()) {
            console.log(chalk.red('  Build failed with errors.\n'))
            process.exit(1)
        }

        console.log(chalk.cyan('  Build complete.\n'))
        console.log(chalk.yellow(
            '  Tip: built files are meant to be served over an HTTP server.\n' +
            '  Opening mobile-web-index.html over file:// won\'t work.\n'
        ))
    })
})