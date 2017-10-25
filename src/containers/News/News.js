import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class News extends Component {
  render() {
    return (
      <div className="band">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FormattedMessage id="page.news.title" defaultMessage="Новини"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;