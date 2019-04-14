import Vue from 'vue'
import Router from 'vue-router'
import Home from '../src/views/Home.vue'
import InfoTest from '../src/views/InfoTest.vue'

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
      path: '/infoTest',
      name: 'infoTest',
      component: InfoTest
    }
  ]
})
