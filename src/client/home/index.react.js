import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import Header from './components/header.react';
import About from './components/about.react';
import Shows from './components/shows.react';
import Contact from './components/contact.react';

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
      msg: {home: msg},
      actions: {shows: actions},
      shows: shows
    } = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="page-home">
          <Header msg={msg} ref="el-home" />
          <About msg={msg} ref="el-about" />
          <Shows actions={actions} msg={msg} ref="el-shows" shows={shows} />
          <Contact actions={actions} msg={msg.contact} ref="el-contact" />
        </div>
      </DocumentTitle>
    );
  }
}
