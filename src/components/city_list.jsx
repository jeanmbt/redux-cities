import React from 'react';
import City from './city';

const CityList = (props) => {
  const renderList = () => {
    return props.cities.map((city) => {
      return (
        <City
          name={city.name}
          address={city.name}
          slug={city.slug}
          key={city.name}
        />
      );
    });
  };

  return (
    <div className="cities">
      {renderList()}
    </div>
  );
};


export default CityList;