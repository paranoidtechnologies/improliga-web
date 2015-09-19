import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import Header from './home/header.react';
import Shows from './home/shows.react';

export default class Index extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  componentDidUpdate() {
    const routes = this.context.router.getCurrentRoutes();
    const route = routes[routes.length - 1].name;
    const ref = this.refs['el-' + route];

    if (ref) {
      const el = React.findDOMNode(ref);
      const pos = el.getBoundingClientRect().top;
      const win = global.jQuery(global.window);
      const body = global.jQuery('body');
      const move = global.jQuery('html, body');
      const target = body.scrollTop() + pos;

      move.stop(true).scrollTop(target);
    }
  }

  render() {
    const {
      msg: msg,
      actions: {shows: actions},
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
