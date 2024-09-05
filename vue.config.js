const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    allowedHosts: "all",
    proxy: {    
    '/emartapi': {
      target: 'https://eapp.emart.com', 
      changeOrigin: true,
      pathRewrite: {'^/emartapi':'/emartapi/storeInfo/getStoreDetailInfo.do'}
    }
  },
},
})
