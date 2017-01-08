import * as env from 'env';
var gapi;
var loadGapi = function () {
  var script = document.createElement('script');
  script.src = 'https://apis.google.com/js/client.js?onload=gapiLoaded';
  document.body.appendChild(script);
};
var promise = new Promise(function (resolve, reject) {
  window.gapiLoaded = function () {
    resolve(gapi = window.gapi);
  };
  loadGapi();
  window.setTimeout(function () {
    reject('Google Calendar Api timed out.');
  }, env.gapi.GAPI_TIMEOUT);
});
var getApi = function () {
  return promise;
};

export { getApi, gapi };
