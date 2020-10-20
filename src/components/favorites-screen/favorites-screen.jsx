import React from 'react';
import PropTypes from 'prop-types';

import OfferList from '../offer-list/offer-list';
import Header from '../header/header';
import offersProp from '../offer-list/offers.prop';


const FavoritesScreen = ({offers, onOfferCardClick, onLogoClick}) => {
  return (
    <div className="page">
      <Header
        onLogoClick={onLogoClick}
      />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Amsterdam</span>
                    </a>
                  </div>
                </div>
                <OfferList
                  isFavorites={true}
                  onOfferCardClick={onOfferCardClick}
                  offers={offers}
                />
              </li>

              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="#">
                      <span>Cologne</span>
                    </a>
                  </div>
                </div>
                <OfferList
                  isFavorites={true}
                  onOfferCardClick={onOfferCardClick}
                  offers={offers}
                />
              </li>
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
  onLogoClick: PropTypes.func.isRequired,
};


export default FavoritesScreen;
