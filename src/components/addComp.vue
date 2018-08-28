<template>
  <div class="addComp" :class="{addComp_show:addCompShow}">
    <div class="sel_plug">
      <div class="plug_box" v-show="!clickRobot">
        <div class="leftprops">
          <draggable element="ul" v-model="addleft" :options="sortOptions" @end="leftf" @add="leftf">
            <li v-for="(element, index) in addleft" :key="index">
              <div>{{element.label}}</div>
            </li>
          </draggable>
        </div>
        <div class="allprops">
          <draggable element="ul" v-model="plugList" :options="sortOptions" @end="allf" @add="allf">
            <li v-for="(item,index) in plugList" :key="index">
              <div>{{item.label}}</div>
            </li>
          </draggable>
        </div>
        <div class="rightprops">
          <draggable element="ul" v-model="addright" :options="sortOptions" @end="rightf" @add="rightf">
            <li v-for="(item,index) in addright" :key="index">
              <div>{{item.label}}</div>
            </li>
          </draggable>
        </div>

        <div class="save_plug">
          <i-button type="primary" shape="circle" @click="resetPlug">重置</i-button>
          <i-button type="primary" shape="circle" style="margin-left:10px;" @click="savePlug">保存</i-button>
        </div>
      </div>
      <div class="back_plug" v-show="clickRobot">
        <i-button type="primary" shape="circle" @click="back_plug">返回</i-button>
      </div>
    </div>
    <div class="sel_time">
      <i-col span="12" style="width:200px;">
        <Date-picker type="daterange" :options="options2" placement="bottom-end" placeholder="选择日期" style="width: 200px" @on-change='changeDate'></Date-picker>
      </i-col>
    </div>
    <div class="sel_device">

      <div class="sel_device_title">机器列表</div>
      <div class="device_list">
        <ul>
          <li v-for="(item,index) in device_list" :key="index" @click="soleRobot(item.device_code,index)" :style="{'border':dev_index==index?'1px solid #afcf93':'none'}">
            <span>{{item.nick_name}}</span>
            <span>{{item.goods_count}}件</span>
          </li>
        </ul>

      </div>
      <!-- <Page :current="1" :total="this.device_list.length" :page-size="5" simple @on-change="changePage" style="height:10%;color:#fff;"></Page> -->
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    mapState,
    mapMutations
  } from "vuex";
  import axios from 'axios'
  import draggable from "vuedraggable";
  export default {
    data() {
      return {
        options2: {
          disabledDate(date) {
            return date && date.valueOf() < 1524700800000;
          },
          shortcuts: [{
              text: '最近一周',
              value() {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
                return [start, end];
              }
            },
            {
              text: '最近一个月',
              value() {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
                return [start, end];
              }
            },
            {
              text: '最近三个月',
              value() {
                const end = new Date();
                const start = new Date();
                start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
                return [start, end];
              }
            }
          ]
        },

        device_list: [],
        sortOptions: {
          group: 'sample',
          animation: 150,
        },
        plugList: [{
          value: 'payMode_chart',
          label: '支付方式图比'
        },],
        addleft: [{
          value: 'deviceTop10',
          label: '前10的设备'
        }, {
          value: 'deviceOnline',
          label: '设备在线数据'
        }, {
          value: 'sexAgeData',
          label: '用户性别年龄数据'
        }, ],
        addright: [{
          value: 'payMode',
          label: '支付方式比'
        }, {
          value: 'clentCVR',
          label: '顾客转化比'
        }, {
          value: 'goodsTop5',
          label: '前5的商品'
        }, {
          value: 'areaTop5',
          label: '前5的区域'
        }],
        clickRobot: false,
        dev_index: null,
      }
    },
    mounted() {
      this.$store.state.leftprops = this.addleft
      this.$store.state.rightprops = this.addright
      this.$store.state.datatime[0] = '2018-05-01'
      this.endtime()
      this.get_device_list()
      this.getplug()
    },
    methods: {
      getplug() {
        console.time("XXX");
        // axios.get(
        //   (data) => {
        //     let Data = data.data[0]
        //     if (Data) {
        //       this.$store.state.leftprops = this.addleft = JSON.parse(Data.leftprops)
        //       this.$store.state.rightprops = this.addright = JSON.parse(Data.rightprops)
        //       this.plugList = JSON.parse(Data.midprops)
        //     }
        //     console.timeEnd("XXX");
        //   })
      },
      resetPlug() {
        this.getplug()
      },
      savePlug() {
        console.log(this.leftprops)
        let leftprops = JSON.stringify(this.leftprops)
        let rightprops = JSON.stringify(this.rightprops)
        let midprops = JSON.stringify(this.plugList)
        console.log(midprops)
        // axios.get(
        // ).then(
        //   (data) => {
        //     if (data.data == 'ok') {
        //       this.$Message.info('保存成功');
        //     } else {
        //       this.$Message.info('保存失败，请联系管路员');
        //     }
        //   })
      },
      back_plug() {
        this.dev_index = null
        this.$router.push('updata')
        this.clickRobot = false
        this.$store.state.soleDevice_code = ''
        this.getplug()
      },
      soleRobot(e, n) {
        this.$store.state.addCompShow = false
        this.dev_index = n
        this.$router.push('updata')
        this.$store.state.soleDevice_code = e
        this.clickRobot = true
        this.$store.state.leftprops = [{
          value: 'goodsTop5',
          label: '前5的商品'
        }, {
          value: 'sexAgeData',
          label: '用户性别年龄数据'
        }]
        this.$store.state.rightprops = [{
          value: 'deviceOnline',
          label: '设备在线数据'
        }, {
          value: 'payMode',
          label: '支付方式比'
        }, {
          value: 'clentCVR',
          label: '顾客转化比'
        }]
      },
      changePage(page) {
        this.get_device_list();
      },
      get_device_list() {
        this.device_list = []
        // axios.get(`/d`).then((data) => {
        //   this.device_list = data.data
        // })
      },
      endtime() {
        var date = new Date();
        var seperator1 = "-";
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
          month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
          strDate = "0" + strDate;
        }
        var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate
        this.$store.state.datatime[1] = currentdate;
      },
      changeDate(e) {
        this.$store.state.datatime = e
        console.log(this.datatime)
      },

      allf() {
        console.log(this.plugList)
      },
      leftf() {
        this.$store.state.leftprops = this.addleft
      },
      rightf() {
        this.$store.state.rightprops = this.addright
      },
      // @@@@@@@@@@@
      save_plug() {
        console.log(this.area_plug_list[0].plug)
      }
    },
    components: {
      draggable,
    },
    computed: {
      ...mapState([
        "addCompShow",
        'allList',
        "leftprops",
        "rightprops",
        "datatime",
        "soleDevice_code"
      ])
    },
  }

</script>

<style>
  .addComp {
    height: 100%;
    width: 30%;
    position: fixed;
    padding: 6px;
    z-index: 100;
    background: #060104e3;
    left: 0;
    transform: translateX(-100%);
    transition: transform 0.5s;
  }

  .addComp_show {
    transform: translateX(0);
  }

  .sel_plug {
    width: 100%;
    height: 25%;
    position: relative;
    display: flex;
    color: #fff;
    justify-content: space-around;
  }

  .plug_box,
  .back_plug {
    width: 100% !important;
    height: 100% !important;
    position: absolute;
    display: flex;
    color: #fff;
    justify-content: space-around;
  }

  .plug_box>div {
    width: 30%;
    height: 85%;
    display: flex;
  }

  .save_plug {
    position: absolute;
    height: 30px !important;
    bottom: 0px;
    width: 122px !important;
  }

  .leftprops,
  .rightprops {
    background: #b4888866;
  }

  .allprops {
    background: #c5282866;
  }

  .plug_box>div>ul {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .plug_box>div>ul>li {
    width: 90%;
    background: #19172c75;
    border-radius: 10px;
    margin-top: 2px;
    text-align: center;
    cursor: pointer;

  }

  .back_plug {
    justify-content: center;
    align-items: center;
  }

  .back_plug>button {
    height: 30px;
  }

  .sel_time {
    width: 100%;
    height: 5%;
    border-top: 1px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5px;
  }

  /*@@@@@@@@@*/

  .sel_device {
    width: 100%;
    height: 70%;
    color: #000;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    border-top: 1px solid #fff;
    margin-top: 6px;
    padding: 6px;
  }

  .sel_device_title {
    width: 100%;
    height: 5%;
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .device_list {
    height: 85%;
    width: 100%;
    position: relative;
    color: #fff;
    overflow: auto;
  }

  .device_list>ul {
    width: 100%;
    height: 100%;
    position: relative;
    color: #fff;
  }

  .device_list>ul>li {
    padding-top: 8px;
    display: flex;
    justify-content: space-between;
    cursor: pointer;
  }

</style>
