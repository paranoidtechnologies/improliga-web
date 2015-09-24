import React from 'react';
import Component from '../components/component.react';
import NewsList from '../components/news/list.react';
import './contact.styl';

export default class News extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    news: React.PropTypes.object.isRequired
  }

  render() {
    const {msg} = this.props;
    const props = {
      actions: this.props.actions,
      items: this.props.news.list,
      msg: this.props.msg
    };

    return (
      <div className="ui-page ui-page-contact">
        <section className="container ui-section-news">

          <div className="row ui-section-intro">
            <h1>{msg.pages.news.title}</h1>
            <p>{msg.pages.news.perex}</p>
          </div>

          <NewsList {...props} />
        </section>
      </div>
    );
  }
};

