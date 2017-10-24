import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FormattedMessage id="page.about.title"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;