// 入口处引入 jquery
import $ from "jquery";
import "./css/index.css";
import "./less/index.less";
// 手动引入一个图片文件
import imgObj from "./assets/1.gif";
// 引入字体图标的样式文件
import "./assets/fonts/iconfont.css"

// 编写隔行换色代码
// 修改前 red 修改后 blue
$("#myUl>li:odd").css("color", "blue");
$("#myUl>li:even").css("color", "green");

let theImg = document.createElement("img");
theImg.src = imgObj;
document.body.appendChild(theImg);

let theI = document.createElement("i")
theI.className = "iconfont icon-qq"
document.body.appendChild(theI)

// 书写高版本的js语法
const fn = () => {console.log("我是一个箭头函数");}
console.log(fn);