$(function () {
  // 获取评论数据
  function getCommentList() {
    $.ajax({
      method: "GET",
      url: "http://www.liulongbin.top:3006/api/cmtlist",
      data: {},
      success: function (res) {
        if (res.status != 200) return alert("获取评论列表失败");
        // console.log('获取成功')
        let rows = [];
        $.each(res.data, function (index, item) {
          // 循环拼接字符串
          rows.push(`
            <li class="list-group-item">
              <span class="badge" style="background-color: #F6B050;">评论时间：${item.time}</span>
              <span class="badge" style="background-color: #50B9DF">评论人：${item.username}</span>
              ${item.content}
            </li>
          `);
        });

        $(".list-group").html(rows);
      },
    });
  }

  // 添加评论
  function addComment() {
    $("#formAddCmt").submit(function (e) {
      e.preventDefault();
      let data = $(this).serialize();
      // console.log(data)
      $.post("http://www.liulongbin.top:3006/api/addcmt", data, function (res) {
        if (res.status !== 201) return alert("发表评论失败！");
        getCommentList();
        // 清空form表单信息(需要转为原生dom对象)调用reset方法
        $('#formAddCmt')[0].reset()
      });
    });
  }

  getCommentList();
  addComment();
});
