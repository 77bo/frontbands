import React, {Component} from 'react';
import {FormattedMessage} from 'react-intl';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink, Button
} from 'reactstrap';
import ReactPlayer from 'react-player';
import axios from 'axios';

import PartScreenImage from 'components/PartScreenImage/PartScreenImage';
import {formatDateRelatively, fullDateFormat} from 'services/momentService';

import './News.css';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
      hasNext: null
    };
    this.load.bind(this);
  }

  componentDidMount() {
    this.load();
  }

  load() {
    var url = process.env.API_ROOT + '/feed';
    axios.get(url, {
      params: {
        fields: [
          'id', 'type', 'story', 'full_picture', 'message',
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
        hasNext: response.data.next
      });
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
              <FeedItem key={feedItem.id} item={feedItem}/>
            ))
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

class FeedItem extends Component {
  render() {
    const chooseFeedItemType = item => {
      let component;
      switch (item.type) {
        case 'link':
          component = <FeedItemLink item={item}/>;
          break;
        case 'video':
          component = <FeedItemVideo item={item}/>;
          break;
        case 'photo':
          // show photo items only with url&message for them
          if (item.permalink_url && item.message) {
            component = <FeedItemPhoto item={item}/>;
          }
          break;
        case 'event':
          component = <FeedItemEvent item={item}/>;
          break;
        case 'status':
          // no need to show status without any message
          if (item.message) {
            component = <FeedItemStatus item={item}/>;
          }
          break;
        default:
        // component = <FeedItemDefault item={item} />
      }

      let wrap = null;
      if (component) {
        wrap = (
          <Row className="feed-item">
            <Col sm="6" md={{size: 6, offset: 3}}>
              {component}
            </Col>
          </Row>
        );
      }

      return wrap;
    };

    return (chooseFeedItemType(this.props.item));
  }
}

class FeedItemLink extends Component {
  render() {
    return (
      <Card>
        <CardBody>
          <CardTitle>{this.props.item.name || this.props.item.story}</CardTitle>
          <CardSubtitle>
            <CardLink title={fullDateFormat(this.props.item.created_time)} className="text-muted"
                      target="_blank" href={this.props.item.permalink_url}>
              {formatDateRelatively(this.props.item.created_time)}
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
            <CardLink title={fullDateFormat(this.props.item.created_time)} className="text-muted"
                      target="_blank" href={this.props.item.permalink_url}>
              {formatDateRelatively(this.props.item.created_time)}
            </CardLink>
          </CardSubtitle>
        </CardBody>
        {this.props.item.message && <CardBody>
          <CardText>{this.props.item.message}</CardText>
        </CardBody>}
        <ReactPlayer width="100%" url={this.props.item.source} controls/>
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
            <CardLink title={fullDateFormat(this.props.item.created_time)} className="text-muted"
                      target="_blank" href={this.props.item.permalink_url}>
              {formatDateRelatively(this.props.item.created_time)}
            </CardLink>
          </CardSubtitle>
        </CardBody>
        {this.props.item.message && <CardBody>
          <CardText>{this.props.item.message}</CardText>
        </CardBody>}
        <CardImg width="100%" src={this.props.item.full_picture}/>
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
            <CardLink title={fullDateFormat(this.props.item.created_time)} className="text-muted"
                      target="_blank" href={this.props.item.permalink_url}>
              {formatDateRelatively(this.props.item.created_time)}
            </CardLink>
          </CardSubtitle>
        </CardBody>
        <CardBody>
          <CardText>{this.props.item.name}</CardText>
        </CardBody>
        <CardImg width="100%" src={this.props.item.full_picture}/>
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
            <CardLink title={fullDateFormat(this.props.item.created_time)} className="text-muted"
                      target="_blank" href={this.props.item.permalink_url}>
              {formatDateRelatively(this.props.item.created_time)}
            </CardLink>
          </CardSubtitle>
        </CardBody>
        {this.props.item.message && <CardBody>
          <CardText>{this.props.item.message}</CardText>
        </CardBody>}
        <CardImg width="100%" src={this.props.item.full_picture}/>
      </Card>
    );
  }
}


export default News;