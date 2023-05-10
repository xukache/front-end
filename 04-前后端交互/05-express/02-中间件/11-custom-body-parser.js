// 3.1 导入 Node.js 内置的 querystring 模块
const qs = require("querystring");

// 这是解析表单数据的中间件函数
const bodyParser = (req, res, next) => {
  // 定义中间件具体的业务逻辑
  // 1.1 定义 str 变量，用来存储客户端发送过来的请求体数据
  let str = "";
  // 1.2 监听 req 的 data 事件
  req.on("data", (chunk) => {
    str += chunk;
  });

  // 2.1 监听 req 的 end 事件
  req.on("end", () => {
    // 在 str 中存放的是完整的请求体数据
    // console.log(str);
    // 3.2 把字符串格式的请求体数据，解析成对象格式
    const body = qs.parse(str);
    // console.log(body);
    // 4.1 将解析出来的请求体对象，挂载为 req.body 属性
    req.body = body;
    // 4.2 最后，一定要调用 next() 函数，执行后续的业务逻辑
    next();
  });
};

module.exports = {
    bodyParser
}
