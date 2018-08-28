<template>
  <div class="props15">
    <div class="dataMain" style="" ref="dataMain">
      <Card style="width:100%;height:100%;">
        <p slot="title" style="color:#fff;font-size: 16px;">顾客转化比</p>
        <div class="clentCVR" :style="{height:clentCVR_hei}">
          {{CVRdata}}%
        </div>
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
  export default {
    data() {
      return {
        clentCVR_hei: null,
        clickdata: 0,
        salesdata: 0,
        
      }
    },
    mounted() {
      this.clentCVR_hei = (this.$refs.dataMain.offsetHeight - 44) + 'px'
    },
    methods: {

    },
    components: {

    },
    computed: {
      ...mapState([
        'CVRlist',
        'datatime',
        'getdata'
      ]),
      CVRdata() {
        //   this.clickdata=this.salesdata =0
        // for (let i in this.CVRlist) {
        //   if (this.CVRlist[i].days > this.datatime[0] && this.CVRlist[i].days < this.datatime[1]) {
        //     this.clickdata += this.CVRlist[i].click
        //     this.salesdata += this.CVRlist[i].sales
        //   }
        // }
        // return (this.salesdata / this.clickdata * 100).toFixed(1)
        return 26
      }
    },
  }

</script>

<style>
  .clentCVR {
    display: flex;
    color: #c7c73b;
    font-size: 12px;
    align-items: center;
    justify-content: center;
    font-size: 36px;
  }

</style>
