import Vue from 'vue';
import App from './App.vue';
import store from './store';
import FeatherIcon from '@/components/Statics/FeatherIcon';
import Logo from '@/components/Statics/Logo';

Vue.component('FeatherIcon', FeatherIcon);
Vue.component('Logo', Logo);

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App)
}).$mount('#app');
