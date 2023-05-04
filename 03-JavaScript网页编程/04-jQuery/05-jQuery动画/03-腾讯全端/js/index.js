// 自调用函数(自执行函数)
(function () {
  // 1. 顶部高亮
  // 页面只要滚动为顶部添加高亮效果，在顶部时移除高亮
  // 分析：
  // 1.1 注册页面滚动事件 window，scroll
  // 1.2 获取滚动距离 html
  // 1.3 切换高亮效果 切换类名（scrolled）

  $(window).on("scroll", function () {
    let scrollTop = $("html").scrollTop();
    if (scrollTop === 0) {
      $(".header").removeClass("scrolled");
    } else {
      $(".header").addClass("scrolled");
    }
  });

  // 2. 返回顶部
  // 滚动距离超过200显示返回顶部，小于则隐藏，点击让页面滚回顶部
  // 分析：
  // 2.1 注册页面滚动事件并获取滚动距离
  // 2.2 切换显示隐藏 css方法，display样式

  $(window).on("scroll", function () {
    let scrollTop = $("html").scrollTop();
    if (scrollTop > 200) {
      // $('.gotop').css('display', 'block')
      // $('.gotop').show(1000)
      // $('.gotop').fadeIn(1000)
      $(".gotop")
        .stop()
        .slideDown(1000);
    } else {
      // $('.gotop').css('display', 'none')
      // $('.gotop').hide(1000)
      // $('.gotop').fadeOut(1000)
      $(".gotop")
        .stop()
        .slideUp(1000);
    }
  });

  // 3. 返回顶部-点击返回
  $(".gotop").on("click", function () {
    $("html").animate({
      scrollTop: 0
    })
  });
})();
