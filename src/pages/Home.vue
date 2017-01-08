<template>
  <div id="home">
    <calendar-authorize></calendar-authorize>
  </div>
</template>

<script>
import CalendarAuthorize from '../components/calendar/authorize';

export default {
  name: 'Home',
  components: {
    CalendarAuthorize
  }
};
</script>
