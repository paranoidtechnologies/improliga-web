import React from 'react';
import Component from '../components/component.react';
import BlogList from '../components/blog/list.react';
import './contact.styl';

export default class BlogPage extends Component {
  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    blog: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
  }

  componentDidMount(next) {
    return this.props.actions.blog.loadBlog();
  }

  render() {
    const {msg} = this.props;
    const props = {
      actions: this.props.actions,
      items: this.props.blog.list,
      msg: this.props.msg
    };

    return (
      <div className="ui-page ui-page-contact">
        <section className="container ui-section-news">

          <div className="row ui-section-intro">
            <h1>{msg.pages.blog.title}</h1>
            <p>{msg.pages.blog.perex}</p>
          </div>

          <BlogList {...props} />
        </section>
      </div>
    );
  }
};

