const { defineConfig } = require("@vue/cli-service");
const webpack = require("webpack");

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
  configureWebpack: {
    plugins: [
      // Work around for Buffer is undefined:
      // https://github.com/webpack/changelog-v5/issues/10
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
    ],
    resolve: {
      extensions: [".ts", ".js"],
      fallback: {
        stream: require.resolve("stream-browserify"),
        buffer: require.resolve("buffer"),
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
    }),
      config.module
        .rule("mdx")
        .test(/\.mdx?$/)
        .use("@mdx-js/loader")
        .loader("@mdx-js/loader")
        .options({
          jsxImportSource: "vue",
        })
        .end();
  },
});
