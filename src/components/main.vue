<template>

  <div class="main">
    <addComp></addComp>
    <robotMap style=""></robotMap>
    <div class="robot1">
      <robotLeft style=""></robotLeft>
    </div>
    <div class="robot2">
      <robot2head style=""></robot2head>
      <robot2main style=""></robot2main>
    </div>
    <div class="robot1">
      <robotRight style=""></robotRight>
    </div>
  </div>

</template>

<script type="text/ecmascript-6">
  import {
    mapState,
    mapMutations
  } from "vuex";
  import robot2head from './robot2head'
  import robotMap from './robotMap'
  import robotChart1 from './robotChart1'
  import robot2main from './robot2main'
  import robotLeft from './robotLeft'
  import robotRight from './robotRight'
  import addComp from './addComp'
  export default {
    data() {
      return {}
    },
    mounted() {

    },
    methods: {
      appclick(e) {
        //   console.log(e.target)
        //   let name=e.target.className
        //   if(name!='addComp addComp_show'&&name!='btn btn_doen'){
        //       this.$store.state.addCompShow = false
        //   }
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


</style>
