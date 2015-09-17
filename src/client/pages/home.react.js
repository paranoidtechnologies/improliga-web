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
        console.log(ref);
      if (ref.findDOMNode) {
        const el = ref.getDOMNode();

        console.log(el);
      }
    }
  }

  render() {
    const {
      msg: {pages: {home: msg}},
      actions: {shows: actions},
      shows: shows
    } = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="page-home">
          <Header msg={msg} ref="el-home" />
          <Shows actions={actions} msg={msg} ref="el-shows" shows={shows} />
        </div>
      </DocumentTitle>
    );
  }
}
