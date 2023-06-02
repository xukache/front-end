import fs from "fs";

// 1. 方法的名称为 getFile
// 2. 方法接收一个形参 fpath，表示要读取的文件的路径
function getFile(fpath) {
  // 3. 方法的返回值为 Promise 的实例对象
  // resolve 形参是：调用 getFiles() 方法时，通过 .then 指定的 ‘成功的’ 回调函数
  // reject 形参是：调用 getFiles() 方法时，通过 .then 指定的 ‘失败的’ 回调函数
  return new Promise(function (resolve, reject) {
    // 4. 这是一个具体的、读文件的异步操作
    fs.readFile(fpath, "utf-8", (err, dataStr) => {
      if (err) return reject(err); // 如果读取失败，则调用“失败的回调函数”
      resolve(dataStr); // 如果读取成功，则调用“成功的回调函数”
    });
  });
}

// getFile 方法的调用过程：
getFile("./files/1.txt").then(
  (r1) => {
    console.log(r1);
  },
  (err) => {
    console.log(err.message);
  }
);
