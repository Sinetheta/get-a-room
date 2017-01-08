import { gapi } from './get_gapi';

var loadCalendarApi = function () {
  return gapi.client.load('calendar', 'v3');
};

var getList = function () {
  return gapi.client.calendar.calendarList.list();
};

export { loadCalendarApi, getList };
