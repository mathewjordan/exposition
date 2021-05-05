import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class Plot extends Component {

  getRegion = (uri) => {
    let result = uri.split('#xywh=')
    return result[1]
  }

  render() {

    let region = this.getRegion(this.props.annotation.target)

    const full = this.props.image + '/' + region + '/!750,750/0/default.jpg'

    return (
      <figure className="exposition-plot">
        <div className="exposition-plot--strip">
          <figcaption>
            {this.props.annotation.body.value}
          </figcaption>
        </div>
        <div className="exposition-plot--canvas">
          <LazyLoad>
              <img alt={this.props.label} src={full} />
          </LazyLoad>
        </div>
      </figure>
    )

  }
}

export default Plot;
