import './styles/page.styl';
import Component from '../components/component.react';
import Header from './header.react';
import React from 'react';
import flux from '../lib/flux';
import store from './store';
import {RouteHandler} from 'react-router';
import {createValidate} from '../validate';
import Api from '../api';

import * as showsActions from '../components/shows/actions';
import * as eventsActions from '../components/events/actions';
import * as newsActions from '../components/news/actions';

const actions = [eventsActions, showsActions, newsActions];

@flux(store)
export default class App extends Component {
  static propTypes = {
    flux: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired
  }

  api = new Api();

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
      };

      const deps = [this.api, dispatch, validate, state];
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
