<template>
  <div id="day"></div>
</template>

<script>
/* global $ */
import moment from 'moment';
import 'fullcalendar';
import 'fullcalendar/dist/gcal';

// The header hidden by CSS is not allowing for full "parent" height
var fullCalHeight = function () {
  const MISSING_HEADER_HEIGHT = 34;
  return $('#day').height() + MISSING_HEADER_HEIGHT;
};
var fullCalEvent = function (gcalEvent) {
  return {
    title: gcalEvent.summary,
    start: gcalEvent.start.dateTime,
    end: gcalEvent.end.dateTime
  };
};

export default {
  name: 'Day',
  props: ['calendarId', 'events'],
  methods: {
    fullCalEvents: function (start, end, timezone, callback) {
      callback(this.events.map(fullCalEvent));
    }
  },
  mounted: function () {
    $('#day').fullCalendar({
      height: fullCalHeight,
      defaultView: 'agendaDay',
      allDaySlot: false,
      scrollTime: moment().startOf('hour').format('HH:mm:ss'),
      header: {
        left: '',
        center: '',
        right: ''
      },
      events: this.fullCalEvents
    });
  },
  watch: {
    events: function () {
      $('#day').fullCalendar('refetchEvents');
    }
  }
};
</script>

<style lang="scss">
html,
body,
#app,
#events,
#day {
  height: 100%;
}
</style>
