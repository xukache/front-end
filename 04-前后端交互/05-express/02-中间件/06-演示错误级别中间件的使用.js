// 导入 express 模块
const express = require("express");
// 创建 express 的服务器实例
const app = express()

app.get('/', (req, res) => {
    // 1.1 人为制造错误
    throw new Error('服务器内部发生了错误！')
    res.send('Home page.')
})

// 2. 定义错误级别的中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use((err, req, res, next) => {
    console.log('发生了错误!' + err.message);
    res.send('Error:' + err.message)
})

// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(80, () => {
    console.log('http://127.0.0.1');
})

