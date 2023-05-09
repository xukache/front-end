// 当前这个文件，就是一个用户自定义模块
console.log('hello js!');

exports = {
    username: 'zs',
    gender: '男'
}
module.exports = exports
module.exports.age = '22'