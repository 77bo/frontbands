import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <footer className="app-footer text-center" role="contentinfo">
        © <FormattedMessage id="footer.author" defaultMessage="Deepwine" />
      </footer>
    );
  }
}

export default Footer;
