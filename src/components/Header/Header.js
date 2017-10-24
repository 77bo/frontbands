import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {intlShape, injectIntl} from 'react-intl';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <Navbar dark className="bg-dark" fixed="top" expand="md">
          <NavbarBrand href="/">Front Bands</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/'>Home</Link>
              </NavItem>
              <NavItem>
                <Link to='/about'>About</Link>
              </NavItem>
            </Nav>
            <button onClick={() => this.props.changeLanguage('uk')}>
              Українська
            </button>
            <button onClick={() => this.props.changeLanguage('en')}>
              English
            </button>
          </Collapse>
        </Navbar>
      </header>
    );
  }
}

Header.propTypes = {
  intl: intlShape.isRequired,
};

export default injectIntl(Header);