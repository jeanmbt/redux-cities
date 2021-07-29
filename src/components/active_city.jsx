import React, { Component } from 'react';

class ActiveCity extends Component {
  
  // handleClick = () => {
  //   const { selectFlat, index } = this.props;

  //   selectFlat(index);
  //   console.log(selectFlat(index));
  // }

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