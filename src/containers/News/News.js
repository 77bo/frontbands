import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import FullScreenImage from 'components/FullScreenImage/FullScreenImage';

class News extends Component {
  render() {
    return (
      <FullScreenImage>
      <div className="band">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FormattedMessage id="page.news.title" defaultMessage="Новини"/>
            </div>
          </div>
        </div>
      </div>
      </FullScreenImage>
    );
  }
}

export default News;