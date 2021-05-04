import React, { Component } from 'react';
import Plot from "./Plot";

class Setting extends Component {

  paintPlots = (annotations) => {
    let plots = annotations[0].items
    return plots.map((item) => {
      return (
        <Plot text={item.body.value} />
      )
    })
  }

  render() {

    if (this.props.data.items[0].annotations) {
      return <div>{this.paintPlots(this.props.data.items[0].annotations)}</div>
    } else {
      return null
    }

  }
}

export default Setting;
