import React from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter, Route, Switch} from "react-router-dom";
import MainPage from '../main-page/main-page';
import LoginScreen from "../login-screen/login-screen";
import FavoritesScreen from "../favorites-screen/favorites-screen";
import OfferScreen from "../offer-screen/offer-screen";


const App = (props) => {
  const {placesCount, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path ="/">
          <MainPage placesCount={placesCount} />
        </Route>
        <Route exact path ="/login">
          <LoginScreen />
        </Route>
        <Route exact path ="/favorites">
          <FavoritesScreen />
        </Route>
        <Route exact path ="/offer/:id?" component={OfferScreen} />
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: PropTypes.arrayOf(PropTypes.shape({
    images: PropTypes.arrayOf(PropTypes.string.isRequired),
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isPremium: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    bedroomsCount: PropTypes.string.isRequired,
    maxAdults: PropTypes.string.isRequired,
    insideItems: PropTypes.arrayOf(PropTypes.string.isRequired),
    price: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isSuper: PropTypes.bool.isRequired,
    }).isRequired,
  })).isRequired,
  reviews: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    date: PropTypes.instanceOf(Date).isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
};


export default App;
