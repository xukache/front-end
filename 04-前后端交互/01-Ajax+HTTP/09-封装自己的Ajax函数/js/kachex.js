/**
 * 处理data参数
 * @param {data} 需要发送到服务器的数据
 * @returns {string} 返回拼接好的查询字符串 name=zs&age=10
 */
function resolveData(data) {
  let arr = [];
  for (let k in data) {
    arr.push(k + "=" + data[k]);
  }
  return arr.join("&");
}

function kachex(options) {
  let xhr = new XMLHttpRequest();
  // 拼接查询字符串
  let qs = resolveData(options.data);

  // 判断请求的类型
  if (options.method.toUpperCase() === "GET") {
    // 发起GET请求
    xhr.open(options.method, options.url + "?" + qs);
    xhr.send();
  } else if (options.method.toUpperCase() === "POST") {
    // 发起POST请求
    xhr.open(options.method, options.url);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send(qs);
  }

  // 监听请求状态改变事件
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let result = JSON.parse(xhr.responseText);
      options.success(result);
    }
  };
}
