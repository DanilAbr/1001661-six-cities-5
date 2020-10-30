import React from 'react';
import PropTypes from 'prop-types';

import {OfferTypes} from '../../utils/const';
import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import offersProp from '../offer-list/offers.prop';
import {getUniqueCitiesOfOffers} from '../../utils/utils';
import {connect} from 'react-redux';
import {getOffers} from '../../store/reducers/data/selectors';


const FavoritesScreen = ({offers, onOfferCardClick}) => {
  const favoriteOffers = offers.filter((offer) => offer.isFavorite);

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {getUniqueCitiesOfOffers(favoriteOffers).map((city, index) =>
                <li className="favorites__locations-items" key={`city-${index}`}>
                  <div className="favorites__locations locations locations--current">
                    <div className="locations__item">
                      <a className="locations__item-link" href="#">
                        <span>{city}</span>
                      </a>
                    </div>
                  </div>
                  <OfferList
                    type={OfferTypes.FAVOURITE}
                    onOfferCardClick={onOfferCardClick}
                    offers={favoriteOffers.filter((offer) => offer.city.name === city)}
                  />
                </li>)}
            </ul>
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
};


FavoritesScreen.propTypes = {
  offers: offersProp,
  onOfferCardClick: PropTypes.func.isRequired,
};


const mapStateToProps = (state) => ({
  offers: getOffers(state),
});


export {FavoritesScreen};
export default connect(mapStateToProps)(FavoritesScreen);
