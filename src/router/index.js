import Vue from 'vue'
import Router from 'vue-router' 
Vue.use(Router)

const constantRoutes = [
    {
        path: '/login',
        component: () => import('@/views/login/index'), 
    },
    {
      path: '/',
      component: () => import('@/views/main/index'), 
  },
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})
const router = createRouter()
 

export default router