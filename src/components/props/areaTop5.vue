<template>
  <div class="props30">
    <div class="dataMain" style="">
      <Card style="width:100%;height:100%;">
        <p slot="title" style="color:#fff;font-size: 16px;">TOP5的区域</p>
        <ul class="props_ul">
          <li v-for="(item,index) in areaList" :key="index">
            <span>{{ item.name }}({{ item.count }}台)</span>
            <span>
              ￥{{ item.rate }}
            </span>
          </li>
        </ul>
      </Card>
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
  //  import robotChart1 from 'robotChart1'
  export default {
    data() {
      return {
        areaList: [{
            name: '成都',
            count:83,
            rate: 196392.2
          },
          {
            name: '上海',
            count:89,
            rate: 121294
          },
          {
            name: '北京',
            count:63,
            rate: 110272.5
          },
          {
            name: '香港',
            count:45,
            rate: 18693.7
          },
          {
            name: '芝加哥',
            count:23,
            rate: 17992.8
          }
        ]
      }
    },
    components: {

    },computed: {
      ...mapState([
        "getdata"
      ]),
    },
  }

</script>

<style>

</style>
