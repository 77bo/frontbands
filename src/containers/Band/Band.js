import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class Band extends Component {
  render() {
    return (
      <div className="band">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FormattedMessage id="page.band.title" defaultMessage="Група"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Band;