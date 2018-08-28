<template>
  <div class="robot2_head">
    <div class="head_mian">
      <div class="head_title">&nbsp数据可视化平台</div>
      <div class="btn" @mousedown="btn_down()" @mouseup="btn_up()" :class="{btn_doen:button_down}">操作</div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    mapState,
    mapMutations
  } from "vuex";
  export default {
    data() {
      return {
        button_down: false
      }
    },
    methods: {
      btn_down() {
        this.$store.state.addCompShow = !this.addCompShow
        this.button_down=!this.button_down
      },
      btn_up() {
          this.button_down=!this.button_down
      }
    },
    components: {

    },
    computed: {
      ...mapState([
        "addCompShow",
      ])
    },
  }

</script>

<style>
  .robot2_head {
    height: 12%;
    padding: 6px 6px 0px 6px;
    color: #fff;

  }

  .head_mian {
    background: #237ba1e6;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
  }

  .head_title {
    margin-left: 10px;
    font-size: 16px;
  }

  .btn {
    background: #cec014;
    border-radius: 10px;
    padding: 0.1em 1em;
    position: absolute;
    right: 15px;
    cursor: pointer;
    box-shadow: 1px 2px 1px #888888;
  }

  .btn_doen {
    transform: translate(2px,2px);
    box-shadow: none !important;
  }

</style>
