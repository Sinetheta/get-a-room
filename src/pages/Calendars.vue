<template>
  <div id="calendars">
    <calendar-authorize></calendar-authorize>
  </div>
</template>

<script>
import CalendarAuthorize from '../components/calendar/authorize';

export default {
  name: 'Calendars',
  components: {
    CalendarAuthorize
  }
};
</script>
