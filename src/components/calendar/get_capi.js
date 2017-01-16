import * as env from 'env';
import { getApi, gapi } from './get_gapi';

// Don't load the calendar api until needed
var loadCalendarApi = function () {
  return gapi.client.load('calendar', 'v3');
};
var authorize = function () {
  return gapi.auth.authorize({
    client_id: env.gapi.CLIENT_ID,
    scope: env.gapi.SCOPES
  });
};
var cprom;
var getCapi = function () {
  cprom = cprom || new Promise(function (resolve, reject) {
    getApi()
      .then(authorize)
      .then(loadCalendarApi)
      .then(function () {
        resolve(gapi.client.calendar);
      }, reject);
  });
  return cprom;
};

export { getCapi };
