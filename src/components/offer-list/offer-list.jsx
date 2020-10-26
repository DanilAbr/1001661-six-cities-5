import React from 'react';
import PropTypes from 'prop-types';

import {offerClasses} from '../../utils/const';
import OfferCard from '../offer-card/offer-card';
import offersProp from '../offer-list/offers.prop';


const OfferList = ({onOfferHover, offers, type, onOfferCardClick}) => {
  const handleOfferClick = (evt, offer) => {
    evt.preventDefault();
    onOfferCardClick(offer);
  };

  return (
    <div className={offerClasses[type].listWrap}>
      {offers.map((offer) =>
        <OfferCard
          key={offer.id}
          onOfferCardClick={(evt) => handleOfferClick(evt, offer)}
          onHover={onOfferHover}
          offer={offer}
          type={type}
        />
      )}
    </div>
  );
};


OfferList.propTypes = {
  onOfferHover: PropTypes.func,
  offers: offersProp,
  onOfferCardClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};


export default OfferList;
