import TeamDetail from 'client/components/teams/detail.react';
import {render} from 'test/utils';
import React from 'react';

describe('Team detail', () => {
  it('renders blank', () => {
    const comp = <TeamDetail team={{}} msg={{}} />;
    render(comp);
  });
});
