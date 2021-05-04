import React, { Component } from 'react';
import Setting from "./components/Setting";

class Exposition extends Component {

    constructor(props) {
        super(props);

        this.state ={
            data: null
        }
    }

    getManifest = (uri) => {
        fetch(uri, {
            headers : {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
          .then(response => response.json())
          .then(data => {
              this.setState({
                  data
              });
          })
          .catch(err => console.error(this.props.url, err.toString()));

        return null
    }

    componentDidMount() {
        this.getManifest(this.props.manifest)
    }

    render() {

        if (this.state.data) {
            return <Setting data={this.state.data} />
        } else {
            return null
        }

    }
}

export default Exposition;
