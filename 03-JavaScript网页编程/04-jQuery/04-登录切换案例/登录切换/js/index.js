(function () {
  // 1.账号&安全切换
  // 点击某种登陆方式，切换到对应的登陆界面
  // 分析：
  // 1.1 账号&安全登录点击高亮（active） click，addClass，siblings，removeClass
  // 1.2 显示登陆界面
  $(".label").on("click", function () {
    $(this).addClass("active");
    $(this).siblings().removeClass("active");

    let id = $(this).attr("data-label");
    $(id).css("display", "block");
    $(id).siblings().css("display", "none");
  });

  // 2. 安全&手机切换
  // 点击右上角图标，根据当前状态在手机登录和安全登录之间切换
  // 分析：
  // 2.1 点击判断是否高亮 click， hasClass
  // 2.2 （未高亮）图标点击高亮（active） addClass，siblings，removeClass
  // 2.3 （未高亮）显示登陆界面
  // 2.4 （已高亮）切换到安全登录
  $(".icon").on("click", function () {
    let flag = $(this).hasClass("active");
    if (flag === false) {
      $(this).addClass("active");
      $(this).siblings().removeClass("active");

      let id = $(this).attr("data-label");
      $(id).css("display", "block");
      $(id).siblings().css("display", "none");
    } else {
      $(".label").last().trigger("click");
    }
  });
})();
