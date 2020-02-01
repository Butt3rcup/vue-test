/*
 * @Author: your name
 * @Date: 2020-01-30 23:58:06
 * @LastEditTime: 2020-02-02 00:10:31
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \test-vue\src\main.js
 */
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import './assets/css/global.css'
import './assets/fonts/iconfont.css'
import Axios from 'axios'
Vue.prototype.$http = Axios
Axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
