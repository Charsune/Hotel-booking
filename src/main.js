import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios';
import VueAxios from 'vue-axios';

import Datepicker from 'vuejs-datepicker';
Vue.use(Datepicker);

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);
// import 'assets/reset.css'
Vue.use(VueAxios, axios);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
