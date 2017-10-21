import React, { Component } from 'react';
import './App.css';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div class="container">
          <div class="row">
            <div class="col-6">Something</div>
            <div class="col-6">Something2</div>
          </div>
          <div class="row">
            <div class="col-6">Something3</div>
            <div class="col-6">Something4</div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
