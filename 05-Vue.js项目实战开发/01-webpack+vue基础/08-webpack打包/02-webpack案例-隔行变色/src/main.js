// 入口处引入 jquery
import $ from 'jquery'

// 编写隔行换色代码
$('#myUl>li:odd').css('color', 'red')
$('#myUl>li:even').css('color', 'green')