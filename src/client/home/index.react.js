import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import Header from './components/header.react';
import About from './components/about.react';
import Shows from './shows/index.react';

export default class Index extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {
      donkey: donkey,
      msg: {home: msg},
      actions: {shows: actions},
      shows: shows
    } = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="page-home">
          <Header msg={msg} />
          <About msg={msg} />
          <Shows actions={actions} donkey={donkey} items={shows.list} msg={msg} />
        </div>
      </DocumentTitle>
    );
  }

}
