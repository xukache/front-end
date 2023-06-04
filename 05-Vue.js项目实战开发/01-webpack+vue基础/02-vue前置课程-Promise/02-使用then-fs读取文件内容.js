import thenFs from 'then-fs'

// 注意：.then() 中的失败回调是可选的，可以被省略
thenFs.readFile('./files/1.txt', 'utf-8').then((r1) => {console.log(r1);})
thenFs.readFile('./files/2.txt', 'utf-8').then((r2) => {console.log(r2);})
thenFs.readFile('./files/3.txt', 'utf-8').then((r3) => {console.log(r3);})