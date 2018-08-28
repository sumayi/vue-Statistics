<template>
  <div id="app">
    <!-- <div class="apphead">
      <apphead style=""></apphead>
    </div> -->
    <div class="main">
      <addComp></addComp>
      <robotMap style=""></robotMap>
      <div class="robot1">
        <robotLeft style=""></robotLeft>
      </div>
      <div class="robot2">
        <robot2head style=""></robot2head>
        <router-view></router-view>
        <!-- <robot2main style=""></robot2main> -->
      </div>
      <div class="robot1">
        <robotRight style=""></robotRight>
      </div>
    </div>
    <div class="full" @click="appclick()">
      {{fulltext}}
    </div>

  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from "vuex";
  import robot2head from './components/robot2head'
  import robotMap from './components/robotMap'
  import robotChart1 from './components/robotChart1'
  import robot2main from './components/robot2main'
  import robotLeft from './components/robotLeft'
  import robotRight from './components/robotRight'
  import addComp from './components/addComp'
  export default {
    data() {
      return {
        gofull: false,
        fulltext: '全屏'
      }
    },
    mounted() {
      var el = document.documentElement;

      var rfs = el.requestFullScreen || el.webkitRequestFullScreen ||

        el.mozRequestFullScreen || el.msRequestFullScreen;

      if (typeof rfs != "undefined" && rfs) {

        rfs.call(el);

      } else if (typeof window.ActiveXObject != "undefined") {

        //for IE，这里其实就是模拟了按下键盘的F11，使浏览器全屏

        var wscript = new ActiveXObject("WScript.Shell");

        if (wscript != null) {

          wscript.SendKeys("{F11}");

        }

      }
    },
    methods: {
      appclick(e) {
        this.gofull = !this.gofull
        if (this.gofull) {
          this.fulltext = '退出'
          var el = document.documentElement;
          var rfs = el.requestFullScreen || el.webkitRequestFullScreen || el.mozRequestFullScreen || el.msRequestFullscreen;
          if (typeof rfs != "undefined" && rfs) {
            rfs.call(el);
          };
          return;
        } else {
          this.fulltext = '全屏'
          if (document.exitFullscreen) {
            document.exitFullscreen();
          } else if (document.mozCancelFullScreen) {
            document.mozCancelFullScreen();
          } else if (document.webkitCancelFullScreen) {
            document.webkitCancelFullScreen();
          } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
          }
          if (typeof cfs != "undefined" && cfs) {
            cfs.call(el);
          }
        }


      }
    },
    components: {
      robotMap,
      robotChart1,
      robot2main,
      robot2head,
      robotLeft,
      robotRight,
      addComp
    },
    computed: {
      ...mapState([
        'addCompShow'
      ])
    },

  }

</script>

<style>
  html,
  body {
    width: 100%;
    height: 100%;
    overflow: hidden;
    user-select: none;
  }

  #app {
    width: 100%;
    height: 100%;
    background: #332d2d;
    position: absolute;
  }

  .robot1 {
    position: relative;
    height: 100%;
    width: 30%;
  }

  .robot2 {
    position: relative;
    height: 40%;
    width: 40%;
    align-self: start;

  }

  .apphead {
    width: 100%;
    height: 10%;
    background: #ccc;
    position: relative;
    top: 0;
  }

  .full {
    position: absolute;
    color: #fff;
    bottom: 10px;
    text-align: center;
    width: 80px;
    height: 20px;
    margin-left: -40px;
    line-height: 20px;
    border-radius: 10px;
    left: 50%;
    background: #62333399;
    cursor: pointer;
  }

  .main {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .props40 {
    height: 40%;
    padding: 1% 5% 1% 5%;
    position: relative;
  }

  .props30 {
    height: 30%;
    padding: 1% 5% 1% 5%;
    position: relative;
  }

  .props15 {
    height: 15%;
    padding: 1% 5% 1% 5%;
    position: relative;
  }

  .dataMain:hover {
    box-shadow: 2px 2px 4px rgba(211, 192, 192, 0.48);
  }

  .dataMain {
    width: 100%;
    height: 100%;
    position: relative;
    background: #7a6d6d78;
    border-radius: 10px;
    overflow-y: hidden;
    overflow-x: hidden;
  }

  .ivu-card {
    background: none !important;
  }

  .ivu-card:hover {
    box-shadow: none !important;
  }

  .ivu-card-bordered {
    border: none !important;
  }

  .ivu-card-head {
    height: 44px !important;
  }

  .ivu-card-body {
    padding: 0 16px !important;
  }

  .props_ul {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .props_ul li {
    display: flex;
    justify-content: space-between;
    margin-top: 5%;
    font-size: 14px;
    color: #fff;
  }

</style>
