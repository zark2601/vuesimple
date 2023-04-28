import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CountComp from '../views/CountComp.vue'
import Reactivity from '../views/Reactivity.vue'
import ComputedComp from '../views/ComputedComp.vue'
import ClassStyle from '../views/ClassStyle.vue'
import Conditional from '../views/Conditional.vue'
import EventHandling from '../views/EventHandling.vue'
import FormInputBinding from '../views/FormInputBinding.vue'
import LifeCycleHooks from '../views/LifeCycleHooks.vue'
import Watcher from '../views/Watcher.vue'
import TemplateRefs from '../views/TemplateRefs.vue'
import ComponentsBasic from '../views/ComponentsBasic.vue'
import lchook from '../views/Hooks.vue'
import axios from '../views/Axios.vue'

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
  },
  {
    path : '/conditonal',
    name : 'conditonal',
    component: Conditional
  },
  {
    path : '/eventHandling',
    name : 'eventHandling',
    component: EventHandling
  },
  {
    path : '/formInputBinding',
    name : 'formInputBinding',
    component : FormInputBinding
  },
  {
    path : '/lifeCycleHook',
    name : 'lifeCycleHook',
    component : LifeCycleHooks
  },
  {
    path : '/watcher',
    name : 'watcher',
    component : Watcher
  },
  {
    path : '/templateRefs',
    name : 'templateRefs',
    component : TemplateRefs
  },
  {
    path : '/componentsBasic',
    name : 'componentsBasic',
    component : ComponentsBasic
  },
  {
    path : '/lchook',
    name : 'lchook',
    component : lchook,
  },
  {
    path: '/axios',
    name: 'axios',
    component: axios
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
