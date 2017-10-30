import React, {Component} from 'react';
import {
  Row, Col, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, CardLink
} from 'reactstrap';
import ReactPlayer from 'react-player';

import {formatDateRelatively, fullDateFormat} from 'services/momentService';

import './News.css';

class FeedItem extends Component {
  render() {
    const chooseFeedItemType = item => {
      let component;
      switch (item.type) {
        case 'link':
          component = <FeedItemLink item={item}/>;
          break;
        case 'video':
          component = <FeedItemVideo item={item} videoStartedPlaying={this.props.videoStartedPlaying}/>;
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
        <ReactPlayer width="100%" url={this.props.item.source}
                     onClick={this.handle}
                     playing={this.props.item.playing} controls
                     onPlay={() => {
                       this.props.item.playing = true;
                       this.props.videoStartedPlaying(this.props.item.id);
                     }}/>
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

export default FeedItem;