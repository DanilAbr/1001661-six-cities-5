import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PropTypes from 'prop-types';

import MainPage from '../main-page/main-page';
import LoginScreen from '../login-screen/login-screen';
import FavoritesScreen from '../favorites-screen/favorites-screen';
import OfferScreen from '../offer-screen/offer-screen';
import offersProp from '../offer-list/offers.prop';
import reviewsProp from '../review/review.prop';
import {connect} from 'react-redux';
import PrivateRoute from '../private-route/private-route';
import {getOffers} from '../../store/reducers/data/selectors';


const App = ({offers, reviews}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={({history}) =>
            <MainPage
              onOfferCardClick={(offer) =>
                history.push(`/offer/${offer.id}`)}
            />
          }
        />
        <Route
          exact
          path={`/login`}
          render={() => <LoginScreen />}
        />
        <PrivateRoute
          exact
          path={`/favorites`}
          render={({history}) =>
            <FavoritesScreen
              onOfferCardClick={(offer) =>
                history.push(`/offer/${offer.id}`)}
            />
          }
        />
        <Route
          exact
          path="/offer/:id?"
          render={({match, history}) => {

            const offer = offers.find((item) => item.id === +match.params.id);

            return (
              <OfferScreen
                offer={offer}
                reviews={reviews}
                onOfferCardClick={(currentOffer) =>
                  history.push(`/offer/${currentOffer.id}`)}
              />
            );
          }}
        />
      </Switch>
    </BrowserRouter>
  );
};


App.propTypes = {
  offers: offersProp,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
};

const mapStateToProps = (state) => ({
  offers: getOffers(state),
});


export {App};
export default connect(mapStateToProps)(App);
