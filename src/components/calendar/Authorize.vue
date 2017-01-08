<template>
  <div class="authorize">
    Authorize access to Google Calendar API
    <button v-on:click="init">Authorize</button>
  </div>
</template>

<script>
import { getApi, authorize } from './get_gapi';
import { loadCalendarApi } from './calendars';

var alertSuccess = function () {
  window.alert('Authorization Success!');
};

var alertError = function () {
  window.alert('Authorization Error!');
};

export default {
  name: 'CalendarAuthorize',
  methods: {
    init: function () {
      getApi()
        .then(authorize)
        .then(alertSuccess, alertError)
        .then(loadCalendarApi)
        });
    }
  }
};
</script>

<style scoped>

</style>
