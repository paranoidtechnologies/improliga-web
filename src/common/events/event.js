import {Record} from 'immutable';
import moment from 'moment';

const formatDate = 'YYYY-MM-DDTHH:mm:ssZ';
const formatTime = 'HH:mm:ssZ';

export const Event = Record({
  id: '',
  image: null,
  name: '',
  descFull: '',
  descShort: '',
  location: null,
  start: null,
  startTime: null,
  end: null,
  endTime: null,
  price: null,
  priceStudent: null,
});

export function wakeUpEvent(itemPassed) {
  let item = itemPassed;

  if (itemPassed) {
    item = itemPassed.toJS();

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

  return itemPassed.merge(item);
};
