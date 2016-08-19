import Vue from '../vue.alpha.js'
// 引入打点 ！如果去掉这个将不会带上打点功能
// import logger from '@mogu/logger/dist/logger.xcore'
import App from './app'

// window.__logger = logger
// register

new Vue({
  el: '#app',
  template: '<app></app>',
  components: {
    App
  }
})
