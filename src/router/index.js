import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Home from '@/views/Home'
import UserInfo from '@/views/sys/UserInfo'
import User from '@/views/sys/User'

const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      children : [
        {
          path: '/info',
          name: '用户信息',
          component: UserInfo
        },
        {
          path: '/user',
          name: '用户管理',
          component: User
        }
      ]
    }
  ]
})
