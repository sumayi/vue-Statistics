<template>
  <div class="props30">
    <div class="dataMain" style="" ref="dataMain">
      <Card style="width:100%;height:100%;">
        <p slot="title" style="color:#fff;font-size: 16px;">支付方式图比</p>
        <div class="payMode_main" :style="{height:payMode_main}">
          <ve-pie :data="chartData2" :theme="chartTheme" :extend="chartExtend" :settings="chartSettings2" width="100%" height="100%" v-if="payMode_main!=0"></ve-pie>
        </div>
      </Card>


    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import echarts from 'echarts'
  //  import robotChart1 from 'robotChart1'
  export default {
    data() {
      this.chartSettings2 = {
          radius: 100,
          //   labelLine: {
          //     show: true,
          //     length: 10,
          //     length2: 10,

          //   },
          label: {
            position: 'inside',
            color: '#fff',
          },
          roseType: 'radius',
        },
        this.chartExtend = {
          series: {
            radius: '50%',
            center: ['50%', '60%']
          }
        },
        this.chartTheme = {
          legend: { //组件，
            show: false,
            textStyle: {
              color: '#fff'
            },
            top: '10%',
          },
          itemStyle: {
            //   borderColor:'#000',
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10
          },
          radius: ['10%', '50%'],
          center: ['10%', '20%']
        }
      return {
        chartData2: {
          columns: ['支付工具', '访问用户'],
          rows: [{
              '支付工具': '微信',
              '访问用户': 2393,
              '访问用户1': 7393
            },
            {
              '支付工具': '支付宝',
              '访问用户': 3530,
              '访问用户1': 2393
            },
          ]
        },
        payMode_main: 0,
      }
    },
    mounted() {
      this.payMode_main = (this.$refs.dataMain.offsetHeight - 44) + 'px'
      const that = this
      window.onresize = function temp() {
        that.payMode_main = (that.$refs.dataMain.offsetHeight - 44) + 'px'
      };
    },
    components: {

    }
  }

</script>

<style>
  .payMode_main {
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 12px;
    flex-wrap: wrap;
    position: relative;
  }

</style>
