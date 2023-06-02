const fs = require("fs");

// 读取文件 1.txt
fs.readFile("./files/1.txt", "utf-8", (err1, r1) => {
  if (err1) return console.log(err1.message); // 读取文件 1 失败
  console.log(r1); // 读取文件 1 成功，打印文件信息

  // 读取文件 2.txt
  fs.readFile("./files/2.txt", "utf-8", (err2, r2) => {
    if (err2) return console.log(err2.message); // 读取文件 2 失败
    console.log(r2); // 读取文件 2 成功，打印文件信息

    // 读取文件 3.txt
    fs.readFile("./files/3.txt", "utf-8", (err3, r3) => {
      if (err3) return console.log(err3.message); // 读取文件 3 失败
      console.log(r3); // 读取文件 3 成功，打印文件信息
    });
  });
});
