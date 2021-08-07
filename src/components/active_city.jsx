import React, { Component } from 'react';

/* eslint-disable react/prefer-stateless-function */
class ActiveCity extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.selectedCity.name}</h1>
        <h3>{this.props.selectedCity.address}</h3>
      </div>
    );
  }
}

export default ActiveCity;