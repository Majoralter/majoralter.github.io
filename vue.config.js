const { defineConfig } = require('@vue/cli-service')

// vue.config.js
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "@/styles/main.scss";`,
      },
    },
  },
  chainWebpack: (config) => {
    config.plugin("define").tap((definitions) => {
      Object.assign(definitions[0], {
        __VUE_OPTIONS_API__: "true",
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "true",
      });
      return definitions;
    });
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/majoralter.github.io/'
    : '/',
});
