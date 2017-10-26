import React, {Component} from 'react';

import Router from 'containers/Router';
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';

import './App.css';

import {addLocaleData, IntlProvider} from 'react-intl';
import en from 'react-intl/locale-data/en';
import uk from 'react-intl/locale-data/uk';
import translations_en from 'assets/locales/en/translations.json';
import translations_en_UA from 'assets/locales/en_UA/translations.json';
import translations_uk_UA from 'assets/locales/uk_UA/translations.json';

const translationsData = {
  en: translations_en,
  en_UA: translations_en_UA,
  uk_UA: translations_uk_UA
};

// init locales
addLocaleData([...en, ...uk]);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };

    this.changeLanguage = this.changeLanguage.bind(this);
    this.loadTranslations.bind(this);

    this.loadTranslations();
  }

  loadTranslations() {
    const supportedLanguages = ['uk', 'en'];

    // Define user's language. Different browsers have the user locale defined
    // on different fields on the `navigator` object, so we make sure to account
    // for these different by checking all of them
    let previouslyChosenLanguage = localStorage.getItem('app_selected_language');
    var language = previouslyChosenLanguage || (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage;

    if (!language || !~supportedLanguages.indexOf(language)) {
      language = 'uk';
    }

    // Split locales with a region code
    const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

    // Try full locale, fallback to locale without region code, fallback to en
    var messages = translationsData[language] || translationsData[languageWithoutRegionCode]
      || translationsData.uk_UA;

    this.state.language = language;
    this.state.messages = messages;
  }

  changeLanguage(language) {
    var messages = translationsData[language] || translationsData.uk_UA;
    // store selected language for cases when user refreshes a page
    localStorage.setItem('app_selected_language', language);
    this.setState({
      languageProp: language,
      messages: messages
    });
  }

  render() {
    return (
      <IntlProvider locale={this.state.language} key={this.state.languageProp} messages={this.state.messages}>
        <div className="App">
          <Header changeLanguage={this.changeLanguage}/>
          <Router location={this.props.location}/>
          <Footer/>
        </div>
      </IntlProvider>
    );
  }
}

export default App;