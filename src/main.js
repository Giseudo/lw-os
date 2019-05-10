import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Directives from './directives'
import './stylesheets/defaults.scss'

Vue.config.productionTip = false
Vue.use(Directives)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
