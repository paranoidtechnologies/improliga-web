import Component from '../../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import BlogDetail from '../../components/blog/detail.react';
import NotFound from '../../components/notfound.react';

export default class BlogDetailPage extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    blog: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    const {blogItemId} = this.props.params;
    this.props.actions.blog.loadBlogItemDetail(blogItemId);
  }

  render() {
    const {actions, msg, blog} = this.props;
    const blogItem = blog.detail;

    if (!blogItem) {
      return <NotFound msg={msg} />;
    }

    const title = blogItem.name;
    const props = {
      actions: actions,
      formatDateTime: msg.app.format.dateTime.exact,
      blogItem: blogItem,
      msg: msg
    };

    return (
      <DocumentTitle title={title}>
        <div className="ui-page ui-page-show">
          <BlogDetail {...props} />
        </div>
      </DocumentTitle>
    );
  }
}
