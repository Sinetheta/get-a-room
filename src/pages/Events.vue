<template>
  <div id="events">
    <day :calendar-id="calendarId" :events="events"></day>
    <div class="controls">
      <template v-if="eventRightNow()">
        <h1>Room Busy</h1>
        <p>{{eventRightNow().summary}} in progress</p>
        <p>Next available {{nextAvailabile.fromNow()}}</p>
      </template>
      <template v-else>
        <h3>Room Available</h3>
      </template>
      <create-button :create-at="nextAvailabile" v-on:create="createEvent"></create-button>
    </div>
  </div>
</template>

<script>
/* global $ */
import moment from 'moment';
import { insertEvent, listTodaysEvents } from '../components/calendar/events';
import CreateButton from '../components/calendar/CreateButton';
import Day from '../components/calendar/Day';
import '../components/visibility';

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
  computed: {
    nextAvailabile: function () {
      return this.events.reduce(function (freeTime, gcalEvent) {
        if (freeTime.isBetween(gcalEvent.start.dateTime, gcalEvent.end.dateTime, null, '[]')) {
          return moment(gcalEvent.end.dateTime);
        } else {
          return freeTime;
        }
      }, moment());
    }
  },
  created: function () {
    $(document.body).on('change.visibility', this.onVisibility);
    this.loadEvents();
  },
  destroyed: function () {
    $(document.body).off('change.visibility', this.onVisibility);
  },
  methods: {
    createEvent: function ({from, to}) {
      insertEvent(this.calendarId, from, to).then(() => {
        this.loadEvents();
      });
    },
    loadEvents: function () {
      listTodaysEvents(this.calendarId).then((resp) => {
        this.events = resp.result.items;
      });
    },
    onVisibility: function (e, isVisible) {
      if (isVisible) this.loadEvents();
    },
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
