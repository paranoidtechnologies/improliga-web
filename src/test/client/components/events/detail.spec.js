import EventDetail from 'client/components/events/detail.react';
import {render} from 'test/utils';
import React from 'react';

describe('Event detail', () => {
  it('renders blank', () => {
    const comp = <EventDetail event={{}} msg={{}} />;
    render(comp);
  });
});
