import Vue from 'vue'
import ElementUI from 'element-ui';
import router from './routers'
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'

Vue.use(ElementUI);
// Vue.use(VueRouter)
// const router = new VueRouter({
//   mode: 'history',
//   routes: routers
// })

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),

}).$mount('#app')
