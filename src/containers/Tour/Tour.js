import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class Tour extends Component {
  render() {
    return (
      <div className="band">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FormattedMessage id="page.tour.title" defaultMessage="Афіша"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tour;