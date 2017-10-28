import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink
} from 'reactstrap';
import ReactPlayer from 'react-player';
import moment from 'moment';
import axios from 'axios';

import PartScreenImage from 'components/PartScreenImage/PartScreenImage';

import './News.css';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: []
    };
  }

  componentDidMount() {
    var url = 'http://localhost:3001/api/feed';
    axios.get(url, {
      params: {
        fields: [
          'id', 'type', 'story', 'full_picture', 'message',
          'link', 'name', 'permalink_url', 'place', 'source',
          'created_time', 'description', 'shares', 'caption'
        ]
      }
    }).then(function (response) {
      console.debug(response.data, this);
      this.setState({feed: response.data.data});
    }.bind(this)).catch(function (error) {
      console.error(error.response.data);
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
          {
            this.state.feed.map(feedItem => (
              <Row className="feed-item">
                <Col sm="6" md={{size: 6, offset: 3}}>
                  <FeedItem item={feedItem}/>
                </Col>
              </Row>
            ))
          }
        </Container>
      </span>
    );
  }
}

class FeedItem extends Component {
  render() {
    const choose = item => {
      let component;
      switch (item.type) {
        case 'link':
          component = <FeedItemLink item={item} />
          break;
        case 'video':
          component = <FeedItemVideo item={item} />
          break;
        case 'photo':
          // show photo items only with url for them
          if (item.permalink_url && item.message) {
            component = <FeedItemPhoto item={item} />
          }
          break;
        case 'event':
          component = <FeedItemEvent item={item} />
          break;
        case 'status':
          // no need to show status without any message
          if (item.message) {
            component = <FeedItemStatus item={item} />
          }
          break;
        default:
          // component = <FeedItemDefault item={item} />
      }

      return component;
    };

    return (
      <div>
        {choose(this.props.item)}
      </div>
    );
  }
}

class FeedItemLink extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.item.name || this.props.item.story}</CardTitle>
          <CardSubtitle>
            <CardLink target="_blank" href={this.props.item.permalink_url}>
              {moment(this.props.item.created_time).startOf('hour').fromNow()}
            </CardLink>
          </CardSubtitle>
        </CardBody>
        {this.props.item.message && <CardBody>
          <CardText>{this.props.item.message}</CardText>
        </CardBody>}
        <img width="100%" src={this.props.item.full_picture}/>
      </Card>
    );
  }
}

class FeedItemVideo extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.item.name || this.props.item.story}</CardTitle>
          <CardSubtitle>
            <CardLink target="_blank" href={this.props.item.permalink_url}>
              {moment(this.props.item.created_time).startOf('hour').fromNow()}
            </CardLink>
          </CardSubtitle>
        </CardBody>
        {this.props.item.message && <CardBody>
          <CardText>{this.props.item.message}</CardText>
        </CardBody>}
        <ReactPlayer width="100%" url={this.props.item.source} controls />
      </Card>
    );
  }
}

class FeedItemPhoto extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.item.story}</CardTitle>
          <CardSubtitle>
            <CardLink target="_blank" href={this.props.item.permalink_url}>
              {moment(this.props.item.created_time).startOf('hour').fromNow()}
            </CardLink>
          </CardSubtitle>
        </CardBody>
        {this.props.item.message && <CardBody>
          <CardText>{this.props.item.message}</CardText>
        </CardBody>}
        <img width="100%" src={this.props.item.full_picture}/>
      </Card>
    );
  }
}

class FeedItemEvent extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.item.story}</CardTitle>
          <CardSubtitle>
            <CardLink target="_blank" href={this.props.item.permalink_url}>
              {moment(this.props.item.created_time).startOf('hour').fromNow()}
            </CardLink>
          </CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText>{this.props.item.name}</CardText>
        </CardBody>
        <img width="100%" src={this.props.item.full_picture}/>
      </Card>
    );
  }
}

class FeedItemStatus extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.item.story}</CardTitle>
          <CardSubtitle>
            <CardLink target="_blank" href={this.props.item.permalink_url}>
              {moment(this.props.item.created_time).startOf('hour').fromNow()}
            </CardLink>
          </CardSubtitle>
        </CardBody>
        {this.props.item.message && <CardBody>
          <CardText>{this.props.item.message}</CardText>
        </CardBody>}
        <img width="100%" src={this.props.item.full_picture}/>
      </Card>
    );
  }
}


export default News;