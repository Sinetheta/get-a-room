<template>
  <div class="authorize">
    Authorize access to Google Calendar API
    <button v-on:click="init">Authorize</button>
  </div>
</template>

<script>
import { getApi, authorize } from './get_gapi';

export default {
  name: 'CalendarAuthorize',
  methods: {
    init: function () {
      getApi()
        .then(authorize)
        });
    }
  }
};
</script>

<style scoped>

</style>
