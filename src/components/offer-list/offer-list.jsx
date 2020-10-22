import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import {offerClasses} from '../../utils/const';
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

  _handleOfferClick(evt, offer) {
    evt.preventDefault();
    this.props.onOfferCardClick(offer);
  }

  render() {
    const {offers, type} = this.props;

    // const defaultOffers = offers;
    // let sortOffers = offers;
    //
    // switch (sortType) {
    //   case (`low`):
    //     console.log(sortType);
    //     console.log(`defaultOffers`, defaultOffers);
    //     sortOffers.sort((a, b) => a.price - b.price);
    //     break;
    //   case (`high`):
    //     console.log(sortType);
    //     sortOffers.sort((a, b) => b.price - a.price);
    //     break;
    //   default:
    //     console.log(sortType);
    //     sortOffers = defaultOffers;
    // }

    return (
      <div className={offerClasses[type].listWrap}>
        {offers.map((offer) =>
          <OfferCard
            key={offer.id}
            onOfferCardClick={(evt) => this._handleOfferClick(evt, offer)}
            onHover={this._handleOfferHover}
            offer={offer}
            type={type}
          />
        )}
      </div>
    );
  }
}


OfferList.propTypes = {
  offers: offersProp,
  onOfferCardClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};


export default OfferList;
