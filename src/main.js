import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import FeatherIcon from '@/components/Statics/FeatherIcon';
import Logo from '@/components/Statics/Logo';

// Component registration
Vue.component('FeatherIcon', FeatherIcon);
Vue.component('Logo', Logo);

// Plugins
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
