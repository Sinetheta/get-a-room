<template>
  <div id="events">
    <day :calendar-id="calendarId"></day>
    <div class="controls">
      <template v-if="eventRightNow()">
        <h3>Room Busy</h3>
        <p>{{eventRightNow().summary}} in progress</p>
      </template>
      <template v-else>
        <h3>Room Available</h3>
      </template>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { listTodaysEvents } from '../components/calendar/events';
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
  },
  created: function () {
    listTodaysEvents(this.calendarId).then((resp) => {
      this.events = resp.result.items;
    });
  },
  methods: {
    eventRightNow: function () {
      return this.events.find(function (gcalEvent) {
        return moment().isBetween(gcalEvent.start.dateTime, gcalEvent.end.dateTime);
      });
    }
  }
};
</script>

<style>
#day,
.controls {
  width: 50%;
  float: left;
}

.controls {
  text-align: center;
}
</style>
