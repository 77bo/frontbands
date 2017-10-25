import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class Video extends Component {
  render() {
    return (
      <div className="band">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FormattedMessage id="page.video.title" defaultMessage="Відео"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Video;