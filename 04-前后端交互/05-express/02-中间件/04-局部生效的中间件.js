// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()


// 定义中间件函数 mw1
const mw1 = (req, res, next) => {
  console.log("这是中间件函数");
  next();
};

// mw1 这个中间件只在”当前路由中生效“，这种用法属于”局部生效的中间件“
app.get("/", mw1, (req, res) => {
    console.log('调用 / 这个路由');
  res.send("Home page.");
});

// mw1 这个中间件不会影响下面这个路由 ↓↓↓
app.get("/user", (req, res) => {
    console.log('调用 /user 这个路由');
  res.send("User page.");
});

app.listen(80, () => {
    console.log('http://127.0.0.1');
})
