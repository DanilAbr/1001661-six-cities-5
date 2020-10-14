import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import PropTypes from 'prop-types';
import offersProp from '../offer-list/offers.prop';
import reviewsProp from '../offer-screen/reviews.prop';


const App = (props) => {
  const {placesCount, offers, reviews} = props;

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render={({history}) => (
            <MainPage
              onOfferCardClick={(offer) =>
                history.push(`/offer/${offer.id}`)
              }
              offers={offers}
              placesCount={placesCount}
            />
          )}
        />
        <Route exact path="/login"
          render={({history}) => (
            <LoginScreen
              onLogoClick={() => {
                history.push(`/`);
              }}
            />
          )}
        />
        <Route exact path="/favorites"
          render={({history}) => (
            <FavoritesScreen
              onOfferCardClick={(offer) =>
                history.push(`/offer/${offer.id}`)
              }
              onLogoClick={() => {
                history.push(`/`);
              }}
              offers={offers}
            />
          )}
        />
        <Route exact path="/offer/:id?"
          render={({match, history}) => {
            const offer = offers.find((item) => item.id === match.params.id);
            return <OfferScreen
              onLogoClick={() => {
                history.push(`/`);
              }}
              reviews={reviews}
              offer={offer}
            />;
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  placesCount: PropTypes.number.isRequired,
  offers: offersProp,
  reviews: reviewsProp,
};


export default App;
