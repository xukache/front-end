const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/main.js", // 入口
  output: {
    // 出口
    path: path.resolve(__dirname, "dist"), // 出口路径文件夹名字
    filename: "bundle.js", // 打包后文件名
  },
  plugins: [
    new HtmlWebpackPlugin({
      // plugins 插件配置
      template: "./public/index.html", // 告诉 webpack 使用插件时，以我们自己的 html 文件作为模板去生成 dist/html文件
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        // 图片文件的配置（只适用于webpack5版本）
        test: /\.(gif|png|jpg|jpeg")/,
        type: "asset", // 匹配上面的文件后，webpack 会把他们当作静态资源处理打包
        // 如果设置的是 asset 模式
        // 以 8kb 大小区分图片文件
        // 小于 8kb 的，把图片文件转 base64 ，打包进 js 中
        // 大于 8kb 的，直接把图片文件输出到 dist 下
      },
    ],
  },
};
