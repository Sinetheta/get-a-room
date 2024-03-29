// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import routes from './routes';
import App from './App';
import VueRouter from 'vue-router';

import './styles/main.scss';

Vue.use(VueRouter);

const router = new VueRouter({ routes });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App
  },
  router
});
