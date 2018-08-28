<template>
  <div class="props30">
    <div class="dataMain" style="">
      <ve-histogram :data="chartData" :theme="chartTheme" :settings="chartSettings" width="100%" height="100%"></ve-histogram>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import echarts from 'echarts'
  //  import robotChart1 from 'robotChart1'
  export default {
    data() {
      this.chartSettings = {
          metrics: ['点击用户', '购买用户'],
          dimension: ['日期'],

          scale: true,
          xAxis: {
            type: 'value',
            //设置坐标轴字体颜色和宽度
            axisLine: {
              lineStyle: {
                color: 'yellow',
                width: 2
              }
            },
          },

        },
        this.chartTheme = {
          categoryAxis: {
            axisLabel: { //X坐标轴刻度
              color: '#fff'
            },
            axisLine: {
              lineStyle: {
                color: '#fff'
              }
            }
          },
          valueAxis: {
            axisLabel: { //Y坐标轴刻度
              show: true,
              color: '#fff'
            },
            axisLine: { //Y坐标轴线
              lineStyle: {
                color: '#00000000'
              }
            },
            splitLine: { //图表区域的线
              lineStyle: {
                color: '#fff',
                type: 'dotted',
              }
            }
          },
          legend: { //组件，
            textStyle: {
              color: '#fff'
            }
          }
        }
      return {
        chartData: {
          columns: ['日期', '点击用户', '购买用户', '下单率'],
          rows: [{
              '日期': '1/1',
              '点击用户': 1393,
              '购买用户': 1093,
              '下单率': 0.32
            },
            {
              '日期': '1/2',
              '点击用户': 3530,
              '购买用户': 3230,
              '下单率': 0.26
            },
            {
              '日期': '1/3',
              '点击用户': 2923,
              '购买用户': 2623,
              '下单率': 0.76
            },
            {
              '日期': '1/4',
              '点击用户': 1723,
              '购买用户': 1423,
              '下单率': 0.49
            },
            {
              '日期': '1/5',
              '点击用户': 3792,
              '购买用户': 3492,
              '下单率': 0.323
            },
            {
              '日期': '1/6',
              '点击用户': 4593,
              '购买用户': 4293,
              '下单率': 0.78
            }
          ]
        },
      }
    },
    components: {

    }
  }

</script>

<style>
  

</style>
