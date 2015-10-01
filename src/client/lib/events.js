import moment from 'moment';


export function wakeUpEvent(item) {
  if (item.start) {
    item.start = moment(item.start, 'YYYY-MM-DD');
  }

  if (item.end) {
    item.end = moment(item.end, 'YYYY-MM-DD');
  }

  return item;
};
