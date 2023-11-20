import router from './router'
import store from './store' 
import { getToken, getUserInfo } from '@/utils/cookies' // get token from cookie 
 
const whiteList = ['/login'] // no redirect whitelist

router.beforeEach(async (to, from, next) => { 
  // set page title
  document.title = '售后系统'
  // determine whether the user has logged in
  const hasToken = getToken()
  const userInfo = getUserInfo()
  if (hasToken && userInfo) { 
    if (to.path === '/login') {
      next({ path: '/' }) 
    } else {
      next()
    }
  } else {
    /* has no token*/
    //缓存消息通知跳转 token，预防身份过期
    if (to.query.token) {
      store.dispatch('workflow/saveToken', to)
    }
    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`) 
    }
  }
})
 
