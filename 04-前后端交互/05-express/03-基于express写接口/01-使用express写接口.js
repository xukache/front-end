// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express();

// 配置解析表单数据的中间件
app.use(express.urlencoded({ extended: false }));

// 导入路由模块
const router = require("./02-apiRouter");
// 把路由模块，注册到 app 上
app.use("/api", router);

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, () => {
  console.log("http://127.0.0.1");
});
