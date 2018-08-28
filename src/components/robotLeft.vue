<template>
  <div class="robotLeft" ref="robotLeft">
    <component :is="item.value"  v-for="(item,index) in leftprops" :key="index"></component>
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
    import clentCVR from './props/clentCVR'
    import payMode_chart from './props/payMode_chart'
  export default {
    data() {
      return {
        items: []
      }
    },
    methods: {
    },
    mounted() {
        console.log(this.leftprops)
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
        "leftprops"
      ])
    },
  }

</script>

<style>
  .robotLeft {
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
