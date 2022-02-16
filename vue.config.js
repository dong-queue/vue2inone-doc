// function getProdExternals() {
//   return {
//     ionic: '@ionic/vue'
//   };
// }

module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title = 'v-iterator'
        return args
      })
  },
  "transpileDependencies": [
    "vuetify"
  ],
  runtimeCompiler: true,
  productionSourceMap: false,
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    externals: {
      // 'element-ui': 'element-ui',
      // 'vuetify/lib': 'vuetify/lib'
    }
  }
}