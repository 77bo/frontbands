import React, {Component} from 'react';
import {intlShape, injectIntl} from 'react-intl';

import './Footer.css';

class Footer extends Component {

  render() {
    return (
      <footer className="mainfooter" role="contentinfo">
        <button onClick={() => this.props.changeLanguage('uk')}>
          Українська
        </button>
        <button onClick={() => this.props.changeLanguage('en')}>
          English
        </button>
      </footer>
    );
  }
}

Footer.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Footer);
