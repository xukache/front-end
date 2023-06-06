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
  module: {  // 加载器配置
    rules: [  // 规则
      {  // 一个具体的规则对象
        test: /\.css$/,  // 匹配以 .css 结尾的文件
        use: ["style-loader", "css-loader"],  // webpack 使用这2个 loader 处理 css 文件
        // 从右到左的，所有不能颠倒顺序
        // css-loader: webpack 解析 css 文件----把 css 代码一起打包进 js 中
        // style-loader: css 代码插入到 DOM 上 （style标签）
      },
    ],
  },
};
