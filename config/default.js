module.exports = {
  runtimeConfig: {
    experimentalFeatures: {
      html5player: true,
      featureFoo: false
    },

    thirdPartyApiKey: 'abcdefg123456'
  },

  devServer: {
    port: 8100,
    proxy: {
      '/api/collectJob/': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      },

      '/api/pay/': {
        target: 'http://pay.example.dev',
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      }
    }
  }
}
