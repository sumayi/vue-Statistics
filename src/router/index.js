import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import updata from '@/components/updata'
import robotLeft from '@/components/robotLeft'
import robotRight from '@/components/robotRight'
import robot2main from '@/components/robot2main'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'robot2main',
      component: robot2main
    },{
        path: '/updata',
        component: updata
      },{
        path: '/robot2main',
        component: robot2main
      },{
        path: '/robotRight',
        component: robotRight
      }
  ]
})
