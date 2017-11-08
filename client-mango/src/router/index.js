import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/PohonMangga'
// import Bla from '@/components/bla'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    }
  ]
})
