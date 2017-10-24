import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';

import {Jumbotron, Button} from 'reactstrap';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <Jumbotron>
            <h1 className="display-3"><FormattedMessage id="page.home.title"/></h1>
            <p className="lead"><FormattedMessage id="page.home.description"
                                                  defaultMessage="Він використовує кластери утиліт для тиграфіфікації та інтервалу міжсторінкового вмісту всередині великого контейнера."/>
            </p>
            <hr className="my-2"/>
            <p><FormattedMessage id="page.home.description2"
                                 defaultMessage="Він використовує кластери утиліт для тиграфіфікації та інтервалу міжсторінкового вмісту всередині великого контейнера."/>
            </p>
            <p className="lead">
              <Button color="primary"><FormattedMessage id="page.home.learnMore"
                                                        defaultMessage="Дізнатися більше"/></Button>
            </p>
          </Jumbotron>
          <div className="row text-center">
            <div className="col-6"><img width="200"
                                        src="https://www.gitbook.com/cover/book/mongkuen/react.jpg?build=1470682429235"/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;