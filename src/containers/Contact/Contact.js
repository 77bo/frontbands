import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class Contact extends Component {
  render() {
    return (
      <div className="band">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <FormattedMessage id="page.contact.title" defaultMessage="Контакти"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;