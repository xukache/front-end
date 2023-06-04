import db from "../db/index.js";

// 使用 ES6 的按需导出语法， 将 getAllUser 方法导出出去
export async function getAllUser(req, res) {
  // 使用 try...catch 捕获 Promise 异步任务中产生的异常错误，并在 catch 块中进行处理

  try {
    // db.query() 的函数返回值是 Promise 的实例对象，因此，可以使用 async/await 进行简化
    // ev_users 表中没有 xxx 字段，所以此 SQL 语句会“执行异常”
    const [rows] = await db.query(
      "select id, username, nickname, xxx from ev_users"
    );
    res.send({
      status: 0,
      message: "获取用户列表数据成功！",
      data: rows,
    });
  } catch (e) {
    res.send({
      status: 1,
      message: "获取用户列表数据失败！",
      desc: e.message,
    });
  }
}
