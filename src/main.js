import Vue from 'vue'
import App from './App.vue'
import './plugins/element.js'
import router from './router.js'
// import ElementUI from 'element-ui'
// import locale from 'element-ui/lib/locale/lang/en'

Vue.config.productionTip = false
// Vue.use(ElementUI, { locale })

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')