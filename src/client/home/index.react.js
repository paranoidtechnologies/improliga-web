import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import Header from './components/header.react';
import About from './components/about.react';
import Shows from './components/shows.react';

export default class Index extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {
      msg: {home: msg},
      actions: {shows: actions},
      shows: shows
    } = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="page-home">
          <Header msg={msg} />
          <About msg={msg} />
          <Shows actions={actions} msg={msg} shows={shows} />
        </div>
      </DocumentTitle>
    );
  }

}
