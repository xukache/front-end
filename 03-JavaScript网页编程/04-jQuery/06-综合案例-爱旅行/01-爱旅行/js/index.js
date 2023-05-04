;(function () {
  // 1. 返回顶部
  // 页面滚动距离大于某个值时淡入，小于时淡出，点击时以动画的方式让页面返回顶部
  // 分析：
  // 1.1 注册页面滚动事件 window，scroll
  // 1.2 获取滚动距离 200，html，scrollTop
  // 1.3 淡入淡出效果 fadeIn，fadeOut
  // 1.4 点击返回顶部

  $(window).on('scroll', function() {
    $('.gotop').hide()
    // console.log('kaishigunl')
    let top = $('html').scrollTop()
    // console.log(top)
    if (top > 200) {
      $('.gotop').stop().fadeIn(1000)
    } else {
      $('.gotop').stop().fadeOut(1000)
    }
  })

  $('.gotop').on('click', function () {
    $('html').animate({
      scrollTop: 0
    })
  })

  // 2. 意见反馈
  // 点击意见反馈展开反馈窗口，点击关闭按钮收起反馈窗口
  // 分析
  // 2.1 点击展开反馈窗口 click, slideDown
  // 2.2 点击关闭收起反馈窗口 click, slideUp
  $('.suggest').on('click', function () {
    $('.sugform').slideDown()
  })
  $('.close').on('click', function () {
    $('.sugform').slideUp()
  })

  // 3. 自动轮播
  // 内容朝下自动轮播，每次动画结束之后稍作停留，然后继续重复这个过程
  // 分析：
  // 3.1 末尾元素移到顶部，并设置定位为负值 last, prepend, css, outerHeight
  // 3.2 延迟一会，通过动画将定位变为0
  // 3.3 动画播放完毕之后，重复

  function autoPlay () {
    let $last = $('.wblist').last()
    let $wbdesc = $('.wbdesc')
    $wbdesc.prepend($last)
    let height = $last.outerHeight(true)
    $wbdesc.css('top', -height)
    $wbdesc.delay(2000).animate({top: 0}, function () {
      autoPlay()
    })
  }
  autoPlay()
})()
