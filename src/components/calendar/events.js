import { gapi } from './get_gapi';
const TEST_CAL_ID = 'freerunningtechnologies.com_93nvq1n02ir3077g6k5116136c@group.calendar.google.com';

var listUpcomingEvents = function (from, to) {
  return gapi.client.calendar.events.list({
    'calendarId': TEST_CAL_ID,
    'timeMin': from.toISOString(),
    'timeMax': to.toISOString(),
    'showDeleted': false,
    'singleEvents': true,
    'orderBy': 'startTime'
  });
};

var listTodaysEvents = function () {
  var midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  var tomoro = new Date();
  tomoro.setHours(24, 0, 0, 0);
  return listUpcomingEvents(midnight, tomoro);
};

export { listTodaysEvents };
