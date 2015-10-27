import TeamDetail from 'client/teams/detail.react';
import {render} from 'test/utils';
import React from 'react';

describe('Team detail', () => {
  it('renders blank', () => {
    const comp = <TeamDetail msg={{}} team={{}} />;
    render(comp);
  });
});
