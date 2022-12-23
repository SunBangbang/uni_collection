import App from './App'
// main.js 文件
import uView from "uview-ui";
Vue.use(uView);

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

//全局公用函数
import {api} from "common.js"
import Md5 from 'js-md5'
Vue.prototype.$api=api
Vue.prototype.href=api.to
Vue.prototype.rdt=api.rdt
Vue.prototype.back=api.back
Vue.prototype.totabar=api.totabar
Vue.prototype.link=api.link
Vue.prototype.$md5 = Md5
//挂在vuex
import store from "./store/index.js"
Vue.prototype.$store=store
// 引用request
import request from "./ajax/index.js"
Vue.prototype.$request = request
// api接口管理
import api1 from "./ajax/api.js"
Vue.prototype.api = api1

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app,
	store
  }
}
// #endif