(function () {
  // 抽取
  function count () {
    $(".todo-count strong").text($("#todoList li").length)
  }

  // 1. 新增
  // 在输入内容的情况下，回车新增记事本项，并且以动画的方式添加到页面中，同时清空输入
  // 分析：
  // 1.1 新增时，判断按键为回车，及输入内容非空 keyup，keyCode，val
  // 1.2 添加记事本项到页面，并设置输入内容 append
  // 1.3 通过展开动画的方式展示元素 display：none，slideDown
  // 1.4 清空输入内容 val
  $("#addTodo").keyup(function (e) {
    if (e.keyCode === 13) {
      // console.log('回车')
      let value = $(this).val();
      if (value != "") {
        // console.log('输入了内容')
        $("#todoList").append(`
        <li style="display: none">
          <div class="view">
            <label>${value}</label>
            <button class="destroy"></button>
          </div>
        </li>
        `);
        $("#todoList li").last().slideDown(count);
        $(this).val("");
      }
    }
  });

  // 2. 删除
  // 点击删除按钮，播放淡出动画，然后删除所在记事本项
  // 分析：
  // 2.1 未删除按钮绑定点击事件 on，click
  // 2.2 找到祖先元素li标签并播放淡出动画 parent，fadeOut
  // 2.3 动画播放完毕，删除li标签 回调函数，remove
  $('#todoList').on('click', '.destroy', function() {
    let $li = $(this).parent().parent()
    $li.fadeOut(function () {
      $(this).remove()
      count()
    })
  })

  // 3. 计数
  // 新增和删除时更新个数
  // 分析：
  // 3.1 新增和删除动画播放完毕时执行逻辑 动画的回调函数
  // 3.2 获取li标签的个数并更新个数 text
  // 3.3 代码复用 抽取


})();
