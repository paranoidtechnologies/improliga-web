import Event from 'client/models/event';
import EventListItem from 'client/components/events/listItem.react';
import {render} from 'test/utils';
import React from 'react';

describe('Event list item', () => {
  const event = new Event({
    id: 5,
  });

  it('renders', () => {
    const comp = <EventListItem item={event} msg={{}} />;
    render(comp);
  });
});
