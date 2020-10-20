import React from 'react';
import {CITIES} from '../../utils/const';

const CitiesList = () => {
  return (
    <ul className="locations__list tabs__list">
      {CITIES.map((city, index) => (
        <li
          className="locations__item"
          key={`city-${index}`}
        >
          <a
            className={`locations__item-link tabs__item${index === 0 ? `--active` : ``}`}
            href="#"
          >
            <span>{city}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};


export default CitiesList;
