// 定义格式化时间的函数
function dateFormat(dateStr) {
    const dt = new Date(dateStr);
  
    const y = dt.getFullYear(dt);
    const m = padZero(dt.getMonth(dt) + 1);
    const d = padZero(dt.getDate(dt));
  
    const hh = padZero(dt.getHours(dt));
    const mm = padZero(dt.getMinutes(dt));
    const ss = padZero(dt.getSeconds(dt));
  
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  }
  
  // 定义补零函数
  function padZero(n) {
    return n > 9 ? n : "0" + n;
  }

  module.exports = {
    dateFormat
  }