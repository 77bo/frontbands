import React, {Component} from 'react';

import Navigation from 'components/Navigation/Navigation';

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
      <header className="header-component">
        <Navigation changeLanguage={this.props.changeLanguage}/>
      </header>
    );
  }
}

export default Header;