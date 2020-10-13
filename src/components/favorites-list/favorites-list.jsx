import React from 'react';
import FavoritesCard from '../favorites-card/favorites-card';
import offersProp from '../offer-list/offers.prop';


const FavoritesList = (props) => {
  const {offers} = props;

  return (
    <div className="favorites__places">
      {offers.map((offer) =>
        <FavoritesCard
          offer={offer}
          key={offer.id}
        />
      )}
    </div>
  );
};


FavoritesList.propTypes = {
  offers: offersProp,
};


export default FavoritesList;
