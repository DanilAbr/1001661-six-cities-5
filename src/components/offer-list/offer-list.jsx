import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import offersProp from '../offer-list/offers.prop';
import OfferCard from '../offer-card/offer-card';


class OfferList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeOffer: null};

    this._handleOfferHover = this._handleOfferHover.bind(this);
  }

  _handleOfferHover(id) {
    this.setState({activeOffer: id});
  }

  render() {
    const {offers, onOfferCardClick, isFavorites} = this.props;

    return (
      <div className={isFavorites ? `favorites__places` : `cities__places-list places__list tabs__content`}>
        {offers.map((offer) =>
          <OfferCard
            key={offer.id}
            onOfferCardClick={onOfferCardClick}
            onHover={this._handleOfferHover}
            isFavorites={isFavorites}
            offer={offer}
          />
        )}
      </div>
    );
  }
}


OfferList.propTypes = {
  offers: offersProp,
  onOfferCardClick: PropTypes.func.isRequired,
  isFavorites: PropTypes.bool,
};


export default OfferList;
