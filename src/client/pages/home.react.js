import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import Header from './home/header.react';
import Shows from './home/shows.react';
import fetch from '../../common/components/fetch';
import {loadUpcomingShows} from '../../common/shows/actions';

const {object, string} = PropTypes;

@fetch(loadUpcomingShows)
export default class Home extends Component {

  static propTypes = {
    lang: string.isRequired,
    msg: object.isRequired,
    shows: object.isRequired
  }

  componentDidMount(next) {
    return this.props.actions.loadUpcomingShows();
  }

  render() {
    const {
      lang,
      msg,
      actions: {shows: actions},
      shows
    } = this.props;

    const pass = {
      formatDate: msg.format.date.exact,
      formatTime: msg.format.time.exact,
    };

    return (
      <DocumentTitle title={msg.pages.home.title}>
        <div className="page-home">
          <Header lang={lang} msg={msg.pages.home} ref="el-home" />
          <Shows actions={actions} lang={lang} msg={msg} pass={pass} ref="el-shows" shows={shows} />
        </div>
      </DocumentTitle>
    );
  }
}
