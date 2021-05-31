import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: '/getPopular',
    name: 'GetPopular',

    component: () => import(/* webpackChunkName: "getPopular" */ '../views/GetPopular.vue')
  },
  {
    path: '*',
    redirect: '/getPopular'

  },
  {
    path: '/getTopRated',
    name: 'GetTopRated',

    component: () => import(/* webpackChunkName: "getTopRated" */ '../views/GetTopRated.vue')
  },
  {
    path: '*',
    redirect: '/getTopRated'

  },
  {
    path: '/movies/:id',
    name: 'Movie',

    component: () => import(/* webpackChunkName: "movie" */ '../views/Movie.vue')
  },
  {
    path: '*',
    redirect: '/movie'

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
