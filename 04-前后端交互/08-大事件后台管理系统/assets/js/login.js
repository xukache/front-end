$(function () {
  // 点击“注册账号”的链接
  $("#link_reg").on("click", () => {
    $(".login-box").hide();
    $(".reg-box").show();
  });
  // 点击“登录”的链接
  $("#link_login").on("click", () => {
    $(".reg-box").hide();
    $(".login-box").show();
  });

  // 自定义校验规则
  // 1.1 从1layui 中获取 form 对象
  var form = layui.form;
  // 1.2 通过 form.verify() 函数自定义校验规则
  form.verify({
    // 自定义 pwd 密码校验规则
    pwd: [/^[\S]{6,12}$/, "密码必须6到12位，且不能出现空格"],
    // 自定义注册表单密码一致校验规则 repwd
    repwd: function (value) {
      // 将确认密码框中的内容和密码框中的内容进行判断
      var pwd = $(".reg-box [name=password]").val();
      if (pwd !== value) {
        return "两次密码不一致！";
      }
    },
  });

  // 监听注册表单的提交事件
  $("#form-reg").on("submit", (e) => {
    e.preventDefault();
    $.post(
      "http://www.liulongbin.top:3007/api/reguser",
      {
        username: $('#form_reg [name=username]').val(),
        password: $('#form_reg [name=password]').val(),
      },
      (res) => {
        if (res.status !== 0) {
          return console.log(res.message);
        }
        console.log('注册成功！');
      }
    );
  });
});
