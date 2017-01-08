// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

const app = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  data: function () {
    return {
      currentRoute: window.location.pathname
    };
  }
});

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname;
});
