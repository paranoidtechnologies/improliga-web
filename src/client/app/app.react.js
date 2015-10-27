import './styles/page.styl';
import Component from 'react-pure-render/component';
import Footer from './footer.react';
import Header from './header.react';
import React, {PropTypes} from 'react';
import RouterHandler from '../../common/components/RouterHandler.react';
import mapDispatchToProps from '../../common/app/mapDispatchToProps';
import mapStateToProps from '../../common/app/mapStateToProps';
import {connect} from 'react-redux';

// // logRenderTime is useful for app with huge UI to check render performance.
// import logRenderTime from '../lib/logRenderTime';

@connect(mapStateToProps, mapDispatchToProps)
// @logRenderTime
export default class App extends Component {

  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    msg: PropTypes.object.isRequired,
  }

  render() {
    const {location: {pathname}, msg} = this.props;

    return (
      <div className="page" data-pathname={pathname}>
        <div className="page-wrapper">
          <Header msg={msg} pathname={pathname} />
          <RouterHandler {...this.props} />
          <Footer msg={msg} />
        </div>
      </div>
    );
  }

}
