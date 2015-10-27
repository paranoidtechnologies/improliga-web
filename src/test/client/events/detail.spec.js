import {Event} from 'common/events/event';
import EventDetail from 'client/events/detail.react';
import {render} from 'test/utils';
import React from 'react';

describe('Event detail', () => {
  it('renders', () => {
    const event = new Event();
    const comp = <EventDetail event={event} msg={{}} />;
    render(comp);
  });
});
