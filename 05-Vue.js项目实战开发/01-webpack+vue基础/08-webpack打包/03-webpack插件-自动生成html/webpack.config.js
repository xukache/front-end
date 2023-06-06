const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/main.js',  // 入口
  output: {  // 出口
    path: path.resolve(__dirname, 'dist'),  // 出口路径文件夹名字
    filename: 'bundle.js'  // 打包后文件名
  },
  plugins: [new HtmlWebpackPlugin({  // plugins 插件配置
    template: './public/index.html'  // 告诉 webpack 使用插件时，以我们自己的 html 文件作为模板去生成 dist/html文件
  })]
};