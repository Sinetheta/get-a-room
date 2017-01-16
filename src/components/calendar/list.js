import { getCapi } from './get_capi';

var getList = function () {
  return getCapi()
    .then(function (calendar) {
      return calendar.calendarList.list();
    });
};

export { getList };
