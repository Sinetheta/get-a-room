<template>
  <div class="topnav">
    <router-link to="/calendars"><span class="icon icon-settings muted"></span></router-link>
  </div>
</template>

<script>
export default {
  name: 'Topnav'
};
</script>

<style lang="scss" scoped>
.topnav {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0.5em;

  a:not(:hover) {
    opacity: 0.7;
  }
}
</style>
