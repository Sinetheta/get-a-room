<template>
  <div class="authorize">
    Authorize access to Google Calendar API
    <button v-on:click="authorize">Authorize</button>
  </div>
</template>

<script>
import * as env from 'env';
import {getApi} from './get_gapi';

export default {
  name: 'CalendarAuthorize',
  methods: {
    authorize: function () {
      getApi().then(function (gapi) {
        gapi.auth.authorize({
          client_id: env.gapi.CLIENT_ID,
          scope: env.gapi.SCOPES,
          immediate: false
        });
      });
    }
  }
};
</script>

<style scoped>

</style>
