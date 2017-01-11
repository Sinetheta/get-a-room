<template>
  <div id="app">
    <topnav></topnav>
    <router-view></router-view>
  </div>
</template>

<script>
import Topnav from './components/topnav';

export default {
  name: 'app',
  components: {
    Topnav
  }
};
</script>
