import Vue from 'vue'
import ElementUI from 'element-ui'
import VueResource from 'vue-resource'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import VueRouter from 'vue-router'
import CForm from './components/cform'
import Page02 from './components/page2'
import PNew from './components/pnew'
import cTable from './components/cTable'
Vue.use(ElementUI)
Vue.use(VueResource)
Vue.use(VueRouter) // 全局安装路由功能
// 定义路径
const routes = [{
  path: '/',
  component: CForm
},
{
  path: '/02',
  component: Page02
},
{
  path: '/03',
  component: PNew
}, {
  path: '/04',
  component: cTable
}
]
// 创建路由对象
const router = new VueRouter({
  routes
})
/* eslint-disable no-new */
new Vue({
  template: '<App/>',
  components: {
    App
  },
  router
}).$mount('#app')
