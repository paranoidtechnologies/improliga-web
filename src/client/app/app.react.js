import './styles/page.styl';
import Component from 'react-pure-render/component';
import Footer from './footer.react';
import Header from './header.react';
import React, {PropTypes} from 'react';
import RouterHandler from '../../common/components/RouterHandler.react';
import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import mapStateToProps from '../../common/app/mapStateToProps';
import {connect} from 'react-redux';

const {object} = PropTypes;

// // logRenderTime is useful for app with huge UI to check render performance.
// import logRenderTime from '../lib/logRenderTime';

@connect(mapStateToProps, mapDispatchToProps)
// @logRenderTime
export default class App extends Component {

  static propTypes = {
    actions: object.isRequired,
    children: object.isRequired,
    intl: object.isRequired,
    location: object.isRequired,
    msg: object.isRequired,
  }

  render() {
    const props = this.props;
    const {intl, location: {pathname}, msg} = props;
    const lang = intl.selectedLanguage;

    return (
      <div className="page" data-pathname={pathname}>
        <div className="page-wrapper">
          <Header lang={lang} msg={msg} pathname={pathname} />
          <RouterHandler {...props} />
          <Footer lang={lang} msg={msg} />
        </div>
      </div>
    );
  }

}
