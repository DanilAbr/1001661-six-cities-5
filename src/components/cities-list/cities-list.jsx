import React from 'react';
import PropTypes from 'prop-types';


const CitiesList = ({cities, currentCity, onCityClick}) => {
  return (
    <ul className="locations__list tabs__list">
      {cities.map((city, index) => (
        <li
          className="locations__item"
          key={`city-${index}`}
        >
          <a
            onClick={(evt) => {
              evt.preventDefault();
              onCityClick(city);
            }}
            className={`locations__item-link tabs__item${city === currentCity ? ` tabs__item--active` : ``}`}
            href="#"
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};


CitiesList.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onCityClick: PropTypes.func,
  currentCity: PropTypes.string.isRequired,
};


export default CitiesList;
