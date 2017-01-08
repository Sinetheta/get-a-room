import { gapi } from './get_gapi';

var loadCalendarApi = function () {
  return gapi.client.load('calendar', 'v3');
};

export { loadCalendarApi };
