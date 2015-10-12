import {expect} from 'chai';
import {getChildren, render} from 'test/utils';
import EventMonth from 'client/components/events/month.react';
import React from 'react';
import moment from 'moment';

describe('Event month calendar and list', () => {
  it('renders blank', () => {
    const props = {
      formatDate: 'YYYY-MM-DD',
      formatTime: 'HH:mm:ss',
      listDraw: function() {},
      month: moment('2015-01', 'YYYY-MM'),
      msg: {
        title: 'foo',
        calendar: {},
        list: {},
        months: ['january']
      },
      routeArchive: 'showsArchive'
    };

    const comp = <EventMonth {...props} />;
    const tree = render(comp);

    const cont = getChildren(tree);

    expect(cont).to.be.an('array');
    expect(cont.length).to.equal(4);

    const title = getChildren(cont[0]);
    const titleCont = getChildren(title);

    expect(titleCont).to.be.an('array');
    expect(titleCont.length).to.equal(3);

    const titleLabel = titleCont[0];
    const titleMonth = titleCont[1];
    const titleYear = titleCont[2];

    expect(getChildren(titleLabel)).to.equal('foo ');
    expect(getChildren(titleMonth)).to.equal('january ');
    expect(getChildren(titleYear)).to.equal('2015');
  });
});
