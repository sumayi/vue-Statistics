<template>
  <div class="robotmap">
    <ve-map :data="chartData" :settings="chartSettings" width="100%" height="100%"></ve-map>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
      this.chartSettings = {
        position: 'china',
        dimension: '位置', //圆点（维度）
        metrics: ['机器'], //详情（指标）
        roam: false,//是否开启鼠标缩放
        label: { //字体设置
          show: false,
          position: [10, 10],
        },
        // aspectScale:0.75,
        // mapGrid: {
        //   left: 0,
        //   right: 0,
        //   top: 0,
        //   bottom: 0
        // },
        scaleLimit:{ min: 1.2, max: 2 },
        itemStyle: {
          normal: {
            areaColor: '#ccc', //地图颜色
            borderColor: 'rgba(0, 0, 0, 0.2)', //边界颜色
            color: '#443b3b', //字体及圆点颜色
            fontSize: '10px',

          },

        },
        dataType: {
          '机器': 'normal'
        }
      }
      return {
        chartData: {
          columns: ['机器'],
          rows: [{
              '位置': '吉林',
              '税收': 123,
              '机器': 123,
              '面积': 92134
            },
            {
              '位置': '北京',
              '税收': 1223,
              '机器': 2123,
              '面积': 29234
            },
            {
              '位置': '上海',
              '税收': 2123,
              '机器': 1243,
              '面积': 94234
            },
            {
              '位置': '浙江',
              '税收': 4123,
              '机器': 5123,
              '面积': 29234
            },
            {
              '位置': '广西',
              '税收': 4123,
              '机器': 5123,
              '面积': 59234
            },
            {
              '位置': '新疆',
              '税收': 4123,
              '机器': 5123,
              '面积': 59234
            }
          ]
        }
      }
    },
    mounted() {

    },

    methods: {



    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .robotmap {
    width: 100%;
    height: 60%;
    position: relative;
  }

</style>
