import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {OfferTypes} from '../../utils/const';
import {changeCity, getOffers} from '../../store/action';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import CitiesList from '../cities-list/cities-list';
import OfferList from '../offer-list/offer-list';
import Sort from '../sort/sort';
import offersProp from '../offer-list/offers.prop';
import withSort from '../../hocks/with-sort';
import withOfferList from '../../hocks/with-offer-list';
import MainEmpty from '../main-empty/main-empty';

const SortWrapped = withSort(Sort);
const OfferListWrapped = withOfferList(OfferList);


const MainPage = (props) => {
  const {
    offers,
    onOfferCardClick,
    cities,
    currentCity,
    onCityClick,
    sortType,
  } = props;

  return (
    <div className="page page--gray page--main">
      <Header type={OfferTypes.MAIN} />

      <main className={`page__main page__main--index${!offers.length ? ` page__main--index-empty` : ``}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <CitiesList
              onCityClick={onCityClick}
              currentCity={currentCity}
              cities={cities}
            />
          </section>
        </div>
        <div className="cities">
          <div className={`cities__places-container${!offers.length ? ` cities__places-container--empty` : ``} container`}>
            {offers.length
              ? <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">
                  {offers.length} places to stay in {currentCity}
                </b>
                <SortWrapped />
                <OfferListWrapped
                  sortType={sortType}
                  type={OfferTypes.MAIN}
                  onOfferCardClick={onOfferCardClick}
                  offers={offers}
                />
              </section>
              : <MainEmpty
                currentCity={currentCity}
              />}
            <div className="cities__right-section">
              {offers.length !== 0 &&
                <Map
                  offers={offers}
                  className={`cities`}
                />
              }
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


MainPage.propTypes = {
  offers: offersProp,
  onOfferCardClick: PropTypes.func.isRequired,
  cities: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  currentCity: PropTypes.string.isRequired,
  onCityClick: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
};


const mapStateToProps = (state) => ({
  sortType: state.sortType,
  offers: state.currentOffers,
  cities: state.citiesList,
  currentCity: state.currentCity,
});

const mapDispatchToProps = (dispatch) => ({
  onCityClick: (city) => {
    dispatch(changeCity(city));
    dispatch(getOffers(city));
  }
});


export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
