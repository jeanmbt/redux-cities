import React from 'react';
import City from './city';

const CityList = (props) => {
  const renderList = () => {
    return props.cities.map((city, index) => {
      return (
        <City
          name={city.name}
          address={city.name}
          slug={city.slug}
          key={city.name}
          selectCity={props.selectCity}
          selected={city.name === props.selectedCity.name}
          index={index}
        />
      );
    });
  };

  return (
    <div className="">
      {renderList()}
    </div>
  );
};


export default CityList;
