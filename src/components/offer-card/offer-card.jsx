import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import offerProp from './offer.prop';
import {offerClasses} from "../../utils/const";


class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, onHover, onOfferCardClick, type} = this.props;
    const isFavorites = type === `isFavorites`;

    return (
      <article
        className={offerClasses[type].article}
        onMouseEnter={() => {
          onHover(offer.id);
        }}
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
  }
}

OfferCard.propTypes = {
  offer: offerProp,
  onOfferCardClick: PropTypes.func.isRequired,
  onHover: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};


export default OfferCard;
