const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  outputDir:'word',
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/",
})
