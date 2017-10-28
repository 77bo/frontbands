import React, {Component} from 'react';

import './PartScreenImage.css';

class PartScreenImage extends Component {

  render() {
    return (
      <div className="part-screen-image">
        {this.props.children}
      </div>
    );
  }
}

export default PartScreenImage;
