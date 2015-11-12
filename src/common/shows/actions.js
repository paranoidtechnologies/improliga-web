import moment from 'moment';

export const LOAD_UPCOMING = 'LOAD_UPCOMING';
export const LOAD_CALENDAR = 'LOAD_CALENDAR';

export function loadUpcomingShows(params = {}) {
  if (typeof params.perPage === 'undefined') {
    params.perPage = 6;
  }

  return ({fetch}) => ({
    type: [LOAD_UPCOMING],

    payload: {
      promise: fetch('/shows').then(response => response.json())
    }
  });
}


export function loadCalendarShows(action) {
  var month;

  if (action && action.params) {
    month = action.params.month;
  }

  if (!month) {
    month = moment().format('YYYY-MM');
  }

  return ({fetch}) => ({
    type: [LOAD_CALENDAR],
    payload: fetch('/shows?month=' + month).then(response => response.json())
  });
}
