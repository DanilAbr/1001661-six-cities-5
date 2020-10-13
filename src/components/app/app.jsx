import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import PropTypes from 'prop-types';


const App = (props) => {
  const {placesCount, offers, reviews} = props;
  const offer = offers[0];

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <MainPage
              onOfferCardClick={(evt) => {
                evt.preventDefault();
                history.push(`/offer`);
              }}
              offers={offers}
              placesCount={placesCount}
            />
          )}
        />
        <Route exact path="/login"
          render={() => (
            <LoginScreen />
          )}
        />
        <Route exact path="/favorites"
          render={() => (
            <FavoritesScreen
              offers={offers}
            />
          )}
        />
        <Route exact path="/offer/:id?"
          render={() => (
            <OfferScreen
              reviews={reviews}
              offer={offer}
            />
          )}
        />
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.array.isRequired,
  reviews: PropTypes.array.isRequired,
};


export default App;
