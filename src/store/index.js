import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    addCompShow: false,//侧编辑
    allList: [{
        value: 'deviceTop10',
        label: '前10的设备'
      }, {
        value: 'deviceOnline',
        label: '设备在线数据'
      }, {
        value: 'sexAgeData',
        label: '用户性别年龄数据'
      }, {
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
    leftprops: null,//左侧插件
    rightprops: null,//右侧插件
    CVRlist:null,//点击&&购买数
    datatime:[],//数据时间断控制
    soleDevice_code:'',//查询单个设备code
    getdata:false,
  },
  getters: {
    mcode: state => state.mcode,
    leftprops: state => state.leftprops,
  },
  mutations: {
    chang_data(state, n) {
      state.mcode = n;
    },
    rubber_chang_data1(state, e) { //构建修改值得方法
      e != undefined ? state.rubber_data1 = e : state.rubber_data1 = !state.rubber_data1;
    }
  }
})
export default store
