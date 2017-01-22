<template>
  <div id="calendars">
    <h1>My Calendars</h1>
    <ul>
      <li v-for="calendar in calendars">
        <router-link :to="{name: 'calendars', params: { id: calendar.id }}">{{ calendar.summary }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { getList } from '../components/calendar/list';

export default {
  name: 'Calendars',
  data: function () {
    return {
      calendars: []
    };
  },
  created: function () {
    getList().then((resp) => {
      this.calendars = resp.result.items;
    });
  }
};
</script>
