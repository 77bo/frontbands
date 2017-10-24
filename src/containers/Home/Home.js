import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row text-center">
            <FormattedMessage id="page.title"/>
            <div className="col-6"><img width="200" src="https://www.gitbook.com/cover/book/mongkuen/react.jpg?build=1470682429235" /></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;