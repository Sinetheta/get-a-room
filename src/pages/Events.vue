<template>
  <div id="events">
    <day :calendar-id="calendarId"></day>
  </div>
</template>

<script>
import Day from '../components/calendar/Day';

export default {
  name: 'Events',
  components: {
    Day
  },
  data: function () {
    return {
      calendarId: this.$route.params.id,
      events: []
    };
  }
};
</script>

<style>
#day {
  width: 50%;
}
</style>
