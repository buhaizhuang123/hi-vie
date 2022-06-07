const Version = new Date().getTime() + '-2.0.0.2'
const webpack = require('webpack')
module.exports = {
    publicPath: './',
    lintOnSave: false,
    outputDir: 'dist', // 构建输出目录
    assetsDir: 'assets', // 静态资源目录 (js, css, img, fonts)
    configureWebpack: {
        output: {
            filename: `js/[name].${Version}.js`,
            chunkFilename: `js/[name].${Version}.js`
        },
        plugins: [
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'windows.jQuery': 'jquery'
            })
        ]
    },
    devServer: {
        disableHostCheck: true,
        port: 8081,
        proxy: {
            '/doc': {
                target: 'http://localhost:8911/',
                changeOrigin: true,
                ws: false,
                // pathRewrite:{
                //     '^/doc':''
                // }
            }
        }
    }
}
