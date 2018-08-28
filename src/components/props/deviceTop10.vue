<template>
  <div class="props40">
    <div class="dataMain" style="">
      <Card style="width:100%;height:100%;">
        <p slot="title" style="color:#fff;font-size: 16px;">TOP10的设备</p>
        <ul class="props_ul">
          <li v-for="(item,index) in goodsList" :key="index" style="margin-top:2%;">
            <span>{{ item.nick_name }}</span>
            <span>
              {{ item.goods_count }}件
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
  import axios from 'axios'
  import echarts from 'echarts'
  //  import robotChart1 from 'robotChart1'
  export default {
    data() {
      return {
        goodsList: [{
          nick_name: '1号',
          goods_count: 2082
        }, {
          nick_name: '2号',
          goods_count: 2081
        }, {
          nick_name: '3号',
          goods_count: 2080
        }, {
          nick_name: '4号',
          goods_count: 1082
        }, {
          nick_name: '5号',
          goods_count: 82
        }, {
          nick_name: '6号',
          goods_count: 72
        }, {
          nick_name: '7号',
          goods_count: 62
        }, {
          nick_name: '8号',
          goods_count: 52
        }, {
          nick_name: '9号',
          goods_count: 42
        }, {
          nick_name: '10号',
          goods_count: 32
        }]
      }
    },
    watch: {
      datatime: function () {
        this.device_top()
      }
    },
    mounted() {
      this.device_top()
    },
    methods: {
      device_top() {
        // axios.get(``).then((data) => {
        //     
        //   let Data = data.data
        //   this.goodsList = Data
        // })
      },
    },
    components: {

    },
    computed: {
      ...mapState([
        "datatime",
        "getdata"
      ]),
    },
  }

</script>

<style>


</style>
