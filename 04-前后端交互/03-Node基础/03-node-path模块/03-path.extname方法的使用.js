const path = require('path')

// 路径字符串
const fpath = '/a/b/c/index.html'

const fext = path.extname(fpath)
console.log(fext);  // .html