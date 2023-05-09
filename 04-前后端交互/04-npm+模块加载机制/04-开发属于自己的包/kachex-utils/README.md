## 安装

```bash
npm install kachex-utils
```

## 导入

```javascript
const kachex = require('kachex-utils')
```

## 格式化时间

```javascript
// 调用 dataeFormat 的功能对时间进行格式化
const dtStr = kachex.dateFormat(new Date())
// 2023-05-09 17:01:17
console.log(dtStr);
```

## 转义 HTML 中的特殊字符

```javascript
// 待转换的 HTML 字符串
const htmlStr = '<h1 style="color: red;">你好！©<span>小黄！</span></h1>';
// 调用 htmlEscape 方法进行转换
const str = kachex.htmlEscape(htmlStr);
// 转换的结果 <h1 style="color: red;">你好！©<span>小黄！</span></h1>
console.log(str);
```

## 还原 HTML 中的特殊字符

```javascript
// 调用 htmlUnEscape 功能进行还原后的字符串
const Unstr = kachex.htmlUnEscape(str);
// 还原的结果 <h1 style="color: red;">你好！©<span>小黄！</span></h1>
console.log(Unstr);
```

## 开源协议

ISC
