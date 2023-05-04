(function () {
  // 1. 初始状态
  // $(".words span").text(0);
  // $(".publish_btn").addClass("disabled");

  // 2. 高亮效果
  // 文本域获取焦点时父元素高亮，失去焦点时移除高亮效果
  // 分析：
  // 2.1. 绑定获取和失去焦点事件 on
  // 2.2. 获取到文本域的父元素 parent
  // 2.3. 添加和移除类名（actived） addClass， removeClass
  $(".input-box textarea").on("focus", function () {
    $(this).parent().addClass("actived");
  });
  $(".input-box textarea").on("blur", function () {
    $(this).parent().removeClass("actived");
  });

  // 3. 字数统计
  // 文本域输入文字时，同步获取输入的文字个数并显示出来
  // 分析：
  // 3.1. 绑定输入事件 on, input
  // 3.2 获取文字个数 val, length
  // 3.3 渲染页面 text
  $(".input-box textarea").on("input", function () {
    let length = $(this).val().trim().length
    $('.words span').text(length)

    if (length === 0) {
      $('.publish_btn').addClass('disabled')
    } else {
      $('.publish_btn').removeClass('disabled')
    }
  });

  // 触发input事件
  $('.input-box textarea').trigger('input')

  // 4. 启用禁用
  // 输入内容为空时禁用发布按钮，不为空时启用发布按钮
  // 分析：
  // 4.1 绑定输入事件  on，input
  // 4.2 判断内容是否为空（长度）  val,length
  // 4.3 添加或者移除类名（disabled）  addClass，removeClass

  
})();
