import Component from '../../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import NewsDetail from '../../components/news/detail.react';
import NotFound from '../../components/notfound.react';

export default class NewsDetailPage extends Component {

  static propTypes = {
    actions: React.PropTypes.object.isRequired,
    news: React.PropTypes.object.isRequired,
    msg: React.PropTypes.object.isRequired,
    params: React.PropTypes.object.isRequired
  }

  componentDidMount() {
    const {newsItemId} = this.props.params;
    this.props.actions.news.loadNewsItemDetail(newsItemId);
  }

  render() {
    const {actions, msg, news} = this.props;
    const newsItem = news.detail;
console.log(news);
    if (!newsItem) {
      return <NotFound msg={msg} />;
    }

    const title = newsItem.name;
    const props = {
      actions: actions,
      formatDateTime: msg.app.format.dateTime.exact,
      newsItem: newsItem,
      msg: msg
    };

    return (
      <DocumentTitle title={title}>
        <div className="ui-page ui-page-show">
          <NewsDetail {...props} />
        </div>
      </DocumentTitle>
    );
  }
}
