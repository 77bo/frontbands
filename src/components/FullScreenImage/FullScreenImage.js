import React, {Component} from 'react';

import './FullScreenImage.css';

class FullScreenImage extends Component {

  render() {
    return (
      <div className="full-screen-image">
        {/*<img width="100%" height="650" src="https://scontent.flwo1-1.fna.fbcdn.net/v/t31.0-8/22384305_180644519166709_327821446252910341_o.jpg?oh=13aec68ac241522f4c16cccc5e9d4110&oe=5A6647BD" />*/}
        {this.props.children}
      </div>
    );
  }
}

export default FullScreenImage;
