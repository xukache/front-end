$(function () {
  // 定义补零函数
  function padZero(n) {
    // if (n < 10) {
    //   return '0' + n
    // } else {
    //   return n
    // }
    return n < 10 ? '0' + n : n 
  }


  // 定义格式化时间的过滤器
  template.defaults.imports.dateFormat = function (dtStr) {
    let dt = new Date(dtStr)
    
    let year = dt.getFullYear()
    let month = padZero(dt.getMonth() + 1) 
    let date = padZero(dt.getDate()) 

    let hour = padZero(dt.getHours()) 
    let minute = padZero(dt.getMinutes()) 
    let seconds = padZero(dt.getSeconds())  

    return `${year}-${month}-${date} ${hour}:${minute}:${seconds}`
  }


  // 获取新闻列表
  function getNewsList() {
    $.get("http://www.liulongbin.top:3006/api/news", function (res) {
      if (res.status !== 200) {
        return alert("获取新闻列表失败！");
      }
      for (let i = 0; i < res.data.length; i++) {
        // 把tags进行切分
        res.data[i].tags = res.data[i].tags.split(',')
      }
      // console.log(res)
      let htmlStr = template("tpl-news", res);
      $("#news-list").html(htmlStr);
    });
  }

  getNewsList();
});
