import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import offersProp from '../offer-list/offers.prop';
import OfferCard from '../offer-card/offer-card';


class FavoritesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {activeOffer: null};

    this._handleOfferHover = this._handleOfferHover.bind(this);
  }

  _handleOfferHover(id) {
    this.setState({activeOffer: id});
  }

  render() {
    const {offers, onOfferCardClick} = this.props;

    return (
      <div className="favorites__places">
        {offers.map((offer) =>
          <OfferCard
            onOfferCardClick={onOfferCardClick}
            onHover={this._handleOfferHover}
            isFavorites={true}
            offer={offer}
            key={offer.id}
          />
        )}
      </div>
    );
  }
};


FavoritesList.propTypes = {
  offers: offersProp,
  onOfferCardClick: PropTypes.func.isRequired,
  isFavorites: PropTypes.bool,
};


export default FavoritesList;
