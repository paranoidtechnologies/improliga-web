import moment from 'moment';

export const LOAD_WORKSHOPS_CALENDAR = 'LOAD_WORKSHOPS_CALENDAR';


export function loadCalendarWorkshops(action) {
  var month;

  if (action && action.params) {
    month = action.params.month;
  }

  if (!month) {
    month = moment().format('YYYY-MM');
  }

  return ({fetch}) => ({
    type: [LOAD_WORKSHOPS_CALENDAR],
    payload: fetch('/shows?month=' + month).then(response => response.json())
  });
};
