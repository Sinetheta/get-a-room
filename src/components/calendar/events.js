import { getCapi } from './get_capi';

var listUpcomingEvents = function (calendarId, from, to) {
  return getCapi().then(function (calendar) {
    return calendar.events.list({
      'calendarId': calendarId,
      'timeMin': from.toISOString(),
      'timeMax': to.toISOString(),
      'showDeleted': false,
      'singleEvents': true,
      'orderBy': 'startTime'
    });
  });
};

var listTodaysEvents = function (calendarId) {
  var midnight = new Date();
  midnight.setHours(0, 0, 0, 0);
  var tomoro = new Date();
  tomoro.setHours(24, 0, 0, 0);
  return listUpcomingEvents(calendarId, midnight, tomoro);
};

var insertEvent = function (calendarId, from, to) {
  return getCapi().then(function (calendar) {
    return calendar.events.insert({
      'calendarId': calendarId,
      'resource': {
        'summary': 'In Person Booking',
        'start': {
          'dateTime': from.toISOString()
        },
        'end': {
          'dateTime': to.toISOString()
        }
      }
    });
  });
};

export { insertEvent, listTodaysEvents };
