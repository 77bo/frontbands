import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './NavbarBrand.css';

class NavbarBrand extends Component {

  render() {
    return (
      <Link className="brand-name" to={this.props.to}>{this.props.children}</Link>
    );
  }
}

export default NavbarBrand;
