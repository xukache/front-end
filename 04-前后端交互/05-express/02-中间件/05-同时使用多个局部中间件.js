// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express();

// 定义中间件函数
const mw1 = (req, res, next) => {
  console.log("这是中间件函数mw1");
  next();
};
// 定义中间件函数
const mw2 = (req, res, next) => {
  console.log("这是中间件函数mw2");
  next();
};

// 创建路由
app.get("/", mw1, mw2, (req, res) => {
  console.log("调用 / 这个路由");
  res.send("Home page.");
});

app.get("/user", [mw2, mw1], (req, res) => {
  console.log("调用 /user 这个路由");
  res.send("User page.");
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
