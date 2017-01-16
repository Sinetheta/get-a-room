<template>
  <div id="events">
    <day :calendar-id="calendarId"></day>
    <div class="controls">
      <template v-if="eventRightNow()">
        <h3>Room Busy</h3>
        <p>{{eventRightNow().summary}} in progress</p>
        <p>Next available {{nextAvailability().fromNow()}}</p>
      </template>
      <template v-else>
        <h3>Room Available</h3>
      </template>
      <create-button :calendar-id="calendarId" v-on:insert="loadEvents"></create-button>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { listTodaysEvents } from '../components/calendar/events';
import CreateButton from '../components/calendar/CreateButton';
import Day from '../components/calendar/Day';

export default {
  name: 'Events',
  components: {
    CreateButton,
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
    },
    nextAvailability: function () {
      return this.events.reduce(function (freeTime, gcalEvent) {
        if (freeTime.isBetween(gcalEvent.start.dateTime, gcalEvent.end.dateTime, null, '[]')) {
          return moment(gcalEvent.end.dateTime);
        } else {
          return freeTime;
        }
      }, moment());
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
