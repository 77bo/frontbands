import React, {Component} from 'react';

import Router from 'containers/Router';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import './App.css';

import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import uk from 'react-intl/locale-data/uk';
import localeData from 'assets/locales/data.json';

addLocaleData([...en, ...uk]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };

    this.changeLanguage = this.changeLanguage.bind(this);

    // Define user's language. Different browsers have the user locale defined
    // on different fields on the `navigator` object, so we make sure to account
    // for these different by checking all of them
    var language = (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;

    // Split locales with a region code
    const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

    // Try full locale, fallback to locale without region code, fallback to en
    var messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.uk;

    this.state.language = language;
    this.state.messages = messages;
  }

  changeLanguage(language) {
    console.debug('changed language', language);
    var messages = localeData[language] || localeData.uk;
    this.setState({
      languageProp: language,
      messages: messages
    });
  }

  render() {
    // setTimeout(function () {
    //   var languageProp = 'en';
    //   var messages = localeData[languageProp] || localeData.uk;
    //   console.log('here', messages);
    //   this.state.messages = messages;
    //   this.state.languageProp = languageProp;
    //   this.setState({languageProp: 'en'});
    // }.bind(this), 3000);
    return (
      <IntlProvider locale={this.state.language} key={this.state.languageProp} messages={this.state.messages}>
        <div className="App">
          <Header/>
          <Router location={this.props.location}/>
          <Footer changeLanguage={this.changeLanguage}/>
          <div>{this.state.language}</div>
          <div>{this.state.languageProp}</div>
        </div>
      </IntlProvider>
    );
  }
}

export default App;