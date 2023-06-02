import thenFs from "then-fs";

// 1. 定义一个数组，存放 3 个读文件的异步操作
const promiseArr = [
  thenFs.readFile("./files/1.txt", "utf-8"),
  thenFs.readFile("./files/2.txt", "utf-8"),
  thenFs.readFile("./files/3.txt", "utf-8"),
];
// 2. 将 Promise 的数组，作为 Promise.all() 的参数
Promise.all(promiseArr)
  .then(([r1, r2, r3]) => {
    // 2.1 所有文件读取成功（等待机制）
    console.log(r1, r2, r3);
  })
  .catch((err) => {
    // 2.2 捕获 Promise 异步操作中的错误
    console.log(err.message);
  });
