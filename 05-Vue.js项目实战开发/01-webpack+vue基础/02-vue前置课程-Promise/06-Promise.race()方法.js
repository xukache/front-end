import thenFs from "then-fs";

// 1. 定义一个数组，存放 3 个读文件的异步操作
const promiseArr = [
  thenFs.readFile("./files/1.txt", "utf-8"),
  thenFs.readFile("./files/2.txt", "utf-8"),
  thenFs.readFile("./files/3.txt", "utf-8"),
];
// 2. 将 Promise 的数组，作为 Promise.all() 的参数
Promise.race(promiseArr)
  .then((result) => {
    // 2.1 只要任何一个异步操作完成，就立即执行成功的回调函数（赛跑机制）
    console.log(result);
  })
  .catch((err) => {
    // 2.2 捕获 Promise 异步操作中的错误
    console.log(err.message);
  });
