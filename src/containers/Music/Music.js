import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class Music extends Component {
  render() {
    return (
      <div className="band">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FormattedMessage id="page.music.title" defaultMessage="Музика"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Music;