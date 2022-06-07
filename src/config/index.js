// 'use strict'
// // Template version: 1.3.1
// // see http://vuejs-templates.github.io/webpack for documentation.
//
// const path = require('path')
//
// module.exports = {
//
//     /**
//      * 开发环境下，启动项目配置
//      */
//
//     dev: {
//
//         // Paths fiddler charles
//         assetsSubDirectory: 'static',
//         assetsPublicPath: '/',
//         proxyTable: {
//             '/api': {
//                 target: 'http://localhost:8080',
//                 secure: false, // 如果是https接口，需要配置这个参数
//                 changeOrigin: true, // 这个参数是用来回避跨站问题的，配置完之后发请求时会自动修改http header里面的host
//                 pathRewrite: {
//                     '^/api': '/static/mock'
//                 }
//             }
//         },
//
//         // Various Dev Server settings
//         host: 'localhost', // can be overwritten by process.env.HOST
//         port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
//         autoOpenBrowser: false, // 热启动，启动时，自动在浏览器中打开 localhost:8080
//         errorOverlay: true, // 是否显示错误信息覆盖层
//         notifyOnErrors: true, // 是否在浏览器右侧划入错误提示，跨平台错误提示
//         //使用文件系统(file system)获取文件改动的通知devServer.watchOptions
//         poll: true, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-
//
//         // Use Eslint Loader?
//         // If true, your code will be linted during bundling and
//         // linting errors and warnings will be shown in the console.
//         useEslint: true, // 是否开启eslint
//         // If true, eslint errors and warnings will also be shown in the error overlay
//         // in the browser.
//         showEslintErrorsInOverlay: false, // 是否将eslint检测结果在浏览器的遮罩层中显示
//
//         /**
//          * Source Maps
//          */
//
//         // https://webpack.js.org/configuration/devtool/#development
//         devtool: 'cheap-module-eval-source-map', // 选择一种源映射样式，以增强调试过程。这些值会极大地影响构建和重建速度。
//
//         // If you have problems debugging vue-files in devtools,
//         // set this to false - it *may* help
//         // https://vue-loader.vuejs.org/en/options.html#cachebusting
//         cacheBusting: true, // 使缓存失效
//
//         cssSourceMap: true // 开发环境，运行项目时候，是显示 css 源映射
//     },
//
//     /**
//      * 项目构建配置
//      * 打包后的默认目录结构
//      * dist/
//      *  /static 静态资源文件
//      *    /css 样式文件
//      *    /img 资源文件
//      *    /fonts 字体文件
//      *    /js 脚本文件
//      *    /mock 模拟数据
//      *  /index.html 项目启动页面
//      *
//      *  打包文件放在assetsRoot目录
//      *  入口文件路径及文件名通过index字段设置
//      *  资源文件放在 assetsSubDirection 目录下
//      *  assetsPublicPath 设置发布到服务端相对路径
//      */
//
//     build: {
//         // Template for index.html
//         index: path.resolve(__dirname, '../dist/index.html'), // 入口文件
//
//         // Paths
//         assetsRoot: path.resolve(__dirname, '../dist'), // 打包后文件要存放的路径
//         assetsSubDirectory: 'static', // 除了 index.html 之外的静态资源要存放的路径，
//         assetsPublicPath: './', // 代表打包后，index.html里面引用资源的的相对地址
//
//         /**
//          * assetsPublicPath
//          * 如果最终访问地址是 http://localhost/Webapp/vue/app/travel/dist/index.html
//          * assetsPublicPath 需要设置为,assetsPublicPath: '/Webapp/vue/app/travel/dist/'
//          * 如果最终访问地址是 http://localhost/index.html
//          * assetsPublicPath 默认即可,assetsPublicPath: '/'
//          * 如果assetsPublicPath: './'
//          * index.html
//          * <link href=./static/css/app.af1fc40603072f4fc938ac831e2a3798.css rel=stylesheet>
//          * <script type=text/javascript src=./static/js/manifest.494d8a60a59385dea7ce.js></script>
//          * <script type=text/javascript src=./static/js/vendor.decd378ecb1aa36502ff.js></script>
//          * <script type=text/javascript src=./static/js/app.0e25514bbe180e2301ff.js></script>
//          */
//
//         /**
//          * Source Maps
//          */
//
//         productionSourceMap: true, // 是否开启 Source Maps, 生成源映射
//         // https://webpack.js.org/configuration/devtool/#production
//         devtool: '#source-map', // 选择一种源映射样式，以增强调试过程。这些值会极大地影响构建和重建速度。
//
//         // Gzip off by default as many popular static hosts such as
//         // Surge or Netlify already gzip all static assets for you.
//         // Before setting to `true`, make sure to:
//         // npm install --save-dev compression-webpack-plugin
//         productionGzip: false,
//         productionGzipExtensions: ['js', 'css'],
//
//         // Run the build command with an extra argument to
//         // View the bundle analyzer report after build finishes:
//         // `npm run build --report`
//         // Set to `true` or `false` to always turn it on or off
//         bundleAnalyzerReport: process.env.npm_config_report // 构建统计信息
//     }
// }
