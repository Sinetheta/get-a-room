<template>
  <div id="calendars">
    <calendar-authorize v-show="calendars.length === 0" v-on:load="loadCalendars"></calendar-authorize>
    <ul>
      <li v-for="calendar in calendars">
        <router-link :to="{name: 'calendars', params: { id: calendar.id }}">{{ calendar.summary }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import CalendarAuthorize from '../components/calendar/authorize';
import { getList } from '../components/calendar/list';

export default {
  name: 'Calendars',
  components: {
    CalendarAuthorize
  },
  data: function () {
    return {
      calendars: []
    };
  },
  methods: {
    loadCalendars: function () {
      getList().then((resp) => {
        this.calendars = resp.result.items;
      });
    }
  }
};
</script>
