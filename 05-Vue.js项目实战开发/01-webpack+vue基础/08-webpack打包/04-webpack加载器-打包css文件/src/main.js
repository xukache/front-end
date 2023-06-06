// 入口处引入 jquery
import $ from 'jquery'
import "./css/index.css"

// 编写隔行换色代码
$('#myUl>li:odd').css('color', 'red')
$('#myUl>li:even').css('color', 'green')