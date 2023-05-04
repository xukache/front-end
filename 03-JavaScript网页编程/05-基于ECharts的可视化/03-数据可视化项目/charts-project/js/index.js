// 监控区域模块制作
(function () {
  // tab栏切换实现
  $(".monitor .tabs").on("click", "a", function () {
    $(this).addClass("active").siblings("a").removeClass("active");

    // console.log($(this).index()); 0 1
    // content切换实现
    // 选取对应索引号的content
    $(".monitor .content")
      .eq($(this).index())
      .show()
      .siblings(".content")
      .hide();
  });

  // 克隆maarquee里面所有的行（row）
  $(".marquee-view .marquee").each(function () {
    // console.log($(this));
    let rows = $(this).children().clone();
    $(this).append(rows);
  });
})();

// 点位分布统计模块
(function () {
  // 1. 实例化对象
  let myChart = echarts.init(document.querySelector(".point .pie"));
  // 2. 指定配置项和数据
  let option = {
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)",
    },
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff",
    ],
    series: [
      {
        name: "面积模式",
        type: "pie",
        radius: ["10%", "70%"],
        center: ["50%", "50%"],
        roseType: "radius",
        label: {
          fontSize: 10,
        },
        // 引导线调整
        labelLine: {
          // 连接扇形图线长
          length: 6,
          // 连接文字线长
          length2: 8,
        },
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "四川" },
          { value: 42, name: "湖北" },
        ],
      },
    ],
  };

  // 3. 配置项和数据给我们的实例化对象
  myChart.setOption(option);

  // 4. 监听浏览器缩放，图表对象调用缩放resize函数
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 用户统计模块
(function () {
  // 1. 实例化对象
  let myChart = echarts.init(document.querySelector(".bar"));
  // 中间省略的数据  准备三项
  let item = {
    name: "",
    value: 1200,
    // 柱子颜色
    itemStyle: {
      color: "#254065",
    },
    // 鼠标经过柱子颜色
    emphasis: {
      itemStyle: {
        color: "#254065",
      },
    },
    // 工具提示隐藏
    tooltip: {
      extraCssText: "opacity:0",
    },
  };
  // 2. 指定配置和数据
  let option = {
    tooltip: {
      trigger: "item",
    },
    color: new echarts.graphic.LinearGradient(
      // (x1,y2) 点到点 (x2,y2) 之间进行渐变
      0,
      0,
      0,
      1,
      [
        { offset: 0, color: "#00fffb" }, // 0 起始颜色
        { offset: 1, color: "#0061ce" }, // 1 结束颜色
      ]
    ),
    grid: {
      left: "0%",
      right: "3%",
      top: "3%",
      bottom: "3%",
      containLabel: true,
      show: true,
      borderColor: "rgba(0, 240, 255, 0.3)",
    },
    xAxis: [
      {
        type: "category",
        data: [
          "上海",
          "广州",
          "北京",
          "深圳",
          "合肥",
          "",
          "......",
          "",
          "杭州",
          "厦门",
          "济南",
          "成都",
          "重庆",
        ],
        axisTick: {
          alignWithLabel: false,
          show: false,
        },
        axisLabel: {
          color: "#4c9bfd",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        axisTick: {
          alignWithLabel: false,
          // 不显示刻度
          show: false,
        },
        axisLabel: {
          color: "#4c9bfd",
        },
        axisLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)",
          },
        },
        splitLine: {
          lineStyle: {
            color: "rgba(0, 240, 255, 0.3)",
          },
        },
      },
    ],
    series: [
      {
        name: "Direct",
        type: "bar",
        barWidth: "60%",
        data: [
          2100,
          1900,
          1700,
          1560,
          1400,
          item,
          item,
          item,
          900,
          750,
          600,
          480,
          240,
        ],
      },
    ],
  };

  // 3. 把配置给实例对象
  myChart.setOption(option);

  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

// 订单模块
(function () {
  // 1. 准备数据
  let data = {
    day365: { orders: "20,301,987", amount: "99834" },
    day90: { orders: "301,987", amount: "9834" },
    day30: { orders: "1,987", amount: "3834" },
    day1: { orders: "987", amount: "834" },
  };
  // 获取显示 订单数量 容器
  let $h4Orders = $(".order h4:eq(0)");
  // 获取显示 金额数量 容器
  let $h4Amount = $(".order h4:eq(1)");
  $(".order").on("click", ".filter a", function () {
    // 2. 点击切换激活样式
    $(this).addClass("active").siblings().removeClass("active");
    // 3. 点击切换数据
    let currdata = data[this.dataset.key];
    $h4Orders.html(currdata.orders);
    $h4Amount.html(currdata.amount);
  });
  // 4. 开启定时器切换数据
  let index = 0;
  let $allTab = $(".order .filter a");
  setInterval(function () {
    index++;
    if (index >= 4) index = 0;
    $allTab.eq(index).click();
  }, 3000);
})();

// 销售统计模块
(function () {
  // 准备数据
  let data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
    ],
  };

  let myChart = echarts.init(document.querySelector(".line"));

  let option = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      textStyle: {
        color: "#4c9bfd", // 图例文字颜色
      },
      right: "10%", // 距离右边10%
      data: ["Email", "Union Ads"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      top: "20%",
      show: true,
      borderColor: "#012f4a",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      data: [
        "1月",
        "2月",
        "3月",
        "4月",
        "5月",
        "6月",
        "7月",
        "8月",
        "9月",
        "10月",
        "11月",
        "12月",
      ],
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: "#4c9bfd", // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
      boundaryGap: false, // 去除轴内间距
    },
    yAxis: {
      type: "value",
      axisTick: {
        show: false, // 去除刻度
      },
      axisLabel: {
        color: "#4c9bfd", // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: "#012f4a", // 分割线颜色
        },
      },
    },
    color: ["#00f2f1", "#ed3f35"],
    // 图表数据
    series: [
      {
        name: "预期销售额",
        data: data.year[0],
        type: "line",
        smooth: true,
        itemStyle: {
          color: "#00f2f1",
        },
      },
      {
        name: "实际销售额",
        data: data.year[1],
        type: "line",
        smooth: true,
        itemStyle: {
          color: "#ed3f35",
        },
      },
    ],
  };

  myChart.setOption(option);

  // tab切换效果制作
  $(".sales").on("click", ".caption a", function () {
    // 样式
    $(this).addClass("active").siblings().removeClass("active");
    // currData 当前对应的数据
    // this.dataset.type 标签上的data-type属性值，对应data中的属性
    var currData = data[this.dataset.type];
    // 修改图表1的数据
    option.series[0].data = currData[0];
    // 修改图表2的数据
    option.series[1].data = currData[1];
    // 重新设置数据  让图标重新渲染
    myChart.setOption(option);
  });

  let as = $(".sales .caption a");
  let index = 0;
  let timer = setInterval(function () {
    index++;
    if (index >= 4) index = 0;
    as.eq(index).click();
  }, 3000);
  // 鼠标经过sales，关闭定时器，离开开启定时器
  $(".sales").hover(
    function () {
      clearInterval(timer);
    },
    function () {
      clearInterval(timer);
      timer = setInterval(function () {
        index++;
        if (index >= 4) index = 0;
        as.eq(index).click();
      }, 3000);
    }
  );

  // 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

// 渠道分布模块
(function () {
  // 1. 实例化对象
  var myChart = echarts.init(document.querySelector(".radar"));
  // 2.指定配置
  var option = {
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ["60%", "10%"],
    },
    radar: {
      center: ["50%", "50%"],
      // 外半径占据容器大小
      radius: "65%",
      // 雷达图的指示器 内部填充数据
      indicator: [
        { name: "机场", max: 100 },
        { name: "商场", max: 100 },
        { name: "火车站", max: 100 },
        { name: "汽车站", max: 100 },
        { name: "地铁", max: 100 },
      ],
      shape: "circle",
      splitNumber: 4,
      name: {
        textStyle: {
          color: "#4c9bfd",
        },
      },
      splitLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      splitArea: {
        show: false,
      },
      axisLine: {
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
    },
    series: [
      {
        name: "北京",
        type: "radar",
        // 线条样式
        lineStyle: {
          normal: {
            color: "#fff",
            // width: 1
          },
        },
        data: [[90, 19, 56, 11, 34]],
        symbol: "circle",
        itemStyle: {
          color: "#fff",
        },
        // 在圆点上显示相关数据
        label: {
          show: true,
          color: "#fff",
          fontSize: 10,
        },
        areaStyle: {
          color: "rgba(238, 197, 102, 0.6)",
        },
      },
    ],
  };
  // 3.把配置和数据给对象
  myChart.setOption(option);

  // 4. 当我们浏览器缩放的时候，图表也等比例缩放
  window.addEventListener("resize", function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize();
  });
})();

// 季度进度模块
(function () {
  let myChart = echarts.init(document.querySelector(".gauge"));

  let option = {
    series: [
      {
        name: "销售进度",
        type: "pie",
        radius: ["130%", "150%"],
        center: ["48%", "80%"],
        // adjust the start angle
        startAngle: 180,
        label: {
          show: false,
        },
        hoverOffset: 0,
        data: [
          {
            value: 100,
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: "#00c9e0" }, // 0 起始颜色
                  { offset: 1, color: "#005fc1" }, // 1 结束颜色
                ]
              ),
            },
          },
          { value: 100, itemStyle: { color: "#12274d" } }, // 颜色#12274d
          {
            // make an record to fill the bottom 50%
            value: 100 + 100,
            itemStyle: {
              // stop the chart from rendering this piece
              color: "none",
              decal: {
                symbol: "none",
              },
            },
            label: {
              show: false,
            },
          },
        ],
      },
    ],
  };

  myChart.setOption(option);
})();

// 全国热榜模块
(function () {
  // 1. 准备相关数据
  let hotData = [
    {
      city: "北京", // 城市
      sales: "25, 179", // 销售额
      flag: true, //  上升还是下降
      brands: [
        //  品牌种类数据
        { name: "可爱多", num: "9,086", flag: true },
        { name: "娃哈哈", num: "8,341", flag: true },
        { name: "喜之郎", num: "7,407", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "6,724", flag: false },
        { name: "好多鱼", num: "2,170", flag: true },
      ],
    },
    {
      city: "河北",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "3,457", flag: false },
        { name: "娃哈哈", num: "2,124", flag: true },
        { name: "喜之郎", num: "8,907", flag: false },
        { name: "八喜", num: "6,080", flag: true },
        { name: "小洋人", num: "1,724", flag: false },
        { name: "好多鱼", num: "1,170", flag: false },
      ],
    },
    {
      city: "上海",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "2,345", flag: true },
        { name: "娃哈哈", num: "7,109", flag: true },
        { name: "喜之郎", num: "3,701", flag: false },
        { name: "八喜", num: "6,080", flag: false },
        { name: "小洋人", num: "2,724", flag: false },
        { name: "好多鱼", num: "2,998", flag: true },
      ],
    },
    {
      city: "江苏",
      sales: "23,252",
      flag: false,
      brands: [
        { name: "可爱多", num: "2,156", flag: false },
        { name: "娃哈哈", num: "2,456", flag: true },
        { name: "喜之郎", num: "9,737", flag: true },
        { name: "八喜", num: "2,080", flag: true },
        { name: "小洋人", num: "8,724", flag: true },
        { name: "好多鱼", num: "1,770", flag: false },
      ],
    },
    {
      city: "山东",
      sales: "20,760",
      flag: true,
      brands: [
        { name: "可爱多", num: "9,567", flag: true },
        { name: "娃哈哈", num: "2,345", flag: false },
        { name: "喜之郎", num: "9,037", flag: false },
        { name: "八喜", num: "1,080", flag: true },
        { name: "小洋人", num: "4,724", flag: false },
        { name: "好多鱼", num: "9,999", flag: true },
      ],
    },
  ];

  // 2. 根据数据渲染各省热销 sup 模块内容
  let supHTML = "";
  $.each(hotData, function (index, item) {
    // console.log(item);
    supHTML += `<li><span>${item.city}</span><span> ${item.sales} <s class=
    ${item.flag ? "icon-up" : "icon-down"}></s></span></li>`;
  });
  $(".sup").html(supHTML);

  // 3. 当鼠标进入tab的时候
  let index = 0;
  $(".province .sup").on("mouseenter", "li", function () {
    index = $(this).index();
    render($(this));
  });

  // 声明一个render函数 里面设置sup当前小li高亮还有对应的品牌对象渲染
  function render(that) {
    // 鼠标经过当前的小li要高亮显示
    that.addClass("active").siblings().removeClass();
    // 拿到当前城市的brand
    let brands = hotData[that.index()].brands;
    // 遍历品牌数组
    let subHTML = "";
    $.each(brands, function (index, item) {
      subHTML += `<li><span>${item.name}</span><span>${item.num} <s class=${
        item.flag ? "icon-up" : "icon-down"
      }></s></span></li>`;
    });
    // 把生成的小li传给sub
    $(".province .sub").html(subHTML);
  }

  // 4. 默认把第一个小li处于鼠标经过状态
  // 所有的LI
  let $lis = $(".province .sup li");
  // 第一个默认激活
  $lis.eq(0).mouseenter();

  // 5. 开启定时器
  let timer = setInterval(function () {
    index++;
    if (index >= 5) index = 0;
    // $lis.eq(index).mouseenter();
    render($lis.eq(index));
  }, 2000);

  $(".province .sup").hover(
    // 鼠标经过事件
    function () {
      clearInterval(timer);
    },
    // 鼠标离开事件
    function () {
      clearInterval(timer);
      timer = setInterval(function () {
        index++;
        if (index >= 5) index = 0;
        // lis.eq(index).mouseenter();
        render($lis.eq(index));
      }, 2000);
    }
  );
})();
