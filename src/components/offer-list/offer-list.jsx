import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

import OfferCard from '../offer-card/offer-card';
import offersProp from '../offer-list/offers.prop';
import {offerClasses} from '../../utils/const';


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
    const {offers, isFavorites, isDetail} = this.props;

    const type = isFavorites ? `isFavorites` : `${isDetail ? `isDetail` : `isMain`}`;

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
  isFavorites: PropTypes.bool,
  isDetail: PropTypes.bool,
  isMain: PropTypes.bool,
};


export default OfferList;
