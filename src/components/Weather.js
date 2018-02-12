import React, {Component} from 'react'

export default class Weather extends Component {
  render() {
    return (
      <div>
        { this.props.city && this.props.country && <p>Location: {this.props.city}, {this.props.country}</p> }
        <p>Tempetaure: {this.props.temperature}</p>
        <p>Humidity: {this.props.humidity}</p>
        <p>Conditions: {this.props.description}</p>
      </div>
    );
  }
}
