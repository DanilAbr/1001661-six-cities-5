import React from 'react';
import PropTypes from 'prop-types';

import NewReview from '../new-review/new-review';
import Header from '../header/header';
import ReviewList from '../review-list/review-list';
import Map from '../map/map';
import OfferList from "../offer-list/offer-list";
import offerProp from '../offer-card/offer.prop';
import reviewsProp from '../review/review.prop';
import offers from '../../mocks/offers';


const OfferScreen = (props) => {
  const {offer, reviews, onLogoClick, onOfferCardClick} = props;
  const nearOffers = offers.slice(0, 3);

  return (
    <div className="page">
      <Header
        onLogoClick={onLogoClick}
      />

      <main className="page__main page__main--property">
        <section className="property">
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {offer.images.map((image, index) =>
                <div key={`${index}-${image}`} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Photo studio"/>
                </div>
              )}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {offer.isPremium &&
                <div className="property__mark">
                  <span>Premium</span>
                </div>
              }
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {offer.title}
                </h1>
                <button className="property__bookmark-button button" type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"/>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: offer.rating * 20 + `%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{offer.rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {offer.type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {offer.bedroomsCount} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {offer.maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{offer.price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {offer.insideItems.map((insideItem, index) =>
                    <li
                      key={`${insideItem}-${index}`}
                      className="property__inside-item"
                    >
                      {insideItem}
                    </li>
                  )}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={offer.owner.avatar} width="74" height="74" alt="Host avatar"/>
                  </div>
                  <span className="property__user-name">
                    {offer.owner.name}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {offer.description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
                <ReviewList reviews={reviews} />
                <NewReview />
              </section>
            </div>
          </div>
          <Map
            className={`property`}
            offers={nearOffers}
          />
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OfferList
              isDetail={true}
              onOfferCardClick={onOfferCardClick}
              offers={nearOffers}
            />
          </section>
        </div>
      </main>
    </div>
  );
};


OfferScreen.propTypes = {
  offer: offerProp,
  reviews: PropTypes.arrayOf(reviewsProp).isRequired,
  onLogoClick: PropTypes.func.isRequired,
  onOfferCardClick: PropTypes.func.isRequired,
};


export default OfferScreen;
