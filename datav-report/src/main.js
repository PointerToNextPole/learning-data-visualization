import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import ECharts from 'echarts'

Vue.config.productionTip = false
Vue.prototype.$echarts = ECharts //每一个组件在引用ECharts时，便不需要import，使用$echarts即可

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
