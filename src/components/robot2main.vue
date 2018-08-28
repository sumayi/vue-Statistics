<template>
  <div class="robot2_main">
    <div class="robot2_main_body">
      <div class="sum1">
        <div class="sum1_mon">
          <div class="sum_text">
            <span>总交易额：</span>
            <span>{{sumcount}}笔</span>
          </div>
          <div class="sum_money">￥{{sumprice}}</div>
        </div>
        <div class="sum1_num" style="padding-left: 4px;">
          <div class="sum_text">
            <span>今日交易额：</span>
            <span>{{todaycount}}笔</span>
          </div>
          <div class="sum_number">￥{{todayprice}}</div>
        </div>
      </div>
      <div class="sum2">
        <div class="sum2_title">点击---购买数</div>
        <ve-line :data="chartData" :data-zoom="dataZoom" :settings="chartSettings" :theme="chartTheme" width="100%" height="100%"></ve-line>

      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  import {
    mapState,
    mapMutations
  } from "vuex";
  import axios from 'axios'
  import echarts from 'echarts'
  export default {
    data() {
      this.dataZoom = [{ //折线缩略图
        show: false,
        type: 'slider',
        start: 0,
        end: 100,
        dataBackground: {
          lineStyle: {
            color: ' #fff',
            opacity: 1
          },
        },
      }]
      this.chartSettings = {
          area: false,
          showDataZoom: true,
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
            // show: false,
            textStyle: {
              color: '#fff',
            },
            top: '15%',
          }
        }
      return {
        sumcount: 95,
        sumprice: 9527,
        todaycount: 5,
        todayprice: 52,
        chartData: {
          columns: ['days', 'click', 'sales'],
          rows: [{
            days: "2018-05-01",
            click: 259,
            sales: 34
          }, {
            days: "2018-05-02",
            click: 159,
            sales: 34
          }, {
            days: "2018-05-03",
            click: 359,
            sales: 84
          }, {
            days: "2018-05-04",
            click: 159,
            sales: 134
          }, {
            days: "2018-05-05",
            click: 259,
            sales: 34
          }, {
            days: "2018-05-06",
            click: 159,
            sales: 14
          }],
        }
      }
    },
    watch: {
      soleDevice_code: function () {
        this.get_CVR()
        this.get_price()
      }

    },
    mounted() {
    //   this.get_CVR()
    //   this.get_price()
    },
    methods: {
      get_CVR() {
        this.$store.state.CVRlist = []
        // axios.get(`/`).then((data) => {
        //   for (let i in data.data) {
        //     let str = data.data[i].days
        //     data.data[i].days = str.slice(0, 4) + '-' + str.slice(4, 6) + '-' + str.slice(6, 8)
        //     data.data[i].sales = data.data[i].sales == null ? 0 : data.data[i].sales
        //   }
        //   console.table(data.data)
        //   this.$store.state.CVRlist = this.chartData.rows = data.data
        // })

      },
      get_price() {
        // axios.get(``).then((data) => {
        //   this.sumcount = data.data[0].count
        //   this.sumprice = data.data[0].sum / 100
        //   this.todaycount = data.data[1].count
        //   this.todayprice = data.data[1].sum == null ? 0 : data.data[1][0].sum / 100
        // })
      },
    },
    components: {

    },
    computed: {
      ...mapState([
        'CVRlist',
        'soleDevice_code',
      ])
    },
  }

</script>

<style>
  .robot2_main {
    height: 90%;
    padding: 6px 6px 0px 6px;
    color: #fff;
  }

  .robot2_main_body {
    background: #00000094;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  .sum1 {
    width: 100%;
    height: 30%;
    display: flex;
    padding: 4px;
  }

  .sum1_mon,
  .sum1_num,
  .sum1_no_aft {
    width: 50%;
    height: 100%;
    position: relative;
    border-bottom: 1px solid rgb(234, 208, 208);
  }

  .sum_money,
  .sum_number {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
  }

  .sum_text {
    position: absolute;
    font-size: 10px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-right: 4px;
  }

  .sum1_mon:after {
    content: '';
    width: 2px;
    height: 90%;
    display: inline-block;
    background: #8c4242;
    position: absolute;
    top: 0;
    margin-top: 1%;
    right: 0;
  }

  .sum2 {
    width: 100%;
    height: 70%;
    box-sizing: border-box;
    position: relative;
  }

  .sum2_title {
    position: absolute;
    margin: 4px 0px 0px 4px;
  }

</style>
