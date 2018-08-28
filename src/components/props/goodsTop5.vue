<template>
  <div class="props30">
    <div class="dataMain" style="">
      <Card style="width:100%;height:100%;">
        <p slot="title" style="color:#fff;font-size: 16px;">TOP5的商品</p>
        <ul class="props_ul">
          <li v-for="(item,index) in goodsList" :key="index">
            <span>{{ item.name }}</span>
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
          name: '商品1',
          goods_count: 500
        }, {
          name: '商品2',
          goods_count: 400
        }, {
          name: '商品3',
          goods_count: 300
        }, {
          name: '商品4',
          goods_count: 200
        }, {
          name: '商品5',
          goods_count: 100
        }]
      }
    },
    watch: {
      datatime: function () {
        this.device_top()
      },
      soleDevice_code: function () {
        this.device_top()
      }
    },
    mounted() {
      this.device_top()
    },
    methods: {
      device_top() {
        // this.goodsList = []
        // axios.get(``)
        //   .then((data) => {
        //       console.table(data.data)
        //     let Data = data.data
        //     this.goodsList = Data
        //   })
      },
    },
    components: {

    },
    computed: {
      ...mapState([
        "datatime",
        'soleDevice_code',
        'getdata'
      ]),
    },
  }

</script>

<style>


</style>
