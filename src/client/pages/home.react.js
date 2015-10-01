import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import Header from './home/header.react';
import Shows from './home/shows.react';

export default class Home extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    shows: React.PropTypes.object.isRequired
  }

  render() {
    const {
      msg: msg,
      actions: {shows: actions},
      shows: shows
    } = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="page-home">
          <Header msg={msg.pages.home} ref="el-home" />
          <Shows actions={actions} msg={msg} ref="el-shows" shows={shows} />
        </div>
      </DocumentTitle>
    );
  }
}
