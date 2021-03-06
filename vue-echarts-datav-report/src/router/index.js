import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import BMap from '../views/BMap'
import BMap2 from '../views/BMap2'
import Liquidfill from '../views/Liquidfill'
import wordcloud from '../views/WordCloud'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bmap',
    name: 'BMap',
    component: BMap
  },
  {
    path: '/bmap2',
    name: 'BMap2',
    component: BMap2
  },
  {
    path: '/liquidfill',
    name: 'Liquidfill',
    component: Liquidfill
  },
  {
    path: '/WordCloud',
    name: 'WordCloud',
    component: wordcloud
  }
]

const router = new VueRouter({
  routes
})

export default router
