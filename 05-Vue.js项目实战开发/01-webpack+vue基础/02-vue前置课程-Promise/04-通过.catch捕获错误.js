import thenFs from "then-fs";

thenFs
  .readFile("./files/11.txt", "utf-8") // 文件不存在导致读取失败，后面的 3 个 .then 都不执行
  .catch((err) => {
    // 捕获第 1 行发生的错误，并输出错误的消息
    console.log(err.message);
  })
  .then((r1) => {
    // 2. 通过 .then 为第一个 Promise 实例指定成功之后的回调函数
    console.log(r1);
    return thenFs.readFile("./files/2.txt", "utf-8"); // 3. 在第一个 .then 中返回一个新的 Promise 实例对象
  })
  .then((r2) => {
    console.log(r2);
    return thenFs.readFile("./files/3.txt", "utf-8");
  })
  .then((r3) => {
    console.log(r3);
  });
