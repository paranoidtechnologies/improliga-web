import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React, {PropTypes} from 'react';
import Header from './home/header.react';
import Shows from './home/shows.react';

const {func, object} = PropTypes;

export default class Home extends Component {

  static propTypes = {
    dispatch: func,
    intl: object,
    msg: object,
    shows: object
  }

  render() {
    const {dispatch, intl, msg, shows} = this.props;
    const lang = intl.selectedLanguage;

    const pass = {
      formatDate: msg.format.date.exact,
      formatTime: msg.format.time.exact,
    };

    return (
      <DocumentTitle title={msg.pages.home.title}>
        <div className="page-home">
          <Header lang={lang} msg={msg.pages.home} ref="el-home" />
          <Shows dispatch={dispatch} lang={lang} msg={msg} pass={pass} ref="el-shows" shows={shows} />
        </div>
      </DocumentTitle>
    );
  }
}
