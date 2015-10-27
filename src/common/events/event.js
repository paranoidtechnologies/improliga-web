import {Record} from 'immutable';
import moment from 'moment';

const formatDate = 'YYYY-MM-DDTHH:mm:ssZ';
const formatTime = 'HH:mm:ssZ';
const Event = Record({
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

export default Event;

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
