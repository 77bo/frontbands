import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {intlShape, injectIntl} from 'react-intl';

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, Button } from 'reactstrap';

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
            <Button outline color="info" size="sm" onClick={() => this.props.changeLanguage('uk')}>
              Українська
            </Button>
            <Button outline color="info" size="sm" onClick={() => this.props.changeLanguage('en')}>
              English
            </Button>
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