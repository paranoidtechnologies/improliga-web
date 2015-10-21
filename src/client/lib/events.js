import moment from 'moment';

const formatDate = 'YYYY-MM-DDTHH:mm:ssZ';
const formatTime = 'HH:mm:ssZ';

export function wakeUpEvent(itemPassed) {
  let item = itemPassed;
  let immutable = false;

  if (itemPassed) {
    if (itemPassed.toJS) {
      immutable = true;
      item = itemPassed.toJS();
    }

    if (item.start) {
      item.start = moment(item.start, formatDate);
      if (item.startTime) {
        item.startTime = moment(item.startTime, formatTime);
      }
    }

    if (item.end) {
      item.end = moment(item.end, formatDate);

      if (item.endTime) {
        item.endTime = moment(item.endTime, formatTime);
      }
    }
  }

  if (immutable) {
    item = itemPassed.merge(item);
  }

  return item;
};
