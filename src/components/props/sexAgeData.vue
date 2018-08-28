<template>
  <div class="props30">
    <div class="dataMain" style="" ref="dataMain">
      <div class="card_title">
        <p slot="title" style="color:#fff;font-size: 16px;font-weight: 700;">用户性别及年龄比</p>
      </div>
      <div class="sex_age_main" :style="{height:sex_age_main_hei}">
        <!-- <ve-pie :data="sexData" :theme="sexTheme" :extend="sexExtend" :settings="sexSettings" width="100%" height="100%" v-if="sex_age_main_hei!=null"></ve-pie> -->
        <div class="sex">
          <ve-pie :data="sexData" :theme="sexTheme" :extend="sexExtend" :settings="sexSettings" width="100%" height="100%" v-if="sex_age_main_hei!=null"></ve-pie>
        </div>
        <div class="age">
          <ve-ring :data="ageData" :theme="ageTheme" :extend="ageExtend" :settings="ageSettings" width="100%" height="100%" v-if="sex_age_main_hei!=null"></ve-ring>
        </div>
      </div>
      <Spin size="large" fix style="background-color: rgba(3, 20, 31, 0.93);" v-show="getdata"></Spin>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    mapState,
    mapMutations
  } from "vuex";
  import echarts from 'echarts'
  export default {

    data() {
      this.ageSettings = {
        labelLine: {
          show: true,
          length: 5,
          length2: 5,
        },
        label: {
          position: 'outside',
          color: '#fff',
          formatter: '{d}%',
        },
        roseType: 'radius',
      }
      this.ageExtend = {
        series: {
          radius: ['40%', '60%'],
          center: ['50%', '40%']
        }
      }
      this.ageTheme = {
        legend: { //组件，
          show: false,
          textStyle: {
            color: '#fff',
          },
          top: '78%',
        },
        itemStyle: {
          // shadowColor: 'rgba(0, 0, 0, 0.5)',
          //   shadowBlur: 10
        },
      }
      this.sexSettings = {
        labelLine: {
          show: true,
          length: 10,
          length2: 10,
        },
        label: {
          position: 'inside',
          color: '#fff',
          formatter: '{b}:{d}%',
        },
        roseType: 'radius',
      }
      this.sexExtend = {
        series: {
          radius: '60%',
          center: ['50%', '40%']
        }
      }
      this.sexTheme = {
        legend: { //组件，
          show: false,
          textStyle: {
            color: '#fff',
          },
          top: '85%',
        },
        itemStyle: {
          // shadowColor: 'rgba(0, 0, 0, 0.5)',
          // shadowBlur: 10
        },
      }
      return {
        payMode_data: {
          pay_wx: 57,
          pay_zfb: 43,
        },
        sex_age_main_hei: null,
        sexData: {
          columns: ['性别', '数量'],
          rows: [{
              '性别': '男',
              '数量': 2393,
            },
            {
              '性别': '女',
              '数量': 3530,
            },
          ]
        },
        ageData: {
          columns: ['年齡', '用户'],
          rows: [{
              '年齡': '10-20',
              '用户': 2393,
            },
            {
              '年齡': '20-30',
              '用户': 3530,
            }, {
              '年齡': '30-40',
              '用户': 3530,
            }, {
              '年齡': '40-50',
              '用户': 3530,
            },
            {
              '年齡': '50以上',
              '用户': 3530,
            },
          ]
        }
      }
    },
    mounted() {
      this.sex_age_main_hei = (this.$refs.dataMain.offsetHeight - 44) + 'px'
    },
    components: {

    },
    computed: {
      ...mapState([
        'getdata'
      ]),
    }
  }

</script>

<style>
  .card_title {
    height: 44px;
    border-bottom: 1px solid #e8eaec;
    padding: 14px 16px;
    line-height: 1;
  }

  .sex_age_main {
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 12px;
    flex-wrap: wrap;
  }

  .sex_age_main>div {
    height: 100%;
    width: 50%;
    position: relative;
  }

  .sex:after {
    content: '';
    width: 2px;
    height: 90%;
    display: block;
    background: #f3eeee;
    position: absolute;
    right: 0;
    top: 5%;
  }

</style>
