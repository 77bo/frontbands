import React, {Component} from 'react';

import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import Router from 'containers/Router';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <Router location={this.props.location} />
        <Footer/>
      </div>
    );
  }
}

export default App;