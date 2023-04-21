import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountComp from '../views/CountComp.vue'
import Reactivity from '../views/Reactivity.vue'
import ComputedComp from '../views/ComputedComp.vue'
import ClassStyle from '../views/ClassStyle.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path : '/count',
    name : 'count',
    component: CountComp
  },
  {
    path : '/reactive',
    name : 'reactive',
    component: Reactivity
  },
  {
    path : '/computed',
    name : 'computed',
    component: ComputedComp
  },

  {
    path : '/classStyle',
    name : 'classStyle',
    component: ClassStyle
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
