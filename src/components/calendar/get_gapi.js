const GAPI_TIMEOUT = 10000;
var loadGapi = function () {
  var script = document.createElement('script');
  script.src = 'https://apis.google.com/js/client.js?onload=gapiLoaded';
  document.body.appendChild(script);
};
var promise = new Promise(function (resolve, reject) {
  window.gapiLoaded = function () {
    resolve(window.gapi);
  };
  loadGapi();
  window.setTimeout(function () {
    reject('Google Calendar Api timed out.');
  }, GAPI_TIMEOUT);
});

export function getApi () {
  return promise;
};
