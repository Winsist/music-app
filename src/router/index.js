import Vue from 'vue'
import Router from 'vue-router'
import Home from 'components/home/home'
import Recommend from 'components/recommend/recommend'
import Singer from 'components/singer/singer'
import Rank from 'components/rank/rank'
import Search from 'components/search/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      redirect:'/recommend',
      children:[{
        path: '/recommend',
        name: 'Recommend',
        component: Recommend,
      },{
        path: '/singer',
        name: 'Singer',
        component: Singer
      },{
        path: '/rank',
        name: 'Rank',
        component: Rank
      },{
        path: '/search',
        name: 'Search',
        component: Search
      }]
    }
  ]
})
