import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FormattedMessage} from 'react-intl';
import {Collapse, Navbar, NavbarToggler, Nav, NavItem, Button} from 'reactstrap';

import NavbarBrand from 'components/NavbarBrand/NavbarBrand';

import './Navigation.css';

class Navigation extends Component {
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
      <Navbar light className="bg-light" fixed="top" expand="md">
        <NavbarBrand to="/">Front Bands</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link className="nav-link" to='/news'><FormattedMessage id="header.navigation.button.news.title" defaultMessage="Новини"/></Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/tour'><FormattedMessage id="header.navigation.button.tour.title" defaultMessage="Афіша"/></Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/band'><FormattedMessage id="header.navigation.button.band.title" defaultMessage="Група"/></Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/music'><FormattedMessage id="header.navigation.button.music.title" defaultMessage="Музика"/></Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/video'><FormattedMessage id="header.navigation.button.video.title" defaultMessage="Відео"/></Link>
            </NavItem>
            <NavItem>
              <Link className="nav-link" to='/contact'><FormattedMessage id="header.navigation.button.contact.title" defaultMessage="Контакти"/></Link>
            </NavItem>
          </Nav>
          <Nav className="ml-auto language-selector" navbar>
            <NavItem>
              <Button className="nav-link" color="link" size="sm" onClick={() => this.props.changeLanguage('uk')}>
                Українська
              </Button>
            </NavItem>
            <NavItem>
              <Button className="nav-link" color="link" size="sm" onClick={() => this.props.changeLanguage('en')}>
                English
              </Button>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;