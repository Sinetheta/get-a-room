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
      console.log('watch');
      $('#day').fullCalendar('refetchEvents');
    }
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

.fc-header-toolbar,
.fc-head {
  display: none;
}

.fc-time-grid .fc-slats .fc-minor td {
  border-top-style: none;
}

.fc-unthemed .fc-content,
.fc-unthemed .fc-divider,
.fc-unthemed .fc-list-heading td,
.fc-unthemed .fc-list-view,
.fc-unthemed .fc-popover,
.fc-unthemed .fc-row,
.fc-unthemed tbody,
.fc-unthemed td,
.fc-unthemed th,
.fc-unthemed thead {
  border-color: white;
}


.fc-unthemed .fc-widget-content {
  border-color: #eee;
}

.fc-unthemed .fc-axis.fc-widget-content {
  border-top-color: white;
  border-bottom-color: white;
}

.fc-ltr .fc-axis {
  color: #9b9b9b;
  text-align: center;
}

.fc-unthemed td.fc-today {
  background: none;
}

.fc-event, .fc-event-dot {
  background-color: #41bfba;
  border-color: #41bfba;
}

.fc-event .fc-bg {
  opacity: 0;
}

.fc-unthemed .fc-content {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}
</style>
