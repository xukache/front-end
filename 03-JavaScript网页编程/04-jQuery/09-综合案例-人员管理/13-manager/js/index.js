;(function () {
  function clear() {
    $('.dialog-wrap').fadeOut(function () {
      $('.form')[0].reset()
      $('.form span').text('')
    })
  }

  let $editTr = undefined
  // 1. 新增-弹框及插件整合
  // 点击弹出新增框，整合日期及表单校验插件
  // 分析：
  // 1.1 点击新增按钮弹框带动画 click，fadeIn
  $('.add').click(function () {
    $('.dialog-wrap h3').text('新增')
    $editTr = undefined
    $('.dialog-wrap').fadeIn()
  })
  // 1.2 整合日期插件 文档
  $('.birthday').datepicker({
    language: 'zh-CN',
    autoHide: true,
  })
  // 1.3 整合表单校验插件 文档，非空，正则
  $('.form').validate({
    sendForm: false,
    description: {
      nickname: {
        required: '姓名不能为空!',
      },
      mobile: {
        required: '手机不能为空!',
        pattern: '手机格式有误!',
      },
      birthday: {
        required: '生日不能为空!',
      },
    },
    valid() {
      console.log('校验成功')
      if ($editTr === undefined) {
        let $tr = $('tbody tr').first().clone()
        let nickname = $('.nickname').val()
        let mobile = $('.mobile').val()
        let birthday = $('.birthday').val()
        $tr.find('.td-name').text(nickname)
        $tr.find('.td-mobile').text(mobile)
        $tr.find('.td-birth').text(birthday)
        $('tbody').append($tr)
        $tr.show()
        clear()
      } else {
        console.log('编辑')
        let nickname = $('.nickname').val()
        let mobile = $('.mobile').val()
        let birthday = $('.birthday').val()
        $editTr.find('.td-name').text(nickname)
        $editTr.find('.td-mobile').text(mobile)
        $editTr.find('.td-birth').text(birthday)
        clear()
      }
    },
  })

  // 2. 新增-添加及关闭弹框
  // 点击提交新增数据到页面上，关闭弹框之后清空内容
  // 分析：
  // 2.1 关闭弹框之后，清空内容 fadeOut，reset，抽取
  // 2.2 表单校验通过之后 valid
  // 2.3 新增数据，并设置内容 克隆，val，append
  // 4.点击取消
  $('.cancel').click(function () {
    clear()
  })

  // 5.点击关闭
  $('.close').click(function () {
    clear()
  })

  // 3. 删除
  // 点击删除，直接删除整行
  // 3.1 删除按钮事件绑定 委托，click
  // 3.2 tr播放淡出动画 parent，fadeOut
  // 3.3 动画播放完毕，删除tr 回调函数，remove
  // 6.删除
  $('tbody').on('click', '.del', function () {
    console.log('this:', this)
    let $tr = $(this).parent().parent()
    console.log('$tr:', $tr)
    $tr.fadeOut(function () {
      $tr.remove()
    })
  })

  // 4. 编辑-进入编辑状态
  // 点击提交，修改数据并关闭弹框
  // 分析：
  // 4.1 编辑按钮事件绑定 委托，click
  // 4.2 获取这一行的内容 parent，find
  // 4.3 修改弹框标题和内容，并显示 fadeIn，val
  // 7. 进入编辑状态
  $('tbody').on('click', '.edit', function () {
    let $tr = $(this).parent().parent()
    console.log('$tr:', $tr)
    let name = $tr.find('.td-name').text()
    let mobile = $tr.find('.td-mobile').text()
    let birth = $tr.find('.td-birth').text()
    console.log(name, mobile, birth)
    $('.dialog-wrap h3').text('编辑')
    $('.nickname').val(name)
    $('.mobile').val(mobile)
    $('.birthday').val(birth)
    $('.dialog-wrap').fadeIn()

    $editTr = $tr
  })
})()
