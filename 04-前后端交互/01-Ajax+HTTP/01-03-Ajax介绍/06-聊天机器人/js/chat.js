$(function () {
  // 初始化右侧滚动条
  // 这个方法定义在scroll.js中
  resetui();

  // 为发送按钮绑定鼠标点击事件
  $("#btnSend").on("click", function (event) {
    // 获取输入的消息
    let msg = $("#ipt").val().trim();
    if (msg.length <= 0) {
      return $("#ipt").val("");
    }
    // 将消息发送到聊天区域
    $(".talk_list").append(`
      <li class="right_word">
        <img src="img/person02.png" /> <span>${msg}</span>
      </li>
    `);
    // 重置位置
    resetui();
    $("#ipt").val("");
    // 发起请求，获取聊天内容
    getMsg(msg);
  });

  // 调用接口获取机器人返回的消息
  function getMsg(text) {
    $.ajax({
      method: "GET",
      url: "http://www.liulongbin.top:3006/api/robot",
      data: {
        spoken: text,
      },
      success: function (res) {
        if (res.message === "success") {
          // 接收聊天信息
          let rep = res.data.info.text;
          $(".talk_list").append(`
          <li class="left_word">
            <img src="img/person01.png" /> <span>${rep}</span>
          </li>
        `);
        // 重置滚动条的位置
        resetui()
        // 调用 getVoice
        getVoice(rep)
        }
      },
    });
  }

  // 将机器人的聊天内容转为语音
  function getVoice(text) {
    $.ajax({
      method: 'GET',
      url: 'http://www.liulongbin.top:3006/api/synthesize',
      data: {
        text: text
      },
      success: function (res) {
        // 请求成功，返回音频url地址
        if (res.status === 200) {
          $('#voice').attr('src', res.voiceUrl)
        }
      }
    })
  }

  // 让文本输入框响应回车事件，提交信息
  $('#ipt').on('keyup', function (e) {
    // e.keyCode 可以获取到当前按键的编码
    if (e.keyCode === 13) {
      //调用按钮元素的click函数，可以通过编程的形式触发按钮的点击事件
      $('#btnSend').click()
    }
  })
});
