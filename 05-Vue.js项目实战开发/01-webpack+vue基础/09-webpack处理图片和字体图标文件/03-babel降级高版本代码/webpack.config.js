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
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        type: "asset/resource", // 所有的字体图标文件，都输出到 dist 下
        generator: {
          // 生成文件名字 - 定义规则
          filename: "fonts/[name].[hash:6][ext]", // [ext] 会替换成 .eot/.woff
        },
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/, // 不去匹配这些文件夹下的文件
        use: {
          loader: "babel-loader", // 使用这个 loader 处理 js 文件
          options: {  // 加载器选项
            presets: ["@babel/preset-env"],  // 预设：@babel/preset-env 降级规则-按照这里的规则降级我们的 js 语法
          },
        },
      },
    ],
  },
};
