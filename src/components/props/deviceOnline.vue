<template>
  <div class="props15">
    <div class="dataMain" style="">
      <Card style="width:100%;height:100%;">
        <p slot="title" style="color:#fff;font-size: 16px;">设备在线数据</p>
        <div class="deviceOnline_mian">
          <div class="device_count">
            <p>在线</p>
            <p>
              <span>{{deviceOnline.count}}</span>台</p>
          </div>
          <div class="device_time">
            <p>总运行时长</p>
            <p>
              <span style="">{{deviceOnline.time}}</span>h</p>
          </div>
          <div class="device_km">
            <p>总里程数</p>
            <p>
              <span>{{deviceOnline.km}}</span>km</p>
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
        deviceOnline: {
          count: 10,
          time: 1639,
          km: 16894
        },
      }
    },
    watch: {
      soleDevice_code: function () {
        this.get_dev_data()
      }
    },
    mounted() {
      this.get_dev_data()
    },
    methods: {
      get_dev_data() {
        // axios.get(``).then((data) => {
        //   this.deviceOnline.count = data.data[0].count
        // })
      }
    },
    components: {

    },
    computed: {
      ...mapState([
        'soleDevice_code',
        'getdata'
      ]),
    },
  }

</script>

<style>
  .deviceOnline_mian {
    display: flex;
    justify-content: space-between;
    color: #fff;
    font-size: 12px;
  }

  .deviceOnline_mian>div {
    margin-top: 1em;
  }

  .deviceOnline_mian div span {
    font-size: 24px;
    color: #c9c93b;
  }

</style>
