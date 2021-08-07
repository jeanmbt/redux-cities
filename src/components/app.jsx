import React, { Component } from 'react';

import cities from '../../data/cities';

import CityList from './city_list';
import ActiveCity from './active_city';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCity: cities[0],
      citiesList: cities
    };
  }

  selectCity = (index) => {
    return (
      this.setState({ selectedCity: cities[index] })
    );
  }
  render() {
    
    return (
      <div className="app">
        <div className="city-list">
          <CityList
            cities={cities}
            selectedCity={this.state.selectedCity}
            selectCity={this.selectCity}
          />
        </div>
        <div className="active-city">
          <ActiveCity
            selectedCity={this.state.selectedCity}
          />
        </div>
      </div>
    );
  }
}

export default App;
