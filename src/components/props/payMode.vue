<template>
  <div class="props15">
    <div class="dataMain" style="" ref="dataMain">
      <Card style="width:100%;height:100%;">
        <p slot="title" style="color:#fff;font-size: 16px;">支付方式比</p>
        <div class="payMode_main" :style="{height:payMode_main}">
          <div class="payMode_data">
            <div class="pay_wx" :style="{width:''+payMode_data.pay_wx+'%'}">{{payMode_data.pay_wx}}%</div>
            <div class="pay_zfb" :style="{width:''+payMode_data.pay_zfb+'%'}">{{payMode_data.pay_zfb}}%</div>
          </div>
          <div class="pay_hint">
            <div class="hint_wx">
              <p class="pay_wx"></p>
              <span>微信</span>
            </div>
            <div class="hint_zfb">
              <p class="pay_zfb"></p>
              <span>支付宝</span>
            </div>
          </div>
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
  import axios from 'axios'
  import echarts from 'echarts'
  export default {
    data() {
      return {
        payMode_main: 0,
        payMode_data: {
          pay_wx: 50,
          pay_zfb: 50,
        },
      }
    },
    watch: {
      datatime: function () {
        this.get_payData()
      },
      soleDevice_code: function () {
        this.get_payData()
      }

    },
    mounted() {
      this.payMode_main = (this.$refs.dataMain.offsetHeight - 44) + 'px'
      const that = this
      window.onresize = function temp() {
        that.payMode_main = (that.$refs.dataMain.offsetHeight - 44) + 'px'
      };
      this.get_payData()
    },
    methods: {
      get_payData() {
        // axios.get(``)
        //   .then((data) => {
        //     try {
        //       let Data = data.data
        //       let sum = Data[0].count + Data[1].count;
        //       this.payMode_data.pay_wx = (Data[0].count / sum).toFixed(2) * 100
        //       this.payMode_data.pay_zfb = 100 - this.payMode_data.pay_wx
        //     } catch (err) {
        //       console.log(err)
        //     }

        //   })
      },
    },
    components: {

    },
    computed: {
      ...mapState([
        "datatime",
        "soleDevice_code",
        "getdata"
      ]),
    },
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

  .payMode_data {
    width: 100%;
    display: flex;
    margin-top: 1em;

  }

  .payMode_data div {
    border-radius: 10px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .pay_wx {
    background: #25d66c;
  }

  .pay_zfb {
    background: #45c7e7;
  }

  .pay_hint {
    width: 100%;
    display: flex;
    bottom: 0;
    justify-content: space-around;
    position: absolute;
  }

  .pay_hint div {
    text-align: center;
  }

  .pay_hint p {
    width: 50px;
    height: 10px;
    border-radius: 10px;
  }

</style>
