<template>
  <div class="topnav">
    <button id="menu-toggle"
        class="mdl-button mdl-js-button mdl-button--icon">
      <i class="material-icons">more_vert</i>
    </button>

    <ul class="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
        for="menu-toggle">
      <li class="mdl-menu__item"><router-link to="calendars">Calendars</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Topnav'
};
</script>

<style scoped>
#menu-toggle {
  float: right;
}
</style>
