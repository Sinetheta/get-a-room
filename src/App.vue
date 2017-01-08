<template>
  <div id="app">
    <topnav></topnav>
    <router></router>
  </div>
</template>

<script>
import Topnav from './components/topnav';
import Router from './components/router';

export default {
  name: 'app',
  components: {
    Topnav,
    Router
  }
};
</script>
