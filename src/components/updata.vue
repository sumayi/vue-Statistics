<template>
  <div class="routerUpdata">
    <Spin size="large"></Spin>
    <!-- <div style="position:absolute">正在刷新...</div> -->
  </div>
</template>

<script>
  import {
    mapState,
    mapMutations
  } from "vuex";
  export default {

    data() {
      return {

      }
    },
    mounted() {
      this.$store.state.getdata = true
      setTimeout(() => {
        this.$store.state.getdata = false
        this.$router.push('/')
      }, 1000)
    },
    methods: {},
    components: {

    },
    computed: {
      ...mapState([
        'getdata'
      ]),
    }
  }

</script>

<style>
  .routerUpdata {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }

  .ivu-spin-large .ivu-spin-dot {
    width: 132px;
    height: 132px;
  }

</style>
