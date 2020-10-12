import React from 'react';
import PropTypes from "prop-types";
import FavoritesCard from "../favorites-card/favorites-card";


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
  offers: PropTypes.array.isRequired,
};


export default FavoritesList;
