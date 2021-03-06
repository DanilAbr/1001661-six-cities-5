import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {offerClasses} from '../../utils/const';
import {resetCard, selectCard} from '../../store/action';
import offerProp from './offer.prop';


const OfferCard = (props) => {
  const {offer, onOfferCardClick, type, onCardHover, onCardDeHover} = props;
  const isFavorites = type === `isFavorites`;

  return (
    <article
      className={offerClasses[type].article}
      onMouseEnter={() => onCardHover(offer.id)}
      onMouseLeave={() => onCardDeHover()}
      onClick={onOfferCardClick}
    >
      {!isFavorites && offer.isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      }
      <div className={offerClasses[type].imageWrap}>
        <a href="#">
          <img
            className="place-card__image"
            src={offer.images[0]}
            width={isFavorites ? `150` : `260`}
            height={isFavorites ? `110` : `150`}
            alt="Place image"
          />
        </a>
      </div>
      <div className={offerClasses[type].infoWrap}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{offer.price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={offerClasses[type].button}
            type="button"
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"/>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: offer.rating * 20 + `%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{offer.title}</a>
        </h2>
        <p className="place-card__type">{offer.type}</p>
      </div>
    </article>
  );
};


OfferCard.propTypes = {
  offer: offerProp,
  onOfferCardClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  onCardHover: PropTypes.func.isRequired,
  onCardDeHover: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch) => ({
  onCardHover: (cardId) => {
    dispatch(selectCard(cardId));
  },
  onCardDeHover: () => {
    dispatch(resetCard());
  },
});


export {OfferCard};
export default connect(null, mapDispatchToProps)(OfferCard);
