import React, { Component } from 'react';

import Character from "./Character";
import Plot from "./Plot";

class Setting extends Component {

  paintPlots = (annotations, label, image) => {
    let plots = annotations[0].items
    return plots.map((item) => {
      return (
        <Plot label={label} image={image} annotation={item} />
      )
    })
  }

  render() {

    let label = this.props.data.label.en[0]
    let summary = this.props.data.summary.en[0]
    let requiredStatement = this.props.data.requiredStatement
    let image = this.props.data.items[0].items[0].items[0].body[0].service['@id']

    if (this.props.data.items[0].annotations) {
      return (
        <div>
          <Character label={label} summary={summary} image={image} requiredStatement={requiredStatement} />
          {this.paintPlots(this.props.data.items[0].annotations, label, image)}
        </div>
      )
    } else {
      return null
    }

  }
}

export default Setting;
