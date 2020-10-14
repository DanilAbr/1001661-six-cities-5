import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import offerProp from './offer.prop';


class OfferCard extends PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {offer, onHover, onOfferCardClick, isFavorites} = this.props;

    return (
      <article
        onMouseEnter={() => {
          onHover(offer.id);
        }}
        onClick={onOfferCardClick}
        className={`${isFavorites ? `favorites__card` : `cities__place-card`} place-card`}
      >
        {!isFavorites && offer.isPremium &&
          <div className="place-card__mark">
            <span>Premium</span>
          </div>
        }
        <div className={`${isFavorites ? `favorites__image-wrapper` : `cities__image-wrapper`} place-card__image-wrapper`}>
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
        <div className={`${isFavorites ? `favorites-card__info` : ``} place-card__info`}>
          <div className="place-card__price-wrapper">
            <div className="place-card__price">
              <b className="place-card__price-value">&euro;{offer.price}</b>
              <span className="place-card__price-text">&#47;&nbsp;night</span>
            </div>
            <button
              className={`place-card__bookmark-button${isFavorites ? `--active` : ``} button`}
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
  isFavorites: PropTypes.bool,
};


export default OfferCard;
