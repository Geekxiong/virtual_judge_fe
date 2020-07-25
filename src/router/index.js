import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index'
import ProblemList from '@/pages/ProblemList'
import ProblemDetail from '@/pages/ProblemDetail'
import Status from '@/pages/Status'
import UserList from '@/pages/UserList'
import UserDetail from '@/pages/UserDetail'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/problems',
      name: 'ProblemList',
      component: ProblemList
    },
    {
      path: '/problem/:ojName-:probId',
      name: 'ProblemDetail',
      component: ProblemDetail
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
    {
      path: '/users',
      name: 'UserList',
      component: UserList
    },
    {
      path: '/user/:userId',
      name: 'UserDetail',
      component: UserDetail
    },

  ]
})
