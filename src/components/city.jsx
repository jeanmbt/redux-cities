/* eslint-disable react/prefer-stateless-function */



import React, { Component } from 'react';

class City extends Component {
  
  // handleClick = () => {
  //   const { selectFlat, index } = this.props;

  //   selectFlat(index);
  //   console.log(selectFlat(index));
  // }

  render() {
    return (
      <div>
        <h1 className={`${this.props.selectedCity ? 'active-city' : ''}`} >{this.props.name}</h1>
      </div>
    );
  }
}

export default City;
