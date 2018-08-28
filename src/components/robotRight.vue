<template>
  <div class="robotRight" ref="robotRight">
    <!-- <button @click="add('goodsTop5', '我是A')" style="position: absolute;z-index: 100;">添加A组件</button>
    <button @click="add('areaTop5', '我是B')" style="position: absolute;margin-left:100px;z-index: 100;">添加B组件</button> -->
    <component :is="item.value"  v-for="(item,index) in rightprops" :key="index"></component>
  </div>
</template>

<script type="text/ecmascript-6">
import {
    mapState,
    mapMutations
  } from "vuex";
  import echarts from 'echarts'
  import goodsTop5 from './props/goodsTop5'
  import areaTop5 from './props/areaTop5'
  import deviceTop10 from './props/deviceTop10'
  import deviceOnline from './props/deviceOnline'
  import payMode from './props/payMode'
  import sexAgeData from './props/sexAgeData'
  import payMode_chart from './props/payMode_chart'
  import clentCVR from './props/clentCVR'
  export default {
    data() {
      return {
        items: []
      }
    },
    methods: {
    },
    components: {
      goodsTop5,
      areaTop5,
      deviceTop10,
      deviceOnline,
      payMode,
      sexAgeData,
      clentCVR,
      payMode_chart
    },
     computed: {
      ...mapState([
        "rightprops"
      ])
    },
  }

</script>

<style>
  .robotRight {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: auto;
  }

  .left1,
  .left2 {
    width: 100%;
    height: 50%;
    position: relative;
  }

</style>
