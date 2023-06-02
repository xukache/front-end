// 导入模块成员
// 1. 按需导入的成员名称必须和按需导出的名称保持一致
// import {s1, s2, say} from './03-按需导出.js'
// 2. 按需导入时，可以使用as关键字进行重命名
// import {s1, s2 as str2, say} from './03-按需导出.js'
// 3. 按需导入可以和默认导入一起使用
import m2, { s1, s2 as str2, say } from "./03-按需导出.js";

console.log(s1); // aaa
console.log(str2); // ccc
console.log(say); // [Function: say]
console.log(m2);
