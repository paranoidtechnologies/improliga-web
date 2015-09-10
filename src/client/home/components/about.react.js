import Component from '../../components/component.react';
import React from 'react';
import Tabman from '../../components/tabman.react';
import Article from '../../components/static/article.react';

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
          heading: msg.about.collective.heading,
          content: [msg.about.collective.public, msg.about.collective.messaging]
        }
      },

      {
        component: Article,
        pass: {
          heading: msg.about.community.heading,
          content: [
            msg.about.community.public,
            msg.about.community.inner,
            msg.about.community.messaging,
            msg.about.community.projects
          ]
        }
      },

      {
        component: Article,
        pass: {
          heading: msg.about.civic.heading,
          content: [
            msg.about.civic.advocate,
            msg.about.civic.members,
            msg.about.civic.logo,
            msg.about.civic.join
          ]
        }
      }
    ];

    return (
      <div className="ui-section section-about">
        <div className="ui-section-inner-wrapper">
          <div className="row text-center about-intro">
            <div className="col-lg-12">
              <h2>{msg.about.heading}</h2>
              <p>{msg.about.desc}</p>
            </div>
          </div>

          <Tabman tabs={tabs} />
        </div>
      </div>
    );
  }
};
