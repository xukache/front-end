// 入口处引入 jquery
import $ from 'jquery'
import "./css/index.css"
import "./less/index.less"

// 编写隔行换色代码
$('#myUl>li:odd').css('color', 'red')
$('#myUl>li:even').css('color', 'green')