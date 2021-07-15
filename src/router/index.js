import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/views/Home'
import UserInfo from '@/views/sys/UserInfo'

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
        }
      ]
    }
  ]
})
