import './app.styl';
import './styles/animations.styl';
import Component from '../components/component.react';
import Header from './header.react';
import React from 'react';
import flux from '../lib/flux';
import store from './store';
import {RouteHandler} from 'react-router';
import {createValidate} from '../validate';

const actions = [];

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
    const validate = createValidate(msg);
    this.actions = actions.reduce((actions, {feature, create}) => {
      const dispatch = (action, payload) => flux.dispatch(action, payload, {feature});
      const featureActions = create(dispatch, validate, msg[feature]);
      return {...actions, [feature]: featureActions};
    }, {});
  }

  render() {
    const props = {...this.props, actions: this.actions};
    const {users: msg} = props;

    return (
      <div className="page">
        <Header msg={this.props.msg} />
        <RouteHandler {...props} />
      </div>
    );
  }

}
