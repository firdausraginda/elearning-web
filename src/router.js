import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/views/Home.vue'
import InfoTest from '../src/views/InfoTest.vue'
import Test from '../src/views/Test.vue'
import ResultTest from '../src/views/ResultTest.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/infoTest/:idPage',
      name: 'infoTest',
      component: InfoTest
    },
    {
      path: '/test/:testType/:idPage',
      name: 'test',
      component: Test
    },
    {
      path: '/resultTest/:testType/:idPage',
      name: 'resultTest',
      component: ResultTest
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 }
  }
})
