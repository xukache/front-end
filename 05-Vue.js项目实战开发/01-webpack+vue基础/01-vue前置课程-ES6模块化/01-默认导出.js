let n1 = 10  // 定义模块私有化成员 n1
let n2 = 20  // 定义模块化私有成员 n2 （外界访问不到 n2，因为它没有被共享出去）

function show() {}  // 定义模块私有方法 show

export default {  // 使用 export default 默认导出语法，向外共享 n1 和 show 两个成员
    n1,
    show
}