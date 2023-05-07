const path = require("path");

// 注意： ../ 会抵消前面的路径
const pathStr = path.join("/a", "/b/c", "../", "./d", "e");
console.log(pathStr);  // 输出 \a\b\d\e

const pathStr2 = path.join(__dirname, './file/1.txt')
console.log(pathStr2) 