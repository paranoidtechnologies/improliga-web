import EventListItem from 'client/components/events/listItem.react';
import {render} from 'test/utils';
import React from 'react';

describe('Event list item', () => {
  it('renders blank', () => {
    const comp = <EventListItem event={{}} msg={{}} />;
    render(comp);

  });
});
