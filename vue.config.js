module.exports = {
  lintOnSave: false, // 关闭eslint规则检查

  devServer: {
    proxy: {
      '/api': { //只处理以api开头的请求
        target: 'http://182.92.128.115/', //转发的目标地址
        changeOrigin: true //支持跨域
      }
    }
  }
}