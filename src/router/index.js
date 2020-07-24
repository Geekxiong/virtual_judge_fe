import Vue from 'vue'
import Router from 'vue-router'
import ProblemDetail from '@/pages/ProblemDetail'
import Index from '@/pages/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/problem/:ojName-:probId',
      name: 'ProblemDetail',
      component: ProblemDetail
    }
  ]
})
