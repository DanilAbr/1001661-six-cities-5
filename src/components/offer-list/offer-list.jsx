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

  _handleOfferClick(evt, offer) {
    evt.preventDefault();
    this.props.onOfferCardClick(offer);
  }

  render() {
    const {
      offers,
      isFavorites,
      isDetail,
      isMain
    } = this.props;

    return (
      <div
        className={
          isFavorites
            ? `favorites__places`
            : `${isDetail
              ? `near-places__list`
              : `cities__places-list tabs__content`}
            places__list`
        }
      >
        {offers.map((offer) =>
          <OfferCard
            key={offer.id}
            onOfferCardClick={(evt) => this._handleOfferClick(evt, offer)}
            onHover={this._handleOfferHover}
            offer={offer}
            isFavorites={isFavorites}
            isMain={isMain}
            isDetail={isDetail}
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
