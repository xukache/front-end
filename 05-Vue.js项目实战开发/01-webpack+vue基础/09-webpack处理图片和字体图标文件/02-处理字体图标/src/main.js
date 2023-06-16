// 入口处引入 jquery
import $ from "jquery";
import "./css/index.css";
import "./less/index.less";
// 手动引入一个图片文件
import imgObj from "./assets/1.gif";
// 引入字体图标的样式文件
import "./assets/fonts/iconfont.css"

// 编写隔行换色代码
$("#myUl>li:odd").css("color", "red");
$("#myUl>li:even").css("color", "green");

let theImg = document.createElement("img");
theImg.src = imgObj;
document.body.appendChild(theImg);

let theI = document.createElement("i")
theI.className = "iconfont icon-qq"
document.body.appendChild(theI)
