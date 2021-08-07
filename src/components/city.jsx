/* eslint-disable react/prefer-stateless-function */



import React, { Component } from 'react';

class City extends Component {
  
  handleClick = () => {
    const { selectCity, index } = this.props;
    
    selectCity(index);

  //   selectFlat(index);
  //   console.log(selectFlat(index));
  // }
  }

  render() {
    return (
      <div>
        <h1 className={`${this.props.selectedCity ? 'active-city' : ''}`} onClick={this.handleClick}> 
          {this.props.name}</h1>
      </div>
    );
  }
}

export default City;
