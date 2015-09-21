import Component from '../components/component.react';
import React from 'react';
import Tabman from '../components/tabman.react';
import Article from '../components/static/article.react';

export default class About extends Component {
  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const msg = this.props.msg;
    const tabs = [
      {
        component: Article,
        pass: {
          heading: msg.pages.about.collective.heading,
          content: [msg.pages.about.collective.public, msg.pages.about.collective.messaging]
        }
      },

      {
        component: Article,
        pass: {
          heading: msg.pages.about.community.heading,
          content: [
            msg.pages.about.community.public,
            msg.pages.about.community.inner,
            msg.pages.about.community.messaging,
            msg.pages.about.community.projects
          ]
        }
      },

      {
        component: Article,
        pass: {
          heading: msg.pages.about.civic.heading,
          content: [
            msg.pages.about.civic.advocate,
            msg.pages.about.civic.members,
            msg.pages.about.civic.logo,
            msg.pages.about.civic.join
          ]
        }
      }
    ];

    return (
      <section className="container ui-page section-about">
        <div className="row text-center about-intro">
          <div className="col-lg-12">
            <h2>{msg.pages.about.heading}</h2>
            <p>{msg.pages.about.desc}</p>
          </div>
        </div>

        <Tabman tabs={tabs} />
      </section>
    );
  }
};
