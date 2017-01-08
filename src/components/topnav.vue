<template>
  <div class="topnav">
    <button id="menu-toggle"
        class="mdl-button mdl-js-button mdl-button--icon">
      <i class="material-icons">more_vert</i>
    </button>

    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        for="menu-toggle">
      <li class="mdl-menu__item"><v-link href="/calendars">Calendars</v-link></li>
    </ul>
  </div>
</template>

<script>
import VLink from './VLink.vue';

export default {
  name: 'Topnav',
  components: {
    VLink
  }
};
</script>

<style scoped>
#menu-toggle {
  float: right;
}
</style>
