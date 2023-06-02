import thenFs from "then-fs";

thenFs
  .readFile("./files/1.txt", "utf-8") // 1. 返回值是 Promise 的实例对象
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
