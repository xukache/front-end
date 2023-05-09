const kachex = require("./kachex-utils");

// 格式化时间的功能
// const dtStr = kachex.dateFormat(new Date())
// // 2023-05-09 17:01:17
// console.log(dtStr);

// 转义 html 字符的功能
const htmlStr = '<h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>';
const str = kachex.htmlEscape(htmlStr);
// &lt;h1 style=&quot;color: red;&quot;&gt;你好！&amp;copy;&lt;span&gt;小黄！&lt;/span&gt;&lt;/h1&gt;
console.log(str);

// 还原 html 字符的功能
const Unstr = kachex.htmlUnEscape(str);
// <h1 style="color: red;">你好！&copy;<span>小黄！</span></h1>
console.log(Unstr);
