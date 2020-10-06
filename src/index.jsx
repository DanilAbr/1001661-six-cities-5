import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';


const Setting = {
  PLACES_COUNT: 312
};


ReactDOM.render(
    <App
      offers={offers}
      reviews={reviews}
      placesCount={Setting.PLACES_COUNT}
    />,
    document.querySelector(`#root`)
);
