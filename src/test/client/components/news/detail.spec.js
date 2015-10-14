import NewsDetail from 'client/components/news/detail.react';
import {getChildren, render} from 'test/utils';
import React from 'react';
import moment from 'moment';

const formatDate = 'YYYY-MM-DD';
const item = {
  formatDateTime: 'YYYY-MM-DD HH:mm:ss',
  name: 'name',
  text: 'text',
  updatedAt: moment('2015-01-05', formatDate),
  createdAt: moment('2015-01-01', formatDate)
};

const props = {
  msg: {
    createdAt: 'createdAt',
  },
  newsItem: item
};

describe('News detail', () => {
  it('has heading', () => {
    const comp = <NewsDetail {...props} />;
    const tree = render(comp);
    const cont = getChildren(getChildren(tree));

    expect(cont).to.be.an('array');
    expect(cont[0]._store.props.className.split(' ')).to.be.contain('news-heading');

    const heading = getChildren(cont[0]);
    expect(heading).to.equal(item.name);
  });

  it('has content', () => {
    const comp = <NewsDetail {...props} />;
    const tree = render(comp);
    const cont = getChildren(getChildren(tree));

    expect(cont).to.be.an('array');
    expect(cont[1]._store.props.className.split(' ')).to.contain('news-cont');

    const text = getChildren(cont[1]);
    expect(text).to.equal(item.text);
  });

  it('has footer', () => {
    const comp = <NewsDetail {...props} />;
    const tree = render(comp);
    const cont = getChildren(getChildren(tree));

    expect(cont).to.be.an('array');
    expect(cont[2]._store.props.className.split(' ')).to.contain('news-footer');

    const createdAt = getChildren(cont[2]);
    expect(createdAt._store.props.className.split(' ')).to.contain('created-at');

    const createdAtCont = getChildren(createdAt);
    expect(createdAtCont).to.be.an('array');
    expect(createdAtCont.length).to.equal(2);

    const createdAtLabel = createdAtCont[0];
    expect(createdAtLabel._store.props.className.split(' ')).to.contain('label');
    expect(getChildren(createdAtLabel)).to.equal(props.msg.createdAt);

    const createdAtValue = createdAtCont[1];
    expect(createdAtValue._store.props.className.split(' ')).to.contain('value');
    expect(getChildren(createdAtValue)).to.equal(item.createdAt.format(props.formatDateTime));
  });
});
