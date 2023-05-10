// 1. 导入 express
const express = require("express");
// 2. 创建 web 服务器
const app = express();

// 4. 监听客户端的 GET 和 POST 请求，并向客户端响应具体的内容
app.get("/user", (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 JSON 对象
  res.send({ name: "zs", age: 20, gender: "男" });
});
app.post("/user", (req, res) => {
  // 调用 express 提供的 res.send() 方法，向客户端响应一个 文本字符串
  res.send('请求成功');
});

// 3. 调用 app.listen(端口号，启动成功后的回调函数)，启动服务器
app.listen(80, () => {
  console.log("express server running at http://127.0.0.1");
});

app.get('/', (req, res) => {
  // req.query 默认是一个空对象
  // 客户端使用 ?name=zs&age=20 这种查询字符串形式，发送到服务器的参数，可以通过 req.query 对象访问到，例如：
  // req.query.name   req.query.age
  console.log(req.query)
  res.send(req.query)
})

// 注意：这里的 :id 是一个动态参数
app.get('/user/:id', (req, res) => {
  // req.params 是动态匹配到的 URL 参数，默认也是一个空对象
  console.log(req.params);
  res.send(req.params)
})