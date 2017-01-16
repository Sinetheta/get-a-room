<template>
  <button v-on:click="insertEvent">Book Room</button>
</template>

<script>
import moment from 'moment';
import { insertEvent } from './events';

export default {
  name: 'CreateButton',
  props: ['calendarId'],
  methods: {
    insertEvent: function () {
      var from = moment();
      var to = moment().add(30, 'minutes');
      insertEvent(this.calendarId, from, to);
    }
  }
};
</script>

<style>

</style>
