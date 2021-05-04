import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';

class Character extends Component {

  render() {

    const full = this.props.image + '/full/!750,750/0/default.jpg'
    const preview = this.props.image + '/full/!50,50/0/default.jpg'

    console.log(this.props.requiredStatement)

    return (
      <figure className="exposition-plot">
        <div className="exposition-plot--strip">
          <figcaption>
            <strong>{this.props.label}</strong>
            <p>{this.props.summary}</p>
            <em>{this.props.requiredStatement.label.en[0]}: {this.props.requiredStatement.value.en[0]}</em>
          </figcaption>
        </div>
        <div className="exposition-plot--canvas">
          <LazyLoad>
            <img alt={this.props.label} src={full} />
          </LazyLoad>
          <span style={{
            backgroundImage: `url(${preview})`
          }}></span>
        </div>
      </figure>
    )

  }
}

export default Character;
