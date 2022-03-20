module.exports = {
  // lintOnSave: false,
  productionSourceMap: false,
  devServer: {
    open: true,
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://39.98.123.211',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api'
        }
      }
    }
  },
  chainWebpack: config => {
    const oneOfsMap = config.module.rule('scss').oneOfs.store
    oneOfsMap.forEach(item => {
      item
        .use('sass-resources-loader')
        .loader('sass-resources-loader')
        .options({
          // 要公用的scss的路径
          resources: './src/assets/css/variables.scss'
        })
        .end()
    })
  }
}
