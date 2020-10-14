import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import OfferCard from '../offer-card/offer-card';
import offersProp from '../offer-list/offers.prop';


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
    const {offers, onOfferCardClick} = this.props;

    return (
      <div className="cities__places-list places__list tabs__content">
        {offers.map((offer) =>
          <OfferCard
            onOfferCardClick={onOfferCardClick}
            onHover={this._handleOfferHover}
            offer={offer}
            key={offer.id}
          />
        )}
      </div>
    );
  }
}


OfferList.propTypes = {
  offers: offersProp,
  onOfferCardClick: PropTypes.func.isRequired,
};


export default OfferList;
