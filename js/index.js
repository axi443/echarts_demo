// left 地图模块
(function () {
  $.get("js/map.json", function (huNan) {
    echarts.registerMap("hunan", huNan);
    var myChart = echarts.init(document.querySelector(".map"));
    myChart.setOption({
      series: [
        {
          type: "map",
          map: "hunan",
          label: {
            show: true,
            color: "white",
            fontSize: 10,
          },
          itemStyle: {
            normal: {
              borderWidth: 2, //边际线大小
              borderColor: "#3892B8", //边界线颜色
              areaColor: "#054D7A", //默认区域颜色
            },
            emphasis: {
              show: true,
              areaColor: "#2367BC", //鼠标滑过区域颜色
              label: {
                show: true,
                textStyle: {
                  color: "#fff",
                },
              },
            },
          },
        },
      ],
    });
  });

  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

// left 折线图模块
(function () {
  var myChart = echarts.init(document.querySelector(".left .line"));
  var option = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: "5%",
      left: "13%",
      right: "6%",
      bottom: "10%",
      containLabel: false,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["03-15", "03-29", "04-12", "04-25", "05-10", "05-24", "06-07"],
      axisLabel: {
        color: "#fff", // 文本颜色
        fontSize: "12",
      },
      axisLine: {
        show: true, // 轴线
        lineStyle: {
          color: "#4c9bfd",
        },
      },
      axisTick: {
        show: true,
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true, // 轴线
        lineStyle: {
          color: "#4c9bfd",
        },
      },
      axisLabel: {
        color: "#fff", // 文本颜色
      },
      splitLine: {
        lineStyle: {
          color: "#4E4E4E",
        },
      },
      axisTick: {
        show: true,
      },
    },
    series: [
      {
        name: "用户人数",
        type: "line",
        stack: "数量",
        smooth: true, //圆滑
        symbol: "circle",
        symbolSize: 6,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "#1878EA",
                },
                {
                  offset: 1,
                  color: "rgba(0,50,160,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(108,80,243, 0.9)",
            shadowBlur: 20,
          },
        },
        data: [12000, 60032, 40001, 10034, 39000, 50030, 20010],
        itemStyle: {
          normal: {
            color: "#2C91F7",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12,
            lineStyle: {
              color: "#2C91F7",
            },
          },
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

// center 柱状图模块
(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var option = {
    grid: {
      top: "5%",
      left: "5%",
      right: "15%",
      bottom: "5%",
      containLabel: false,
    },
    dataZoom: [
      {
        type: "slider",
        show: true,
        yAxisIndex: [0, 1],
        start: 0, //百分比
        end: 60, //百分比
        left: 0,
        height: "85%",
        width: "5",
        handleSize: 25,
        borderColor: "#45506D",
        fillerColor: "gray",
        backgroundColor: "#33384b",
        realtime: true,
        filterMode: "filter",
      },
    ],
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
          fontSize: "10",
          inside: true,
          verticalAlign: "bottom",
          formatter: function (value) {
            return value + "\n";
          },
        },
        data: [
          "长沙市",
          "株洲市",
          "湘潭市",
          "衡阳市",
          "邵阳市",
          "岳阳市",
          "常德市",
          "张家界市",
          "益阳市",
          "郴州市",
          "永州市",
          "怀化市",
        ],
      },
      {
        inverse: true,
        splitLine: {
          show: false, //去掉背景的网格线
        },
        axisLine: {
          show: false, //隐藏坐标轴
        },
        axisTick: {
          show: false, //隐藏坐标轴的刻度
        },
        axisLabel: {
          color: "#fff", //坐标的字体颜色
          fontSize: "10",
        },
        data: [702, 350, 610, 793, 664, 443, 223, 445, 665, 0, 0, 235],
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: [702, 350, 610, 793, 664, 443, 223, 445, 665, 0, 0, 235],
        itemStyle: {
          barBorderRadius: [0, 5, 5, 0],
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: "#99ACF3", // 0% 处的颜色
              },
              {
                offset: 0.6,
                color: "#D04CAB", // 60% 处的颜色
              },
              {
                offset: 1,
                color: "#FF2475", // 100% 处的颜色
              },
            ],
            false
          ),
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: false,
        },
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 10,
        data: [
          1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
          1000,
        ],
        itemStyle: {
          color: "none",
          borderColor: "#2B193F",
          borderWidth: 1,
          barBorderRadius: [0, 5, 5, 0],
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

// center 饼图模块
(function () {
  var myChart = echarts.init(document.querySelector(".pie .bing1"));
  var option = {
    color: ["#0085EA", "#EE6346", "#FFAC35"],
    tooltip: {
      trigger: "item",
    },
    legend: {
      bottom: "18%",
      // 修改小图标的大小
      itemWidth: 12,
      itemHeight: 12,
      icon: "circle",
      // 修改图例组件的文字为 12px
      textStyle: {
        color: "#fff",
        fontSize: "12",
      },
    },
    series: [
      {
        name: "工单处理情况",
        type: "pie",
        radius: ["30%", "50%"],
        center: ["50%", "45%"],
        avoidLabelOverlap: false,
        label: {
          normal: {
            formatter: "{b} \n {d}%",
            textStyle: {
              fontSize: 12,
            },
          },
        },

        labelLine: {
          normal: {
            length: 6, // 改变标示线的长度
            length2: 5,
          },
        },
        data: [
          { value: 1048, name: "已办结" },
          { value: 735, name: "未受理" },
          { value: 300, name: "已受理" },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

// right 饼图模块
(function () {
  var dataes = [
    {
      title: "第一个",
      series_data: [{ value: 235, name: "视频广告" }],
    },
    {
      title: "第二个",
      series_data: [{ value: 274, name: "联盟广告" }],
    },
    {
      title: "第三个",
      series_data: [{ value: 310, name: "邮件营销" }],
    },
    {
      title: "第四个",
      series_data: [{ value: 335, name: "直接访问" }],
    },
  ];
  var center;
  // 对列表中的数据遍历，对应的每一条数据都生成一份饼图
  for (var i in dataes) {
    var myChart = echarts.init(document.querySelector(".right .right1"));
    center = 100 / (2 + Number(i));
    var option = {
      //   title: {
      //     text: dataes[i]["title"],
      //     bottom: "22%",
      //     left: "center",
      //     textStyle: {
      //       color: "#fff",
      //       fontSize: 10,
      //     },
      //   },
      tooltip: {
        trigger: "item",
      },
      legend: {
        bottom: "25%",
        left: "14%",
        itemWidth: 0,
        itemHeight: 0,
        itemGap: 80,
        textStyle: {
          color: "#fff",
          fontSize: 10,
        },
      },
      series: [],
    };
    myChart.setOption(option);
  }
  for (var i = 0; i < dataes.length; i++) {
    option.series[i] = {
      name: dataes[i]["title"],
      type: "pie",
      radius: ["30", "34"],
      center: [center * Number(i + 1) + "%", "38%"],
      data: dataes[i]["series_data"],
      labelLine: {
        show: false,
      },
      label: {
        normal: {
          show: true,
          position: "center",
          color: "#fff",
          fontWeight: "600",
          fontSize: 14,
          formatter: "{c} 件",
        },
      },
    };
  }
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

// right 折线图模块
(function () {
  var myChart = echarts.init(document.querySelector(".right .right2"));
  var option = {
    tooltip: {
      trigger: "axis",
    },
    grid: {
      top: "8%",
      left: "3%",
      right: "6%",
      bottom: "28%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["03-15", "03-29", "04-12", "04-25", "05-10", "05-24", "06-07"],
      axisLabel: {
        color: "gray", // 文本颜色
        fontSize: "12",
      },
      axisLine: {
        show: true, // 轴线
        lineStyle: {
          color: "#4c9bfd",
        },
      },
      axisTick: {
        show: true,
      },
    },
    yAxis: {
      type: "value",
      axisLine: {
        show: true, // 轴线
        lineStyle: {
          color: "#4c9bfd",
        },
      },
      axisLabel: {
        color: "gray", // 文本颜色
      },
      splitLine: {
        lineStyle: {
          color: "#4E4E4E",
        },
      },
      axisTick: {
        show: true,
      },
    },
    series: [
      {
        name: "用户人数",
        type: "line",
        stack: "数量",
        symbol: "circle",
        symbolSize: 8,
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "#00B4FD",
                },
                {
                  offset: 1,
                  color: "rgba(0,67,109,0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(39,45,75,0.9)",
            shadowBlur: 20,
          },
        },
        data: [100, 200, 400, 134, 390, 530, 210],
        itemStyle: {
          normal: {
            color: "#2C91F7",
            lineStyle: {
              color: "#2C91F7",
            },
          },
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

// right 柱状图模块
(function () {
  var myChart = echarts.init(document.querySelector(".right .right3"));
  var option = {
    grid: {
      top: "5%",
      left: "5%",
      right: "18%",
      bottom: "10%",
      containLabel: false,
    },
    xAxis: {
      show: false,
    },
    yAxis: [
      {
        type: "category",
        inverse: true,
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          color: "#fff",
          fontSize: "10",
          inside: true,
          verticalAlign: "bottom",
          formatter: function (value) {
            return value + "\n";
          },
        },
        data: [
          "医保",
          "社保",
          "医疗",
          "养老",
          "建议",
          "交通",
          "教育",
          "反映",
          "堵",
          "疾病",
        ],
      },
      {
        inverse: true,
        splitLine: {
          show: false, //去掉背景的网格线
        },
        axisLine: {
          show: false, //隐藏坐标轴
        },
        axisTick: {
          show: false, //隐藏坐标轴的刻度
        },
        axisLabel: {
          color: "#fff", //坐标的字体颜色
          fontSize: "10",
        },
        data: [2000, 1350, 1610, 1793, 1664, 2443, 2123, 4145, 1665, 1235],
      },
    ],
    series: [
      {
        name: "条",
        type: "bar",
        yAxisIndex: 0,
        data: [2000, 1350, 1610, 1793, 1664, 2443, 2123, 4145, 1665, 1235],
        itemStyle: {
          barBorderRadius: [0, 5, 5, 0],
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: "#99ACF3", // 0% 处的颜色
              },
              {
                offset: 0.6,
                color: "#D04CAB", // 60% 处的颜色
              },
              {
                offset: 1,
                color: "#FF2475", // 100% 处的颜色
              },
            ],
            false
          ),
        },
        // 柱子之间的距离
        barCategoryGap: 50,
        barWidth: 10,
        // 显示柱子内的文字
        label: {
          show: false,
        },
      },
      {
        name: "框",
        type: "bar",
        yAxisIndex: 1,
        barCategoryGap: 50,
        barWidth: 10,
        data: [5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000, 5000],
        itemStyle: {
          color: "none",
          borderColor: "#804965",
          borderWidth: 1,
          barBorderRadius: [0, 5, 5, 0],
        },
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();

//right worldcloud模块
(function () {
  var myChart = echarts.init(document.querySelector(".right .last .font"));
  var option = {
    tooltip: {},
    series: [
      {
        type: "wordCloud",
        gridSize: 10,
        sizeRange: [12, 40],
        rotationRange: [-45, 45],
        shape: "pentagon",
        width: 600,
        height: 400,
        drawOutOfBound: true,
        textStyle: {
          normal: {
            fontFamily: "sans-serif",
            color: function () {
              // Random color
              return (
                "rgb(" +
                [
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                  Math.round(Math.random() * 160),
                ].join(",") +
                ")"
              ); //字体的随机颜色
            },
          },
          emphasis: {
            //鼠标移入的特效样式
            shadowBlur: 10,
            shadowColor: "#0aa1eb",
          },
        },
        data: [
          {
            name: "笑哭",
            value: "12734670",
          },
          {
            name: "嘻哈",
            value: "12734670",
          },
          {
            name: "调皮",
            value: "12734670",
          },
          {
            name: "滑稽",
            value: "12734670",
          },
          {
            name: "肺炎",
            value: "12734670",
          },
          {
            name: "成熟",
            value: "1",
          },
          {
            name: "乐观",
            value: "12734670",
          },
          {
            name: "活泼",
            value: "12734670",
          },
          {
            name: "积极",
            value: "12734670",
          },
          {
            name: "幽默",
            value: "12734670",
          },
          {
            name: "开放",
            value: "12734670",
          },
          {
            name: "睿智",
            value: "12734670",
          },
          {
            name: "实时",
            value: "12734670",
          },
          {
            name: "新型",
            value: "12734670",
          },
          {
            name: "开朗",
            value: "12734670",
          },
          {
            name: "激动",
            value: "12734670",
          },
          {
            name: "高兴",
            value: "12734670",
          },
          {
            name: "开心",
            value: "12734670",
          },
          {
            name: "稳重",
            value: "12734670",
          },
          {
            name: "生动",
            value: "12734670",
          },
          {
            name: "仁慈",
            value: "12734670",
          },
          {
            name: "果断",
            value: "12734670",
          },
        ],
      },
    ],
  };
  myChart.setOption(option);
  window.addEventListener("resize", () => {
    myChart.resize();
  });
})();
