<template>
  <div id="app">
    <calendar-authorize></calendar-authorize>
  </div>
</template>

<script>
import CalendarAuthorize from './components/calendar/authorize';

export default {
  name: 'app',
  components: {
    CalendarAuthorize
  }
};
</script>

<style>

</style>
