import React, { Component } from 'react';

class Kamiah extends Component {

    render() {

        let {manifest} = this.props

        console.log(this.props)

        if (manifest) {
            return (
              <div>{manifest}</div>
            )
        } else {
            return null
        }

    }
}

export default Kamiah;
