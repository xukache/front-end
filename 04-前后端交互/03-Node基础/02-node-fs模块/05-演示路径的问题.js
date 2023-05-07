const fs = require("fs");

// 出现路径拼接错误的问题，是因为提供了 ./ 或 ../ 开头的相对路径
// 如果要解决这个问题，可以直接提供一个完整的文件路径
// 移植性非常差，不利于维护
// fs.readFile('E:\\Study\\前端\\黑马\\04-前后端交互\\03-Node基础\\02-node-fs模块\\files\\1.txt', 'utf8',function (err, dataStr) {
//     if (err) {
//         return console.log('读取文件失败！' + err.message);
//     }

//     console.log('读取文件成功！' + dataStr);
// })

// 完美解决方案
// __dirname 表示当前文件所处的目录
fs.readFile(__dirname + "/files/1.txt", "utf8", function (err, dataStr) {
  if (err) {
    return console.log("读取文件失败！" + err.message);
  }

  console.log("读取文件成功！" + dataStr);
});
