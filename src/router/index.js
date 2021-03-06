import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Welcome from '../components/Welcome.vue'
import Users from '../components/user/Users.vue'
import Rights from '../components/power/Rights.vue'
import Roles from '../components/power/Roles.vue'
import Report from '../components/report/Report.vue'
import Orders from '../components/orders/Orders.vue'
import Goods from '../components/goods/Goods.vue'
import Params from '../components/params/Params.vue'
import Categories from '../components/category/Categories.vue'
import Test from '../components/test/Test.vue'
Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/login'
},
{
  path: '/login',
  component: Login
},
{
  path: '/home',
  component: Home,
  redirect: '/welcome',
  children: [{
    path: '/welcome',
    component: Welcome
  },
  {
    path: '/users',
    component: Users
  }, {
    path: '/rights',
    component: Rights
  }, {
    path: '/roles',
    component: Roles
  }, {
    path: '/reports',
    component: Report
  }, {
    path: '/orders',
    component: Orders
  }, {
    path: '/goods',
    component: Goods
  }, {
    path: '/categories',
    component: Categories
  }, {
    path: '/params',
    component: Params
  }, {
    path: '/test',
    component: Test
  }
  ]
}
]

const router = new VueRouter({
  routes
})

// 挂载路由导航守卫
// to 将要访问页面
// from 代表从哪个路径跳转而来
// next 是一个函数，表示放行
// next() 放行 next('/login')强制跳转
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})

export default router
