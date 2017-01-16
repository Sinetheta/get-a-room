import * as env from 'env';
// A reference for areas where it's clear that the gapi is already loaded
var gapi;

// Load the base api immediately
var loadGapi = function () {
  var script = document.createElement('script');
  script.src = 'https://apis.google.com/js/client.js?onload=gapiLoaded';
  document.body.appendChild(script);
};
var gprom = new Promise(function (resolve, reject) {
  window.gapiLoaded = function () {
    resolve(gapi = window.gapi);
  };
  loadGapi();
  window.setTimeout(function () {
    reject('Google Calendar Api timed out.');
  }, env.gapi.GAPI_TIMEOUT);
});
// We may ask for it repeatedly from other areas of the application
var getApi = function () {
  return gprom;
};

export { getApi, gapi };
