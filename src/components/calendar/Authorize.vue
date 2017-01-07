<template>
  <div class="authorize">
    Authorize access to Google Calendar API
    <button v-on:click="authorize">Authorize</button>
  </div>
</template>

<script>
import {getApi} from './get_gapi';
const CLIENT_ID = '536070888634-fqg7o8o54291i1u1gefk4677lkor701c.apps.googleusercontent.com';
const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

export default {
  name: 'CalendarAuthorize',
  methods: {
    authorize: function () {
      getApi().then(function (gapi) {
        gapi.auth.authorize({
          client_id: CLIENT_ID,
          scope: SCOPES,
          immediate: false
        });
      });
    }
  }
};
</script>

<style scoped>

</style>
