export const LOAD_UPCOMING = 'LOAD_UPCOMING';
export const LOAD_CALENDAR = 'LOAD_CALENDAR';

export function loadUpcomingShows(params = {}) {
  if (typeof params.perPage === 'undefined') {
    params.perPage = 6;
  }

  return ({fetch}) => ({
    type: [LOAD_UPCOMING],

    payload: {
      promise: fetch('/shows/upcoming').then(response => response.json())
    }
  });
}


export function loadCalendarShows(month) {
  return ({fetch}) => ({
    type: [LOAD_CALENDAR],
    payload: fetch('/shows').then(response => response.json())
  });
}
