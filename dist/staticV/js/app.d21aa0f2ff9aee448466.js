webpackJsonp([1],{"+IPt":function(t,e){},"+kQY":function(t,e){},"5byl":function(t,e){},"8RTA":function(t,e){},"8Zff":function(t,e){},G9SV:function(t,e){},HKVR:function(t,e){},Hcbd:function(t,e){},IxMC:function(t,e){},Mm8q:function(t,e){},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("IvJb"),i=a("4YfN"),n=a.n(i),o=a("9rMa"),l={data:function(){return{button_down:!1}},methods:{btn_down:function(){this.$store.state.addCompShow=!this.addCompShow,this.button_down=!this.button_down},btn_up:function(){this.button_down=!this.button_down}},components:{},computed:n()({},Object(o.b)(["addCompShow"]))},c={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"robot2_head"},[a("div",{staticClass:"head_mian"},[a("div",{staticClass:"head_title"},[t._v(" 数据可视化平台")]),t._v(" "),a("div",{staticClass:"btn",class:{btn_doen:t.button_down},on:{mousedown:function(e){t.btn_down()},mouseup:function(e){t.btn_up()}}},[t._v("操作")])])])},staticRenderFns:[]};var r=a("C7Lr")(l,c,!1,function(t){a("gOTl")},null,null).exports,d={data:function(){return this.chartSettings={key:"1AF08cFSfhDb8x8DelAVFeBM",bmap:{center:[104.072329,30.67342],zoom:15,roam:!0,silent:!1,mapStyle:{}}},this.chartTooltip={show:!1},{chartSeries:[{type:"scatter",coordinateSystem:"bmap",symbol:"circle",itemStyle:{normal:{color:"red"}},data:[[104.072329,30.66342]]}],bmap:null}},mounted:function(){},methods:{hidCompShow:function(){this.$store.state.addCompShow=!1},afterSet:function(t){this.bmap=t.getModel().getComponent("bmap").getBMap(),this.bmap.addControl(new window.BMap.MapTypeControl),this.bmap.setMapStyle({style:"midnight"})},endmap:function(){}},computed:n()({},Object(o.b)(["addCompShow"]))},u={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"robotmap",on:{click:this.hidCompShow}},[e("ve-bmap",{attrs:{settings:this.chartSettings,"after-set-option-once":this.afterSet,series:this.chartSeries,tooltip:this.chartTooltip,width:"100%",height:"100%"}})],1)},staticRenderFns:[]};var p=a("C7Lr")(d,u,!1,function(t){a("+IPt")},null,null).exports,h=(a("5YEj"),{render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"robotchart1"},[e("ve-histogram",{attrs:{data:this.chartData,settings:this.chartSettings,width:"100%",height:"100%"}})],1)},staticRenderFns:[]});var v=a("C7Lr")({data:function(){return this.chartSettings={metrics:["点击用户","购买用户"],dimension:["日期"]},{chartData:{columns:["日期","点击用户","购买用户","下单率"],rows:[{"日期":"1/1","点击用户":1393,"购买用户":1093,"下单率":.32},{"日期":"1/2","点击用户":3530,"购买用户":3230,"下单率":.26},{"日期":"1/3","点击用户":2923,"购买用户":2623,"下单率":.76},{"日期":"1/4","点击用户":1723,"购买用户":1423,"下单率":.49},{"日期":"1/5","点击用户":3792,"购买用户":3492,"下单率":.323},{"日期":"1/6","点击用户":4593,"购买用户":4293,"下单率":.78}]}}},mounted:function(){},methods:{}},h,!1,function(t){a("UW3H")},"data-v-4c272a51",null).exports,_=a("aozt"),f=a.n(_),m={data:function(){return this.dataZoom=[{show:!1,type:"slider",start:0,end:100,dataBackground:{lineStyle:{color:" #fff",opacity:1}}}],this.chartSettings={area:!1,showDataZoom:!0},this.chartTheme={categoryAxis:{axisLabel:{color:"#fff"},axisLine:{lineStyle:{color:"#fff"}}},valueAxis:{axisLabel:{show:!0,color:"#fff"},axisLine:{lineStyle:{color:"#00000000"}},splitLine:{lineStyle:{color:"#fff",type:"dotted"}}},legend:{textStyle:{color:"#fff"},top:"15%"}},{sumcount:95,sumprice:9527,todaycount:5,todayprice:52,chartData:{columns:["days","click","sales"],rows:[{days:"2018-05-01",click:259,sales:34},{days:"2018-05-02",click:159,sales:34},{days:"2018-05-03",click:359,sales:84},{days:"2018-05-04",click:159,sales:134},{days:"2018-05-05",click:259,sales:34},{days:"2018-05-06",click:159,sales:14}]}}},watch:{soleDevice_code:function(){this.get_CVR(),this.get_price()}},mounted:function(){},methods:{get_CVR:function(){this.$store.state.CVRlist=[]},get_price:function(){}},components:{},computed:n()({},Object(o.b)(["CVRlist","soleDevice_code"]))},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"robot2_main"},[a("div",{staticClass:"robot2_main_body"},[a("div",{staticClass:"sum1"},[a("div",{staticClass:"sum1_mon"},[a("div",{staticClass:"sum_text"},[a("span",[t._v("总交易额：")]),t._v(" "),a("span",[t._v(t._s(t.sumcount)+"笔")])]),t._v(" "),a("div",{staticClass:"sum_money"},[t._v("￥"+t._s(t.sumprice))])]),t._v(" "),a("div",{staticClass:"sum1_num",staticStyle:{"padding-left":"4px"}},[a("div",{staticClass:"sum_text"},[a("span",[t._v("今日交易额：")]),t._v(" "),a("span",[t._v(t._s(t.todaycount)+"笔")])]),t._v(" "),a("div",{staticClass:"sum_number"},[t._v("￥"+t._s(t.todayprice))])])]),t._v(" "),a("div",{staticClass:"sum2"},[a("div",{staticClass:"sum2_title"},[t._v("点击---购买数")]),t._v(" "),a("ve-line",{attrs:{data:t.chartData,"data-zoom":t.dataZoom,settings:t.chartSettings,theme:t.chartTheme,width:"100%",height:"100%"}})],1)])])},staticRenderFns:[]};var b=a("C7Lr")(m,g,!1,function(t){a("Mm8q")},null,null).exports,C={data:function(){return{goodsList:[{name:"商品1",goods_count:500},{name:"商品2",goods_count:400},{name:"商品3",goods_count:300},{name:"商品4",goods_count:200},{name:"商品5",goods_count:100}]}},watch:{datatime:function(){this.device_top()},soleDevice_code:function(){this.device_top()}},mounted:function(){this.device_top()},methods:{device_top:function(){}},components:{},computed:n()({},Object(o.b)(["datatime","soleDevice_code","getdata"]))},y={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"props30"},[a("div",{staticClass:"dataMain"},[a("Card",{staticStyle:{width:"100%",height:"100%"}},[a("p",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{slot:"title"},slot:"title"},[t._v("TOP5的商品")]),t._v(" "),a("ul",{staticClass:"props_ul"},t._l(t.goodsList,function(e,s){return a("li",{key:s},[a("span",[t._v(t._s(e.name))]),t._v(" "),a("span",[t._v("\n            "+t._s(e.goods_count)+"件\n          ")])])}))]),t._v(" "),a("Spin",{directives:[{name:"show",rawName:"v-show",value:t.getdata,expression:"getdata"}],staticStyle:{"background-color":"rgba(3, 20, 31, 0.93)"},attrs:{size:"large",fix:""}})],1)])},staticRenderFns:[]};var w=a("C7Lr")(C,y,!1,function(t){a("weeC")},null,null).exports,x={data:function(){return{areaList:[{name:"成都",count:83,rate:196392.2},{name:"上海",count:89,rate:121294},{name:"北京",count:63,rate:110272.5},{name:"香港",count:45,rate:18693.7},{name:"芝加哥",count:23,rate:17992.8}]}},components:{},computed:n()({},Object(o.b)(["getdata"]))},S={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"props30"},[a("div",{staticClass:"dataMain"},[a("Card",{staticStyle:{width:"100%",height:"100%"}},[a("p",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{slot:"title"},slot:"title"},[t._v("TOP5的区域")]),t._v(" "),a("ul",{staticClass:"props_ul"},t._l(t.areaList,function(e,s){return a("li",{key:s},[a("span",[t._v(t._s(e.name)+"("+t._s(e.count)+"台)")]),t._v(" "),a("span",[t._v("\n            ￥"+t._s(e.rate)+"\n          ")])])}))]),t._v(" "),a("Spin",{directives:[{name:"show",rawName:"v-show",value:t.getdata,expression:"getdata"}],staticStyle:{"background-color":"rgba(3, 20, 31, 0.93)"},attrs:{size:"large",fix:""}})],1)])},staticRenderFns:[]};var k=a("C7Lr")(x,S,!1,function(t){a("8RTA")},null,null).exports,M={data:function(){return{goodsList:[{nick_name:"1号",goods_count:2082},{nick_name:"2号",goods_count:2081},{nick_name:"3号",goods_count:2080},{nick_name:"4号",goods_count:1082},{nick_name:"5号",goods_count:82},{nick_name:"6号",goods_count:72},{nick_name:"7号",goods_count:62},{nick_name:"8号",goods_count:52},{nick_name:"9号",goods_count:42},{nick_name:"10号",goods_count:32}]}},watch:{datatime:function(){this.device_top()}},mounted:function(){this.device_top()},methods:{device_top:function(){}},components:{},computed:n()({},Object(o.b)(["datatime","getdata"]))},R={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"props40"},[a("div",{staticClass:"dataMain"},[a("Card",{staticStyle:{width:"100%",height:"100%"}},[a("p",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{slot:"title"},slot:"title"},[t._v("TOP10的设备")]),t._v(" "),a("ul",{staticClass:"props_ul"},t._l(t.goodsList,function(e,s){return a("li",{key:s,staticStyle:{"margin-top":"2%"}},[a("span",[t._v(t._s(e.nick_name))]),t._v(" "),a("span",[t._v("\n            "+t._s(e.goods_count)+"件\n          ")])])}))]),t._v(" "),a("Spin",{directives:[{name:"show",rawName:"v-show",value:t.getdata,expression:"getdata"}],staticStyle:{"background-color":"rgba(3, 20, 31, 0.93)"},attrs:{size:"large",fix:""}})],1)])},staticRenderFns:[]};var D=a("C7Lr")(M,R,!1,function(t){a("oIjq")},null,null).exports,L={data:function(){return{deviceOnline:{count:10,time:1639,km:16894}}},watch:{soleDevice_code:function(){this.get_dev_data()}},mounted:function(){this.get_dev_data()},methods:{get_dev_data:function(){}},components:{},computed:n()({},Object(o.b)(["soleDevice_code","getdata"]))},$={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"props15"},[a("div",{staticClass:"dataMain"},[a("Card",{staticStyle:{width:"100%",height:"100%"}},[a("p",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{slot:"title"},slot:"title"},[t._v("设备在线数据")]),t._v(" "),a("div",{staticClass:"deviceOnline_mian"},[a("div",{staticClass:"device_count"},[a("p",[t._v("在线")]),t._v(" "),a("p",[a("span",[t._v(t._s(t.deviceOnline.count))]),t._v("台")])]),t._v(" "),a("div",{staticClass:"device_time"},[a("p",[t._v("总运行时长")]),t._v(" "),a("p",[a("span",{},[t._v(t._s(t.deviceOnline.time))]),t._v("h")])]),t._v(" "),a("div",{staticClass:"device_km"},[a("p",[t._v("总里程数")]),t._v(" "),a("p",[a("span",[t._v(t._s(t.deviceOnline.km))]),t._v("km")])])])]),t._v(" "),a("Spin",{directives:[{name:"show",rawName:"v-show",value:t.getdata,expression:"getdata"}],staticStyle:{"background-color":"rgba(3, 20, 31, 0.93)"},attrs:{size:"large",fix:""}})],1)])},staticRenderFns:[]};var T=a("C7Lr")(L,$,!1,function(t){a("dyPm")},null,null).exports,F={data:function(){return{payMode_main:0,payMode_data:{pay_wx:50,pay_zfb:50}}},watch:{datatime:function(){this.get_payData()},soleDevice_code:function(){this.get_payData()}},mounted:function(){this.payMode_main=this.$refs.dataMain.offsetHeight-44+"px";var t=this;window.onresize=function(){t.payMode_main=t.$refs.dataMain.offsetHeight-44+"px"},this.get_payData()},methods:{get_payData:function(){}},components:{},computed:n()({},Object(o.b)(["datatime","soleDevice_code","getdata"]))},O={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"props15"},[a("div",{ref:"dataMain",staticClass:"dataMain"},[a("Card",{staticStyle:{width:"100%",height:"100%"}},[a("p",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{slot:"title"},slot:"title"},[t._v("支付方式比")]),t._v(" "),a("div",{staticClass:"payMode_main",style:{height:t.payMode_main}},[a("div",{staticClass:"payMode_data"},[a("div",{staticClass:"pay_wx",style:{width:t.payMode_data.pay_wx+"%"}},[t._v(t._s(t.payMode_data.pay_wx)+"%")]),t._v(" "),a("div",{staticClass:"pay_zfb",style:{width:t.payMode_data.pay_zfb+"%"}},[t._v(t._s(t.payMode_data.pay_zfb)+"%")])]),t._v(" "),a("div",{staticClass:"pay_hint"},[a("div",{staticClass:"hint_wx"},[a("p",{staticClass:"pay_wx"}),t._v(" "),a("span",[t._v("微信")])]),t._v(" "),a("div",{staticClass:"hint_zfb"},[a("p",{staticClass:"pay_zfb"}),t._v(" "),a("span",[t._v("支付宝")])])])])]),t._v(" "),a("Spin",{directives:[{name:"show",rawName:"v-show",value:t.getdata,expression:"getdata"}],staticStyle:{"background-color":"rgba(3, 20, 31, 0.93)"},attrs:{size:"large",fix:""}})],1)])},staticRenderFns:[]};var z=a("C7Lr")(F,O,!1,function(t){a("u4yP")},null,null).exports,E={data:function(){return this.ageSettings={labelLine:{show:!0,length:5,length2:5},label:{position:"outside",color:"#fff",formatter:"{d}%"},roseType:"radius"},this.ageExtend={series:{radius:["40%","60%"],center:["50%","40%"]}},this.ageTheme={legend:{show:!1,textStyle:{color:"#fff"},top:"78%"},itemStyle:{}},this.sexSettings={labelLine:{show:!0,length:10,length2:10},label:{position:"inside",color:"#fff",formatter:"{b}:{d}%"},roseType:"radius"},this.sexExtend={series:{radius:"60%",center:["50%","40%"]}},this.sexTheme={legend:{show:!1,textStyle:{color:"#fff"},top:"85%"},itemStyle:{}},{payMode_data:{pay_wx:57,pay_zfb:43},sex_age_main_hei:null,sexData:{columns:["性别","数量"],rows:[{"性别":"男","数量":2393},{"性别":"女","数量":3530}]},ageData:{columns:["年齡","用户"],rows:[{"年齡":"10-20","用户":2393},{"年齡":"20-30","用户":3530},{"年齡":"30-40","用户":3530},{"年齡":"40-50","用户":3530},{"年齡":"50以上","用户":3530}]}}},mounted:function(){this.sex_age_main_hei=this.$refs.dataMain.offsetHeight-44+"px"},components:{},computed:n()({},Object(o.b)(["getdata"]))},j={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"props30"},[a("div",{ref:"dataMain",staticClass:"dataMain"},[a("div",{staticClass:"card_title"},[a("p",{staticStyle:{color:"#fff","font-size":"16px","font-weight":"700"},attrs:{slot:"title"},slot:"title"},[t._v("用户性别及年龄比")])]),t._v(" "),a("div",{staticClass:"sex_age_main",style:{height:t.sex_age_main_hei}},[a("div",{staticClass:"sex"},[null!=t.sex_age_main_hei?a("ve-pie",{attrs:{data:t.sexData,theme:t.sexTheme,extend:t.sexExtend,settings:t.sexSettings,width:"100%",height:"100%"}}):t._e()],1),t._v(" "),a("div",{staticClass:"age"},[null!=t.sex_age_main_hei?a("ve-ring",{attrs:{data:t.ageData,theme:t.ageTheme,extend:t.ageExtend,settings:t.ageSettings,width:"100%",height:"100%"}}):t._e()],1)]),t._v(" "),a("Spin",{directives:[{name:"show",rawName:"v-show",value:t.getdata,expression:"getdata"}],staticStyle:{"background-color":"rgba(3, 20, 31, 0.93)"},attrs:{size:"large",fix:""}})],1)])},staticRenderFns:[]};var V=a("C7Lr")(E,j,!1,function(t){a("8Zff")},null,null).exports,q={data:function(){return{clentCVR_hei:null,clickdata:0,salesdata:0}},mounted:function(){this.clentCVR_hei=this.$refs.dataMain.offsetHeight-44+"px"},methods:{},components:{},computed:n()({},Object(o.b)(["CVRlist","datatime","getdata"]),{CVRdata:function(){return 26}})},A={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"props15"},[a("div",{ref:"dataMain",staticClass:"dataMain"},[a("Card",{staticStyle:{width:"100%",height:"100%"}},[a("p",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{slot:"title"},slot:"title"},[t._v("顾客转化比")]),t._v(" "),a("div",{staticClass:"clentCVR",style:{height:t.clentCVR_hei}},[t._v("\n        "+t._s(t.CVRdata)+"%\n      ")])]),t._v(" "),a("Spin",{directives:[{name:"show",rawName:"v-show",value:t.getdata,expression:"getdata"}],staticStyle:{"background-color":"rgba(3, 20, 31, 0.93)"},attrs:{size:"large",fix:""}})],1)])},staticRenderFns:[]};var P=a("C7Lr")(q,A,!1,function(t){a("5byl")},null,null).exports,H={data:function(){return this.chartSettings2={radius:100,label:{position:"inside",color:"#fff"},roseType:"radius"},this.chartExtend={series:{radius:"50%",center:["50%","60%"]}},this.chartTheme={legend:{show:!1,textStyle:{color:"#fff"},top:"10%"},itemStyle:{shadowColor:"rgba(0, 0, 0, 0.5)",shadowBlur:10},radius:["10%","50%"],center:["10%","20%"]},{chartData2:{columns:["支付工具","访问用户"],rows:[{"支付工具":"微信","访问用户":2393,"访问用户1":7393},{"支付工具":"支付宝","访问用户":3530,"访问用户1":2393}]},payMode_main:0}},mounted:function(){this.payMode_main=this.$refs.dataMain.offsetHeight-44+"px";var t=this;window.onresize=function(){t.payMode_main=t.$refs.dataMain.offsetHeight-44+"px"}},components:{}},N={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"props30"},[a("div",{ref:"dataMain",staticClass:"dataMain"},[a("Card",{staticStyle:{width:"100%",height:"100%"}},[a("p",{staticStyle:{color:"#fff","font-size":"16px"},attrs:{slot:"title"},slot:"title"},[t._v("支付方式图比")]),t._v(" "),a("div",{staticClass:"payMode_main",style:{height:t.payMode_main}},[0!=t.payMode_main?a("ve-pie",{attrs:{data:t.chartData2,theme:t.chartTheme,extend:t.chartExtend,settings:t.chartSettings2,width:"100%",height:"100%"}}):t._e()],1)])],1)])},staticRenderFns:[]};var B=a("C7Lr")(H,N,!1,function(t){a("+kQY")},null,null).exports,I={data:function(){return{items:[]}},methods:{},mounted:function(){console.log(this.leftprops)},components:{goodsTop5:w,areaTop5:k,deviceTop10:D,deviceOnline:T,payMode:z,sexAgeData:V,clentCVR:P,payMode_chart:B},computed:n()({},Object(o.b)(["leftprops"]))},Z={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"robotLeft",staticClass:"robotLeft"},this._l(this.leftprops,function(t,a){return e(t.value,{key:a,tag:"component"})}))},staticRenderFns:[]};var X=a("C7Lr")(I,Z,!1,function(t){a("ql3D")},null,null).exports,Y={data:function(){return{items:[]}},methods:{},components:{goodsTop5:w,areaTop5:k,deviceTop10:D,deviceOnline:T,payMode:z,sexAgeData:V,clentCVR:P,payMode_chart:B},computed:n()({},Object(o.b)(["rightprops"]))},J={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"robotRight",staticClass:"robotRight"},this._l(this.rightprops,function(t,a){return e(t.value,{key:a,tag:"component"})}))},staticRenderFns:[]};var K=a("C7Lr")(Y,J,!1,function(t){a("Hcbd")},null,null).exports,U=a("3cXf"),W=a.n(U),G=a("405r"),Q={data:function(){return{options2:{disabledDate:function(t){return t&&t.valueOf()<15247008e5},shortcuts:[{text:"最近一周",value:function(){var t=new Date,e=new Date;return e.setTime(e.getTime()-6048e5),[e,t]}},{text:"最近一个月",value:function(){var t=new Date,e=new Date;return e.setTime(e.getTime()-2592e6),[e,t]}},{text:"最近三个月",value:function(){var t=new Date,e=new Date;return e.setTime(e.getTime()-7776e6),[e,t]}}]},device_list:[],sortOptions:{group:"sample",animation:150},plugList:[{value:"payMode_chart",label:"支付方式图比"}],addleft:[{value:"deviceTop10",label:"前10的设备"},{value:"deviceOnline",label:"设备在线数据"},{value:"sexAgeData",label:"用户性别年龄数据"}],addright:[{value:"payMode",label:"支付方式比"},{value:"clentCVR",label:"顾客转化比"},{value:"goodsTop5",label:"前5的商品"},{value:"areaTop5",label:"前5的区域"}],clickRobot:!1,dev_index:null}},mounted:function(){this.$store.state.leftprops=this.addleft,this.$store.state.rightprops=this.addright,this.$store.state.datatime[0]="2018-05-01",this.endtime(),this.get_device_list(),this.getplug()},methods:{getplug:function(){console.time("XXX")},resetPlug:function(){this.getplug()},savePlug:function(){console.log(this.leftprops);W()(this.leftprops),W()(this.rightprops);var t=W()(this.plugList);console.log(t)},back_plug:function(){this.dev_index=null,this.$router.push("updata"),this.clickRobot=!1,this.$store.state.soleDevice_code="",this.getplug()},soleRobot:function(t,e){this.$store.state.addCompShow=!1,this.dev_index=e,this.$router.push("updata"),this.$store.state.soleDevice_code=t,this.clickRobot=!0,this.$store.state.leftprops=[{value:"goodsTop5",label:"前5的商品"},{value:"sexAgeData",label:"用户性别年龄数据"}],this.$store.state.rightprops=[{value:"deviceOnline",label:"设备在线数据"},{value:"payMode",label:"支付方式比"},{value:"clentCVR",label:"顾客转化比"}]},changePage:function(t){this.get_device_list()},get_device_list:function(){this.device_list=[]},endtime:function(){var t=new Date,e=t.getMonth()+1,a=t.getDate();e>=1&&e<=9&&(e="0"+e),a>=0&&a<=9&&(a="0"+a);var s=t.getFullYear()+"-"+e+"-"+a;this.$store.state.datatime[1]=s},changeDate:function(t){this.$store.state.datatime=t,console.log(this.datatime)},allf:function(){console.log(this.plugList)},leftf:function(){this.$store.state.leftprops=this.addleft},rightf:function(){this.$store.state.rightprops=this.addright},save_plug:function(){console.log(this.area_plug_list[0].plug)}},components:{draggable:a.n(G).a},computed:n()({},Object(o.b)(["addCompShow","allList","leftprops","rightprops","datatime","soleDevice_code"]))},tt={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"addComp",class:{addComp_show:t.addCompShow}},[a("div",{staticClass:"sel_plug"},[a("div",{directives:[{name:"show",rawName:"v-show",value:!t.clickRobot,expression:"!clickRobot"}],staticClass:"plug_box"},[a("div",{staticClass:"leftprops"},[a("draggable",{attrs:{element:"ul",options:t.sortOptions},on:{end:t.leftf,add:t.leftf},model:{value:t.addleft,callback:function(e){t.addleft=e},expression:"addleft"}},t._l(t.addleft,function(e,s){return a("li",{key:s},[a("div",[t._v(t._s(e.label))])])}))],1),t._v(" "),a("div",{staticClass:"allprops"},[a("draggable",{attrs:{element:"ul",options:t.sortOptions},on:{end:t.allf,add:t.allf},model:{value:t.plugList,callback:function(e){t.plugList=e},expression:"plugList"}},t._l(t.plugList,function(e,s){return a("li",{key:s},[a("div",[t._v(t._s(e.label))])])}))],1),t._v(" "),a("div",{staticClass:"rightprops"},[a("draggable",{attrs:{element:"ul",options:t.sortOptions},on:{end:t.rightf,add:t.rightf},model:{value:t.addright,callback:function(e){t.addright=e},expression:"addright"}},t._l(t.addright,function(e,s){return a("li",{key:s},[a("div",[t._v(t._s(e.label))])])}))],1),t._v(" "),a("div",{staticClass:"save_plug"},[a("i-button",{attrs:{type:"primary",shape:"circle"},on:{click:t.resetPlug}},[t._v("重置")]),t._v(" "),a("i-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary",shape:"circle"},on:{click:t.savePlug}},[t._v("保存")])],1)]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.clickRobot,expression:"clickRobot"}],staticClass:"back_plug"},[a("i-button",{attrs:{type:"primary",shape:"circle"},on:{click:t.back_plug}},[t._v("返回")])],1)]),t._v(" "),a("div",{staticClass:"sel_time"},[a("i-col",{staticStyle:{width:"200px"},attrs:{span:"12"}},[a("Date-picker",{staticStyle:{width:"200px"},attrs:{type:"daterange",options:t.options2,placement:"bottom-end",placeholder:"选择日期"},on:{"on-change":t.changeDate}})],1)],1),t._v(" "),a("div",{staticClass:"sel_device"},[a("div",{staticClass:"sel_device_title"},[t._v("机器列表")]),t._v(" "),a("div",{staticClass:"device_list"},[a("ul",t._l(t.device_list,function(e,s){return a("li",{key:s,style:{border:t.dev_index==s?"1px solid #afcf93":"none"},on:{click:function(a){t.soleRobot(e.device_code,s)}}},[a("span",[t._v(t._s(e.nick_name))]),t._v(" "),a("span",[t._v(t._s(e.goods_count)+"件")])])}))])])])},staticRenderFns:[]};var et=a("C7Lr")(Q,tt,!1,function(t){a("Zq0B")},null,null).exports,at={data:function(){return{gofull:!1,fulltext:"全屏"}},mounted:function(){var t=document.documentElement,e=t.requestFullScreen||t.webkitRequestFullScreen||t.mozRequestFullScreen||t.msRequestFullScreen;if(void 0!==e&&e)e.call(t);else if(void 0!==window.ActiveXObject){var a=new ActiveXObject("WScript.Shell");null!=a&&a.SendKeys("{F11}")}},methods:{appclick:function(t){if(this.gofull=!this.gofull,this.gofull){this.fulltext="退出";var e=document.documentElement,a=e.requestFullScreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullscreen;void 0!==a&&a&&a.call(e)}else this.fulltext="全屏",document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitCancelFullScreen?document.webkitCancelFullScreen():document.msExitFullscreen&&document.msExitFullscreen(),"undefined"!=typeof cfs&&cfs&&cfs.call(e)}},components:{robotMap:p,robotChart1:v,robot2main:b,robot2head:r,robotLeft:X,robotRight:K,addComp:et},computed:n()({},Object(o.b)(["addCompShow"]))},st={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("div",{staticClass:"main"},[a("addComp"),t._v(" "),a("robotMap",{}),t._v(" "),a("div",{staticClass:"robot1"},[a("robotLeft",{})],1),t._v(" "),a("div",{staticClass:"robot2"},[a("robot2head",{}),t._v(" "),a("router-view")],1),t._v(" "),a("div",{staticClass:"robot1"},[a("robotRight",{})],1)],1),t._v(" "),a("div",{staticClass:"full",on:{click:function(e){t.appclick()}}},[t._v("\n    "+t._s(t.fulltext)+"\n  ")])])},staticRenderFns:[]};var it=a("C7Lr")(at,st,!1,function(t){a("IxMC")},null,null).exports,nt=a("zO6J"),ot={data:function(){return{}},mounted:function(){},methods:{appclick:function(t){}},components:{robotMap:p,robotChart1:v,robot2main:b,robot2head:r,robotLeft:X,robotRight:K,addComp:et},computed:n()({},Object(o.b)(["addCompShow"]))},lt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"main"},[e("addComp"),this._v(" "),e("robotMap",{}),this._v(" "),e("div",{staticClass:"robot1"},[e("robotLeft",{})],1),this._v(" "),e("div",{staticClass:"robot2"},[e("robot2head",{}),this._v(" "),e("robot2main",{})],1),this._v(" "),e("div",{staticClass:"robot1"},[e("robotRight",{})],1)],1)},staticRenderFns:[]};a("C7Lr")(ot,lt,!1,function(t){a("G9SV")},null,null).exports;var ct={data:function(){return{}},mounted:function(){var t=this;this.$store.state.getdata=!0,setTimeout(function(){t.$store.state.getdata=!1,t.$router.push("/")},1e3)},methods:{},components:{},computed:n()({},Object(o.b)(["getdata"]))},rt={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"routerUpdata"},[e("Spin",{attrs:{size:"large"}})],1)},staticRenderFns:[]};var dt=a("C7Lr")(ct,rt,!1,function(t){a("HKVR")},null,null).exports;s.default.use(nt.a);var ut=new nt.a({routes:[{path:"/",name:"robot2main",component:b},{path:"/updata",component:dt},{path:"/robot2main",component:b},{path:"/robotRight",component:K}]}),pt=a("+BxT"),ht=a.n(pt);s.default.use(o.a);var vt=new o.a.Store({state:{addCompShow:!1,allList:[{value:"deviceTop10",label:"前10的设备"},{value:"deviceOnline",label:"设备在线数据"},{value:"sexAgeData",label:"用户性别年龄数据"},{value:"payMode",label:"支付方式比"},{value:"clentCVR",label:"顾客转化比"},{value:"goodsTop5",label:"前5的商品"},{value:"areaTop5",label:"前5的区域"}],leftprops:null,rightprops:null,CVRlist:null,datatime:[],soleDevice_code:"",getdata:!1},getters:{mcode:function(t){return t.mcode},leftprops:function(t){return t.leftprops}},mutations:{chang_data:function(t,e){t.mcode=e},rubber_chang_data1:function(t,e){t.rubber_data1=void 0!=e?e:!t.rubber_data1}}}),_t=(a("qFup"),a("zRM5")),ft=a.n(_t);s.default.prototype.$http=f.a,s.default.use(ft.a),s.default.use(ht.a),s.default.config.productionTip=!1,new s.default({el:"#app",router:ut,store:vt,components:{App:it},template:"<App/>"})},UW3H:function(t,e){},Zq0B:function(t,e){},dyPm:function(t,e){},gOTl:function(t,e){},oIjq:function(t,e){},qFup:function(t,e){},ql3D:function(t,e){},u4yP:function(t,e){},weeC:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d21aa0f2ff9aee448466.js.map