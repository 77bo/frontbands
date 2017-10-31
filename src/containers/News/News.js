import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {
  Container, Row, Col, Button
} from 'reactstrap';
import Spinner from 'react-spinkit';
import axios from 'axios';
import _ from 'lodash';

import PartScreenImage from 'components/PartScreenImage/PartScreenImage';
import FeedItem from 'containers/News/FeedItem';

import './News.css';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      hasNext: null,
      loading: true
    };
    this.videoStartedPlaying = this.videoStartedPlaying.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  load() {
    var url = process.env.REACT_APP_API_ROOT + '/feed';
    axios.get(url, {
      params: {
        fields: [
          'id', 'type', 'story', 'full_picture', 'attachments', 'message',
          'link', 'name', 'permalink_url', 'place', 'source',
          'created_time', 'description', 'shares', 'caption'
        ],
        locale: localStorage.getItem('app_selected_language'),
        next: this.state.hasNext
      },
      withCredentials: true
    }).then(function (response) {
      let feed = response.data.data;
      feed = this.state.feed.concat(feed);
      this.setState({
        feed: feed,
        hasNext: response.data.next,
        loading: false
      });
    }.bind(this)).catch(function (error) {
      console.error(error.response.data);
    });
  }

  // if user started new video all others should be stopped.
  videoStartedPlaying(feedItemId) {
    // filtering all feedItemVideos except one which user started last.
    // TODO user findIndex instead of map.
    let feed = this.state.feed.map(o => {
      if (o.playing && o.id !== feedItemId) {
        o.playing = false;
      }
      return o;
    });
    this.setState({
      feed: feed
    });
  }

  render() {
    return (
      <span>
        <PartScreenImage>
          <Container className="header-padding">
            <Row>
              <Col className="text-center news-heading">
                <h1 className="display-4"><FormattedMessage id="page.news.title" defaultMessage="Новини"/></h1>
                <p className="lead">
                  <FormattedMessage id="page.news.lead" defaultMessage="Найсвіжіше про життя нашого гурту."/>
                </p>
              </Col>
            </Row>
          </Container>
        </PartScreenImage>
        <Container className="container-padding">
          {this.state.loading && <Spinner className="center-spinner" name="line-scale" fadeIn="half" color="#6c757d" />}
          {
            this.state.feed.map(feedItem => {
              return (
                  <FeedItem key={feedItem.id} item={feedItem} videoStartedPlaying={this.videoStartedPlaying}/>
                );
              })
          }
          {this.state.hasNext &&
          <Row className="feed-item text-center">
            <Col sm="6" md={{size: 6, offset: 3}}>
              <Button outline color="primary" size="md" onClick={() => this.load(this.state.hasNext)}>
                <FormattedMessage id="page.news.button.hasNext" defaultMessage='Завантажити ще'/>
              </Button>
            </Col>
          </Row>
          }
        </Container>
      </span>
    );
  }
}

export default News;