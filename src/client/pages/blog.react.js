import Component from 'react-pure-render/component';
import DocumentTitle from 'react-document-title';
import React from 'react';
import BlogList from '../blog/list.react';
import fetch from '../../common/components/fetch';
import {loadBlog} from '../../common/blog/actions';
import './contact.styl';

@fetch(loadBlog)
export default class BlogPage extends Component {
  static propTypes = {
    actions: React.PropTypes.object,
    blog: React.PropTypes.object,
    msg: React.PropTypes.object,
  }

  render() {
    const {msg} = this.props;
    const props = {
      actions: this.props.actions,
      items: this.props.blog.list,
      msg: this.props.msg
    };

    return (
      <DocumentTitle title={msg.pages.blog.title}>
        <div className="ui-page ui-page-contact">
          <section className="container ui-section-news">

            <div className="row ui-section-intro">
              <h1>{msg.pages.blog.title}</h1>
              <p>{msg.pages.blog.perex}</p>
            </div>

            <BlogList {...props} />
          </section>
        </div>
      </DocumentTitle>
    );
  }
};

