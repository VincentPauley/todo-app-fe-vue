import Vue from 'vue';
import App from './App.vue';
import store from './store';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import router from './router';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
