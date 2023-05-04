;(function () {
  // 整合全屏滚动效果
  $('#fullpage').fullpage({
    afterLoad(anchor, index) {
      console.log('afterLoad')
      console.log('anchor:', anchor)
      console.log('index:', index)
      $('.section').removeClass('current')
      setTimeout(function () {
        $('.section')
          .eq(index - 1)
          .addClass('current')
      }, 100)
    },
  })
})()
