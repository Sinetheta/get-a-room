<template>
  <div class="create-button-container">
    <button class="button button-inverse button-large" v-show="!modalShown" v-on:click="showModal()">Book Room</button>
    <div class="modal-mask" v-show="modalShown">
      <div class="modal">
        <div class="modal-event-details">{{newEvent.startTime.format('h:mm')}} - {{newEvent.endTime.format('h:mm')}}</div>
        <div class="modal-event-controls">
          <button class="button button-inverse button-secondary button-large">- 15</button>
          <button class="button button-inverse button-secondary button-large">+ 15</button>
        </div>
        <div class="modal-controls">
          <button class="button flat" v-on:click="hideModal()">cancel</button>
          <button class="button flat">book now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { monkey } from 'moment-round';
monkey(moment);
import { insertEvent } from './events';

export default {
  name: 'CreateButton',
  props: ['calendarId'],
  data: function () {
    return {
      modalShown: false,
      newEvent: {
        startTime: moment(),
        endTime: moment().add(15, 'minutes')
      }
    };
  },
  methods: {
    insertEvent: function () {
      var from = moment();
      var to = moment().add(30, 'minutes');
      insertEvent(this.calendarId, from, to).then(() => {
        this.$emit('insert');
      });
    },
    showModal: function () {
      this.newEvent.startTime.floor(15, 'minutes');
      this.newEvent.endTime.floor(15, 'minutes');
      this.modalShown = true;
      document.body.classList.add('modal-shown');
    },
    hideModal: function () {
      this.modalShown = false;
      document.body.classList.remove('modal-shown');
    }
  }
};
</script>

<style>
.create-button-container {
  margin: 2em auto;
}
</style>
