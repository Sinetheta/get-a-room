<template>
  <div id="day"></div>
</template>

<script>
/* global $ */
import moment from 'moment';
import 'fullcalendar';
import 'fullcalendar/dist/gcal';
import { listTodaysEvents } from './events';

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
  props: ['calendarId'],
  data: function () {
    return {
      events: []
    };
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
      events: (start, end, timezone, callback) => {
        listTodaysEvents(this.calendarId).then((resp) => {
          this.events = resp.result.items;
          callback(resp.result.items.map(fullCalEvent));
        });
      }
    });
  }
};
</script>

<style>
body,
#app,
#events,
#day {
  height: 100%;
}

#day {
  width: 50%;
}

.fc-header-toolbar,
.fc-head {
  display: none;
}
</style>
