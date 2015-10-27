import Component from 'react-pure-render/component';
import {Link} from 'react-router';
import React, {PropTypes} from 'react';
import {urls} from '../routeMap';


export default class AppLink extends Component {
  static propTypes = {
    lang: PropTypes.string.isRequired,
    params: PropTypes.string,
    to: PropTypes.string.isRequired,
  }


  render() {
    const {children, lang, params, to} = this.props;
    const toName = lang + ':' + to;
    const toPath = urls.get(toName, params);

    return (<Link to={toPath}>{children}</Link>);
  }
};
