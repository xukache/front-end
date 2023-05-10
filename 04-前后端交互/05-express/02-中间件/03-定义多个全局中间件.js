const express = require("express");
const app = express();

// 定义第一个全局中间件
app.use((req, res, next) => {
  console.log("调用了第1个全局中间件");
  next();
});

// 定义第二个全局中间件
app.use((req, res, next) => {
  console.log("调用了第2个全局中间件");
  next();
});

app.get("/user", (req, res) => {
  console.log("调用了 /user 这个路由");
  res.send("调用了 /user 这个路由");
});

app.listen(80, () => {
  console.log("http://127.0.0.1");
});
