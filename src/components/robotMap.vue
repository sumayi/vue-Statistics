<template>
  <div class="robotmap" @click="hidCompShow">
    <ve-bmap :settings="chartSettings" :after-set-option-once="afterSet" :series="chartSeries" :tooltip="chartTooltip" width="100%"
      height="100%">
    </ve-bmap>
  </div>

</template>

<script>
  import {
    mapState,
    mapMutations
  } from "vuex";
  export default {
    data() {
      this.chartSettings = {
        key: '1AF08cFSfhDb8x8DelAVFeBM',
        bmap: {
          center: [104.072329,30.67342], //当前视角的中心点，用经纬度表示
          zoom: 15, //当前视角的缩放比例
          roam: true, //是否开启鼠标缩放和平移漫游
          silent: false,
          mapStyle: {},
        }
      }
      this.chartTooltip = {
        show: false,
        // enableMapClick: false,
      }

      return {
        chartSeries: [{
          type: 'scatter',
          coordinateSystem: 'bmap',
          symbol: "circle", //标记的图形
          itemStyle: {
            normal: {
              color: "red"
            }
          },
          data: [
            [104.072329,30.66342],

          ]
        }],
        bmap: null,
      }
    },
    mounted() {
    },
    methods: {
      hidCompShow() {
        this.$store.state.addCompShow = false
      },
      afterSet: function (echarts) {
        this.bmap = echarts.getModel().getComponent('bmap').getBMap()
        this.bmap.addControl(new window.BMap.MapTypeControl())
        this.bmap.setMapStyle({
          style: 'midnight',
        });
      },
      endmap() {
      }
    },
    computed: {
      ...mapState([
        "addCompShow",
      ])
    },
  }

</script>
<style>
  .robotmap {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .anchorBL,
  .BMap_noprint {
    display: none !important;
  }

</style>
