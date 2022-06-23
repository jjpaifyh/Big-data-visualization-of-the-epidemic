<!--  -->
<template>
  <div class="Data">
    <div id="left">
      <div id="main" @click="look('main')"></div>
      <div id="xx" @click="look('xx')"></div>
      <div id="main3" @click="look('main3')"></div>
    </div>

    <div id="content">
      <div id="main4" @click="look('main4')"></div>
      <div id="main5" @click="look('main5')"></div>
    </div>

    <div id="right">
      <div id="main6" @click="look('main6')"></div>
      <div id="main7" @click="look('main7')"></div>
      <div id="main8" @click="look('main8')"></div>
    </div>
    <div class="menu" v-show="isTF" @click="bai">
      <div id="sc"></div>
    </div>
  </div>
</template>

<script>
import "../assets/js/china";
import "echarts-wordcloud";
import * as echarts from "echarts";
export default {
  name: "Data",
  data() {
    return {
      isTF: false,
      dataec: {
        title: {
          text: "国内疫情死亡率",
          left: "center",
          textStyle: {
            fontSize: 20,
            color: "#c1f5ff",
          },
        },
        tooltip: {
          formatter: "{a} <br/>{b} : {c}%",
        },
        min: 10,
        series: [
          {
            name: "中国疫情数据",
            type: "gauge",
            center: ["50%", "50%"], //仪表盘圆心坐标
            radius: "75%", //仪表盘半径
            data: [
              {
                value: 3.57,
                name: "死亡率",
                itemStyle: {
                  //指针样式
                  color: "#409eff",
                  opacity: 1,
                },
                detail: {
                  //仪表盘详情，用于显示数据
                  color: "rgba(227, 44, 44, 1)",
                  fontWeight: "bolder",
                  fontSize: 22,
                  valueAnimation: true, //数字动画
                  formatter: "{value}%", //格式化
                },
              },
            ],
            min: 0, //映射最小值
            max: 50,
            splitNumber: 10, //分割段数
            axisLine: {
              //轴线配置
              show: true, //是否显示轴向
              roundCap: true, //两端是否圆角化
              lineStyle: {
                color: [[1, "#e32c2c"]],
                width: 10, //宽度
                opacity: 0.5,
              },
            },
            progress: {
              //进度条
              show: true,
              width: 10,
              overlap: true, //多组数据时是否重叠
              roundCap: true,
              itemStyle: {
                color: "#F00",
              },
            },
          },
        ],
      },
      dataec_2: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      },
      dataec_3: {
        title: {
          top: 10,
          text: "各省市从湖北迁入的人口比例与该省累计确诊人数的关系",
          left: "center",
          textStyle: {
            fontSize: 20,
            color: "#c1f5ff",
          },
        },
        grid: {
          left: "3%",
          right: "7%",
          bottom: "3%",
          containLabel: true,
        },
        tooltip: {
          trigger: "item",
          formatter: function (params, ticket, callback) {
            if (params.data)
              return (
                "占比:" +
                params.value[params.encode.x[0]] +
                "%<br/>" +
                params.seriesName +
                ":" +
                params.value[params.encode.y[0]] +
                "人"
              );
            else return params.name + "<br/>无疫情信息";
          },
        },
        xAxis: {
          type: "value",
          scale: true,
          axisLabel: {
            formatter: "{value}%",
          },
          splitLine: {
            show: false,
          },
        },
        yAxis: {
          type: "value",
          scale: true,
          axisLabel: {
            formatter: "{value}例",
          },
          splitLine: {
            show: false,
          },
        },
        series: [
          {
            type: "scatter",
            name: "确诊人数",
            symbolSize: 15,
            data: [
              [8.04, 1331],
              [16.76, 1008],
              [7.83, 933],
              [0.45, 470],
              [6.72, 986],
              [2.96, 1174],
              [19.15, 1257],
              [4.13, 514],
              [3.27, 240],
              [8.37, 530],
              [3.83, 631],
              [2.51, 293],
              [1.85, 244],
              [1.12, 141],
              [2.17, 544],
              [0.28, 83],
              [0.71, 91],
              [1.39, 146],
              [0.89, 103],
              [0.07, 70],
              [1.86, 306],
              [0.46, 121],
              [0.24, 45],
              [1.2, 131],
              [0.08, 18],
              [1.43, 367],
              [0.26, 75],
              [1.36, 223],
              [0.23, 124],
            ],
          },
        ],
      },
      dataList: [
        { name: "北京", value: 386 },
        { name: "天津", value: 130 },
        { name: "河北", value: 318 },
        { name: "山西", value: 133 },
        { name: "内蒙古", value: 75 },
        { name: "辽宁", value: 121 },
        { name: "吉林", value: 86 },
        { name: "黑龙江", value: 480 },
        { name: "上海", value: 226 },
        { name: "江苏", value: 631 },
        { name: "浙江", value: 1169 },
        { name: "安徽", value: 990 },
        { name: "福建", value: 296 },
        { name: "江西", value: 934 },
        { name: "山东", value: 756 },
        { name: "河南", value: 1267 },
        { name: "湖北", value: 65057 },
        { name: "湖南", value: 1018 },
        { name: "广东", value: 1349 },
        { name: "广西", value: 252 },
        { name: "海南", value: 108 },
        { name: "重庆", value: 553 },
        { name: "四川", value: 538 },
        { name: "云南", value: 141 },
        { name: "陕西", value: 243 },
        { name: "宁夏", value: 72 },
        { name: "新疆", value: 45 },
        { name: "贵州", value: 146 },
        { name: "西藏", value: 1 },
        { name: "青海", value: 18 },
        { name: "甘肃", value: 91 },
      ],
      dataec_4: {
        title: {
          text: "人口迁徙图",
          left: "left",
          textStyle: {
            color: "#fff",
            fontSize: 28,
          },
          y: "30",
        },
        tooltip: {
          trigger: "item",
          formatter: "{b}",
        },
        visualMap: {
          show: false,
          min: 0,
          max: 70,
          inRange: {
            color: [
              "#FFB5B5",
              "#FF7575",
              "#FF2D2D",
              "#CE0000",
              "#750000",
              "#2F0000",
            ],
          },
        },
        geo: {
          map: "china",
          roam: false,
          itemStyle: {
            normal: {
              areaColor: "#01215c",
              borderWidth: 1, //设置外层边框
              borderColor: "#9ffcff",
              shadowColor: "rgba(0,54,255, 1)",
              shadowBlur: 150,
            },
          },

          label: {
            normal: {
              show: false,
            },
            emphasis: {
              show: false,
            },
          },
        },
        series: [
          {
            type: "lines",
            name: "人口迁徙",
            coordinateSystem: "geo",
            data: [
              {
                coords: [
                  [112.411, 31.2093],
                  [113.487, 34.1572],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [111.721, 27.6959],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [106.531, 29.5446],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [113.395, 23.408],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [115.676, 27.7573],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [117.216, 31.8593],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [102.899, 30.6517],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [119.368, 33.0138],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [109.504, 35.86],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [119.957, 29.1595],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [117.985, 26.0501],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [118.528, 36.0993],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [115.661, 38.6138],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [108.924, 23.5523],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [116.396, 39.93],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [106.735, 26.9028],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [121.488, 31.2492],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [112.515, 37.8666],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [101.593, 24.8642],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [109.734, 19.1805],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [102.458, 38.1033],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [122.754, 41.6216],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [128.047, 47.3566],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [126.263, 43.6788],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [114.416, 43.4682],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [85.6149, 43.793],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [117.211, 39.1439],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [96.2025, 36.6209],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [106.155, 37.3213],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
              {
                coords: [
                  [112.411, 31.2093],
                  [89.138, 29.6469],
                ],
                lineStyle: {
                  color: "#9fe080",
                  with: 0.5,
                  type: "solid",
                  curveness: 0.2,
                },
              },
            ],
            zlevel: 1,
            effect: {
              //  尾迹特效 需要单独 放在一个层
              show: true,
              period: 6, // 动画时间
              trailLength: 0.4, // 特效尾迹的长度
              color: "#dc1515",
              symbolSize: 4,
              symbol: "diamond",
            },
          },
          {
            type: "scatter",
            name: "散点",
            coordinateSystem: "geo",
            data: [
              { value: [113.487, 34.1572] },
              { value: [111.721, 27.6959] },
              { value: [106.531, 29.5446] },
              { value: [113.395, 23.408] },
              { value: [115.676, 27.7573] },
              { value: [117.216, 31.8593] },
              { value: [102.899, 30.6517] },
              { value: [119.368, 33.0138] },
              { value: [109.504, 35.86] },
              { value: [119.957, 29.1595] },
              { value: [117.985, 26.0501] },
              { value: [118.528, 36.0993] },
              { value: [115.661, 38.6138] },
              { value: [108.924, 23.5523] },
              { value: [116.396, 39.93] },
              { value: [106.735, 26.9028] },
              { value: [121.488, 31.2492] },
              { value: [112.515, 37.8666] },
              { value: [101.593, 24.8642] },
              { value: [109.734, 19.1805] },
              { value: [102.458, 38.1033] },
              { value: [122.754, 41.6216] },
              { value: [128.047, 47.3566] },
              { value: [126.263, 43.6788] },
              { value: [114.416, 43.4682] },
              { value: [85.6149, 43.793] },
              { value: [117.211, 39.1439] },
              { value: [96.2025, 36.6209] },
              { value: [106.155, 37.3213] },
              { value: [89.138, 29.6469] },
            ],
          },
        ],
      },
      dataec_5: {
        title: {
          text: "各媒体发布新闻占比情况",
          y: "bottom",
          left: "center",
          textStyle: {
            fontSize: 20,
            color: "#c1f5ff",
          },
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
          top: -5,
          data: [
            {
              name: "国家卫健委",
              // 强制设置图形为圆。
              icon: "circle",
              // 设置文本为红色
              textStyle: {
                color: "#c1f5ff",
              },
            },
            {
              name: "央视网",
              // 强制设置图形为圆。
              icon: "circle",
              // 设置文本为红色
              textStyle: {
                color: "#c1f5ff",
              },
            },
            {
              name: "人民日报",
              // 强制设置图形为圆。
              icon: "circle",
              // 设置文本为红色
              textStyle: {
                color: "#c1f5ff",
              },
            },
            {
              name: "新华社",
              // 强制设置图形为圆。
              icon: "circle",
              // 设置文本为红色
              textStyle: {
                color: "#c1f5ff",
              },
            },
          ],
        },
        series: [
          {
            name: "媒体",
            type: "pie",
            radius: ["50%", "75%"],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: "#fff",
              borderWidth: 2,
            },
            label: {
              show: true,
              position: "inside",
              color: "#c1f5ff",
              formatter: "{b}\n {d}%",
              fontSize: 12,
            },
            labelLine: {
              show: false,
            },
            data: [
              { name: "央视网", value: 1375 },
              { name: "新华社", value: 682 },
              { name: "国家卫健委", value: 959 },
              { name: "人民日报", value: 1391 },
            ],
          },
        ],
      },
      dataec_6: {
        title: {
          text: "各媒体每天分布量",
          y: "bottom",
          left: "center",
          textStyle: {
            fontSize: 22,
            color: "#c1f5ff",
          },
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "line",
            lineStyle: {
              color: "rgb(246,5,5)",
              width: 1,
              type: "solid",
            },
          },
        },
        legend: {
          top: 35,
          data: [
            {
              name: "国家卫健委",
              // 强制设置图形为圆。
              icon: "circle",
              // 设置文本为红色
              textStyle: {
                color: "#c1f5ff",
              },
            },
            {
              name: "央视网",
              // 强制设置图形为圆。
              icon: "circle",
              // 设置文本为红色
              textStyle: {
                color: "#c1f5ff",
              },
            },
            {
              name: "人民日报",
              // 强制设置图形为圆。
              icon: "circle",
              // 设置文本为红色
              textStyle: {
                color: "#c1f5ff",
              },
            },
            {
              name: "新华社",
              // 强制设置图形为圆。
              icon: "circle",
              // 设置文本为红色
              textStyle: {
                color: "#c1f5ff",
              },
            },
          ],
        },

        singleAxis: {
          top: 50,
          bottom: 50,
          axisTick: {},
          axisLabel: {},
          type: "time",
          axisPointer: {
            animation: true,
            label: {
              show: true,
            },
          },
          splitLine: {
            show: true,
            lineStyle: {
              type: "dashed",
              opacity: 0.2,
            },
          },
        },

        series: [
          {
            type: "themeRiver",
            label: {
              //y轴标签
              show: true,
              rotate: 15,
              color: "#c1f5ff",
              fontWeight: "bolder",
              fontSize: 12,
            },
            labelLine: {
              show: true,
              color: "#labelLine",
            },
            emphasis: {
              //高亮状态的配置
              focus: "self", //聚焦效果
              itemStyle: {
                shadowBlur: 30,
                shadowColor: "rgba(193,34,34,0.8)",
              },
            },
            data: [
              ["2020-02-29", 11, "国家卫健委"],
              ["2020-02-29", 5, "央视网"],
              ["2020-02-29", 10, "人民日报"],
              ["2020-02-28", 13, "人民日报"],
              ["2020-02-28", 3, "央视网"],
              ["2020-02-28", 6, "新华社"],
              ["2020-02-28", 23, "国家卫健委"],
              ["2020-02-27", 18, "国家卫健委"],
              ["2020-02-27", 1, "央视网"],
              ["2020-02-27", 10, "人民日报"],
              ["2020-02-26", 28, "国家卫健委"],
              ["2020-02-27", 1, "新华社"],
              ["2020-02-26", 13, "人民日报"],
              ["2020-02-26", 2, "新华社"],
              ["2020-02-26", 2, "央视网"],
              ["2020-02-25", 19, "国家卫健委"],
              ["2020-02-25", 6, "人民日报"],
              ["2020-02-25", 2, "新华社"],
              ["2020-02-24", 28, "国家卫健委"],
              ["2020-02-24", 11, "人民日报"],
              ["2020-02-24", 3, "央视网"],
              ["2020-02-24", 1, "新华社"],
              ["2020-02-23", 24, "国家卫健委"],
              ["2020-02-23", 11, "人民日报"],
              ["2020-02-23", 2, "新华社"],
              ["2020-02-23", 1, "央视网"],
              ["2020-02-22", 27, "国家卫健委"],
              ["2020-02-22", 13, "人民日报"],
              ["2020-02-22", 1, "新华社"],
              ["2020-02-22", 1, "央视网"],
              ["2020-02-21", 24, "国家卫健委"],
              ["2020-02-21", 12, "人民日报"],
              ["2020-02-21", 2, "新华社"],
              ["2020-02-21", 4, "央视网"],
              ["2020-02-20", 11, "人民日报"],
              ["2020-02-20", 4, "央视网"],
              ["2020-02-20", 25, "国家卫健委"],
              ["2020-02-19", 26, "国家卫健委"],
              ["2020-02-19", 6, "人民日报"],
              ["2020-02-18", 31, "国家卫健委"],
              ["2020-02-19", 1, "央视网"],
              ["2020-02-18", 7, "人民日报"],
              ["2020-02-17", 31, "国家卫健委"],
              ["2020-02-18", 1, "央视网"],
              ["2020-02-17", 11, "人民日报"],
              ["2020-02-17", 3, "新华社"],
              ["2020-02-16", 22, "国家卫健委"],
              ["2020-02-17", 4, "央视网"],
              ["2020-02-16", 9, "人民日报"],
              ["2020-02-16", 6, "央视网"],
              ["2020-02-16", 1, "新华社"],
              ["2020-02-15", 10, "人民日报"],
              ["2020-02-15", 3, "央视网"],
              ["2020-02-15", 28, "国家卫健委"],
              ["2020-02-14", 19, "国家卫健委"],
              ["2020-02-15", 1, "新华社"],
              ["2020-02-14", 2, "央视网"],
              ["2020-02-14", 9, "人民日报"],
              ["2020-02-13", 28, "国家卫健委"],
              ["2020-02-13", 15, "人民日报"],
              ["2020-02-13", 2, "新华社"],
              ["2020-02-13", 2, "央视网"],
              ["2020-02-12", 8, "人民日报"],
              ["2020-02-12", 22, "国家卫健委"],
              ["2020-02-12", 3, "新华社"],
              ["2020-02-12", 4, "央视网"],
              ["2020-02-11", 2, "央视网"],
              ["2020-02-11", 1, "新华社"],
              ["2020-02-11", 5, "人民日报"],
              ["2020-02-11", 31, "国家卫健委"],
              ["2020-02-10", 16, "国家卫健委"],
              ["2020-02-10", 22, "人民日报"],
              ["2020-02-10", 1, "新华社"],
              ["2020-02-10", 2, "央视网"],
              ["2020-02-09", 24, "人民日报"],
              ["2020-02-09", 19, "国家卫健委"],
              ["2020-02-09", 2, "央视网"],
              ["2020-02-09", 1, "新华社"],
              ["2020-02-08", 6, "国家卫健委"],
              ["2020-02-08", 23, "人民日报"],
              ["2020-02-08", 7, "央视网"],
              ["2020-02-08", 6, "新华社"],
              ["2020-02-07", 35, "人民日报"],
              ["2020-02-07", 2, "国家卫健委"],
              ["2020-02-07", 6, "央视网"],
              ["2020-02-07", 4, "新华社"],
              ["2020-02-06", 54, "人民日报"],
              ["2020-02-06", 1, "国家卫健委"],
              ["2020-02-06", 2, "央视网"],
              ["2020-02-06", 2, "新华社"],
              ["2020-02-05", 51, "人民日报"],
              ["2020-02-05", 5, "新华社"],
              ["2020-02-05", 1, "央视网"],
              ["2020-02-04", 65, "人民日报"],
              ["2020-02-04", 3, "新华社"],
              ["2020-02-04", 3, "央视网"],
              ["2020-02-03", 54, "人民日报"],
              ["2020-02-03", 4, "央视网"],
              ["2020-02-03", 4, "新华社"],
              ["2020-02-02", 9, "新华社"],
              ["2020-02-02", 51, "人民日报"],
              ["2020-02-02", 14, "央视网"],
              ["2020-02-01", 53, "人民日报"],
              ["2020-02-01", 11, "央视网"],
              ["2020-02-01", 3, "新华社"],
            ],
          },
        ],
      },
      dataec_7: {
        title: {
          text: "所有新闻的关键字",
          left: "center",
          textStyle: {
            fontSize: 30,
            color: "#c1f5ff",
          },
        },
        tooltip: {
          trigger: "item",
        },
        series: [
          {
            type: "wordCloud",
            shape: "circle",
            left: "center",
            top: "center",
            width: "70%",
            height: "80%",
            right: null,
            bottom: null,
            sizeRange: [12, 60],
            rotationRange: [-90, 90],
            rotationStep: 45,
            gridSize: 8,
            drawOutOfBound: false,
            layoutAnimation: true,
            textStyle: {
              fontFamily: "sans-serif",
              fontWeight: "bold",
              color: function () {
                return (
                  "rgb(" +
                  [
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                    Math.round(Math.random() * 160),
                  ].join(",") +
                  ")"
                );
              },
            },
            emphasis: {
              focus: "self",
              textStyle: {
                shadowBlur: 10,
                shadowColor: "#333",
              },
            },
            data: [
              { name: "感染率", value: 0.6476650525941177 },
              { name: "务工人员", value: 0.6414673752000001 },
              { name: "外籍", value: 0.5350974474847059 },
              { name: "宿舍", value: 0.45977519052352944 },
              { name: "新加坡", value: 0.43050897135764704 },
              { name: "感染", value: 0.4010170473147059 },
              { name: "新冠", value: 0.3516108089088235 },
              { name: "近九成", value: 0.3255136561147059 },
              { name: "务工", value: 0.29437815746764706 },
              { name: "感染者", value: 0.29098071961 },
              { name: "最大", value: 0.2633435356317647 },
              { name: "肺炎", value: 0.25975804264 },
              { name: "万名", value: 0.2506111852482353 },
              { name: "确诊", value: 0.2372313798502941 },
              { name: "病例", value: 0.22732285454588233 },
              { name: "社区", value: 0.22513443783794118 },
              { name: "高出", value: 0.21076723505882353 },
              { name: "截止", value: 0.20913471813117648 },
              { name: "潜在", value: 0.2049192537132353 },
              { name: "群体", value: 0.20398815606970588 },
              { name: "集体", value: 0.1880451933014706 },
              { name: "当地", value: 0.17241663620588235 },
              { name: "统计", value: 0.16776368366941177 },
              { name: "基本", value: 0.14121050338529412 },
              { name: "显示", value: 0.13291897662235294 },
              { name: "目前", value: 0.11515551717117647 },
              { name: "成为", value: 0.11378297054823529 },
            ],
          },
        ],
      },
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    bai() {
      this.isTF = false;
    },
    //   点击
    look(data) {
      console.log(data);
      this.isTF = true;
      switch (data) {
        case "main":
          this.ech("sc", this.dataec);
          break;
        case "xx":
          this.ech("sc", this.dataec_2);
          break;
        case "main3":
          this.ech("sc", this.dataec_3);
          break;
        case "main":
          break;
        case "main5":
          this.ech("sc", this.dataec_4);
          break;
        case "main6":
          this.ech("sc", this.dataec_5);
          break;
        case "main7":
          this.ech("sc", this.dataec_6);
          break;
        case "main8":
          this.ech("sc", this.dataec_7);
          break;
      }
    },
    ech(class_x, data) {
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById(class_x));
      // 绘制图表
      myChart.clear();
      myChart.setOption(data);
    },
    // 地图
    buildMap() {
      let myChart = echarts.init(document.getElementById("main4"));
      let option = {
        tooltip: {
          formatter: function (params, ticket, callback) {
            return (
              params.seriesName + "<br />" + params.name + ":" + params.value
            );
          }, //数据格式化
        },
        visualMap: {
          min: 0,
          max: 1500,
          left: "left",
          top: "bottom",
          text: ["高", "低"], //取值范围的文字
          inRange: {
            color: ["#fff4e6", "#dd2002"], //取值范围的颜色
          },
          show: true, //图注
        },
        geo: {
          map: "china",
          roam: false, //不开启缩放和平移
          zoom: 1.23, //视角缩放比例
          label: {
            normal: {
              show: true,
              fontSize: "10", //注意：地图省份名字字体如果过大会导致字体重叠
              color: "rgba(0,0,0,0.7)",
            },
          },
          itemStyle: {
            normal: {
              borderColor: "rgba(0, 0, 0, 0.2)",
            },
            emphasis: {
              areaColor: "#F3B329", //鼠标选择区域颜色
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
        },
        series: [
          {
            name: "信息量",
            type: "map",
            geoIndex: 0,
            data: this.dataList,
          },
        ],
      };
      myChart.setOption(option);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.ech("main", this.dataec);
    this.ech("xx", this.dataec_2);
    this.ech("main3", this.dataec_3);
    this.ech("main5", this.dataec_4);
    this.ech("main6", this.dataec_5);
    this.ech("main7", this.dataec_6);
    this.ech("main8", this.dataec_7);
    this.buildMap();
  },

  //beforeCreate() {}, //生命周期 - 创建之前
  //beforeMount() {}, //生命周期 - 挂载之前
  //beforeUpdate() {}, //生命周期 - 更新之前
  //updated() {}, //生命周期 - 更新之后
  //beforeDestroy() {}, //生命周期 - 销毁之前
  //destroyed() {}, //生命周期 - 销毁完成
  //activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
};
</script>
<style scoped>
.Data {
  padding: 50px;
  display: flex;
  justify-content: space-around;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: linear-gradient(
    to right,
    #3f3faa,
    rgb(90, 82, 115),
    #6599d5
  );
}
.Data > div {
  flex: 33.3%;
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
  margin: 5px;
}
.Data > div > div {
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  border-radius: 30px;
  margin: 5px;
  /* background-image: linear-gradient(to right , #55574e, rgb(164, 233, 148),#5e96d2); */
  background-color: rgba(78, 75, 75, 0.3);
}
.menu {
  position: absolute;
  width: 100vw;
  height: 100vh;
  opacity: 0.8;
  z-index: 99;
  background-color: rgb(8, 9, 9);
  display: none;
}
#sc {
  width: 100vw;
  height: 100vh;
}
</style>