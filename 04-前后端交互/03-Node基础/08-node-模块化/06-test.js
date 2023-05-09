// 在外界使用 require 导入一个自定义模块的时候，得到的成员，就是 module.exports 所指向的对象
const m = require('./05-自定义模块')

console.log(m);