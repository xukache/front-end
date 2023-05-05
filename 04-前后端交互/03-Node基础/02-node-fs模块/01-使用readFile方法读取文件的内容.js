// 1. 导入 fs 模块，来操作文件
const fs = require('fs')
// 2. 调用 fs.readFile() 方法读取文件
// 参数1：读取文件的存放路径
// 参数2：读取文件时候采用的编码格式，默认指定utf8
// 参数3：回调函数，霸道读取失败和成功的结果 err 和 dataStr
fs.readFile('./files/1.txt', 'utf8', function(err, dataStr) {
    // 2.1 打印失败的结果
    // 如果读取成功，则 err 为 null 
    // 如果读取失败，则 err 为 错误对象，dataStr的值为undefined
    console.log(err);
    console.log('---------');
    // 2.2 打印成功的结果
    console.log(dataStr);
})