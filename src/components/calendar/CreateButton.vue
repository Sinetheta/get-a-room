<template>
  <div class="create-button-container">
    <button class="button button-inverse button-large" v-show="!modalShown" v-on:click="showModal()">Book Room</button>
    <div class="modal-mask" v-show="modalShown">
      <div class="modal">
        <div class="modal-event-details">{{time(newEvent.startTime)}} - {{time(newEvent.endTime)}}</div>
        <div class="modal-event-controls">
          <button class="button button-inverse button-secondary button-large" v-on:click="addTime(-15)">- 15</button>
          <button class="button button-inverse button-secondary button-large" v-on:click="addTime(15)">+ 15</button>
        </div>
        <div class="modal-controls">
          <button class="button flat" v-on:click="hideModal()">cancel</button>
          <button class="button flat" v-on:click="hideModal(); createEvent()">book now</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';
import { monkey } from 'moment-round';
monkey(moment);

export default {
  name: 'CreateButton',
  props: [
    'createAt'
  ],
  data: function () {
    return {
      modalShown: false,
      newEvent: {
        startTime: new Date(),
        endTime: moment().add(30, 'minutes').toDate()
      }
    };
  },
  methods: {
    createEvent: function () {
      this.$emit('create', {from: this.newEvent.startTime, to: this.newEvent.endTime});
    },
    showModal: function () {
      this.newEvent.startTime = moment(this.createAt).floor(15, 'minutes').toDate();
      this.newEvent.endTime = moment(this.newEvent.startTime).add(30, 'minutes').toDate();
      this.modalShown = true;
      document.body.classList.add('modal-shown');
    },
    hideModal: function () {
      this.modalShown = false;
      document.body.classList.remove('modal-shown');
    },
    addTime: function (increment) {
      this.newEvent.endTime = moment.max(
        moment(this.newEvent.startTime).add(15, 'minutes'),
        moment(this.newEvent.endTime).add(increment, 'minutes')
      ).toDate();
    },
    time: function (date) {
      return moment(date).format('h:mm');
    }
  }
};
</script>

<style>
.create-button-container {
  margin: 2em auto;
}
</style>
