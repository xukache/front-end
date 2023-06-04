/*
    1. 如果在 function 中使用了 await ，则 function 必须被 async 修饰；
    2. 在 async 方法中，第一个 await 之前的代码会同步执行， await 之后的代码会异步执行
*/
import thenFs from "then-fs";

console.log("A");
async function getFile() {
  console.log("B");
  const r1 = await thenFs.readFile("./files/1.txt", "utf-8");
  const r2 = await thenFs.readFile("./files/2.txt", "utf-8");
  const r3 = await thenFs.readFile("./files/3.txt", "utf-8");
  console.log(r1, r2, r3);
  console.log("D");
}

getFile();
console.log("C");
