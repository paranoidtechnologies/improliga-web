import './styles/page.styl';
import Component from '../components/component.react';
import Header from './header.react';
import Footer from './footer.react';
import React from 'react';
import flux from '../lib/flux';
import store from './store';
import {RouteHandler} from 'react-router';
import {createValidate} from '../validate';

import * as showsActions from '../pages/shows/actions';
import * as newsActions from '../components/news/actions';

const actions = [showsActions, newsActions];

@flux(store)
export default class App extends Component {

  static propTypes = {
    flux: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  componentWillMount() {
    this.createActions();
  }

  createActions() {
    const {flux, msg} = this.props;
    const state = () => flux.state.toObject();
    const validate = createValidate(() => msg);

    this.actions = actions.reduce((actions, {create, feature, inject}) => {
      const dispatch = (action, payload) => {
        flux.dispatch(action, payload, {feature});
      }

      const deps = [dispatch, validate, state];
      const args = inject ? inject(...deps) : deps;
      return {...actions, [feature]: create(...args)};

    }, {});
  }

  render() {
    const {msg} = this.props;
    const props = {...this.props, actions: this.actions};

    return (
      <div className="page">
        <Header msg={msg} />
        <RouteHandler {...props} />
      </div>
    );
  }

}
