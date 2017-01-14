<template>
  <div id="events">
    <h1>Events</h1>
    <ul>
      <li v-for="event in events">
        {{event}}
      </li>
    </ul>
  </div>
</template>

<script>
import { listTodaysEvents } from '../components/calendar/events';

export default {
  name: 'Events',
  data: function () {
    return {
      calendarId: this.$route.params.id,
      events: []
    };
  },
  created: function () {
    listTodaysEvents(this.$route.params.id).then((resp) => {
      this.events = resp.result.items;
    });
  }
};
</script>
