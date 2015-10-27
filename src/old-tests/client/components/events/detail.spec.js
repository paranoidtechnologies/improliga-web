import Event from 'client/models/event';
import EventDetail from 'client/components/events/detail.react';
import {render} from 'test/utils';
import React from 'react';

describe('Event detail', () => {
  it('renders', () => {
    const event = new Event();
    const comp = <EventDetail event={event} msg={{}} />;
    render(comp);
  });
});
