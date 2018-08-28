<template>
  <div class="robotchart1">
    <ve-histogram :data="chartData" :settings="chartSettings" width="100%" height="100%"></ve-histogram>
  </div>
</template>

<script>
  import echarts from 'echarts'
  export default {
    data() {
        this.chartSettings = {
        metrics: ['点击用户', '购买用户'],
        dimension: ['日期']
      }
      return {
        chartData: {
          columns: ['日期', '点击用户', '购买用户', '下单率'],
          rows: [
            { '日期': '1/1', '点击用户': 1393, '购买用户': 1093, '下单率': 0.32 },
            { '日期': '1/2', '点击用户': 3530, '购买用户': 3230, '下单率': 0.26 },
            { '日期': '1/3', '点击用户': 2923, '购买用户': 2623, '下单率': 0.76 },
            { '日期': '1/4', '点击用户': 1723, '购买用户': 1423, '下单率': 0.49 },
            { '日期': '1/5', '点击用户': 3792, '购买用户': 3492, '下单率': 0.323 },
            { '日期': '1/6', '点击用户': 4593, '购买用户': 4293, '下单率': 0.78 }
          ]
        }
      }
    },
    mounted() {

    },

    methods: {



    }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .robotchart1 {
    width: 100%;
    height: 50%;
    position: relative;
  }

</style>
