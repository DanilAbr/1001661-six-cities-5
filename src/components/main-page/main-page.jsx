import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {OfferTypes} from '../../utils/const';
import {ActionCreator} from '../../store/action';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import CitiesList from '../cities-list/cities-list';
import OfferList from '../offer-list/offer-list';
import Sort from '../sort/sort';
import offersProp from '../offer-list/offers.prop';


const MainPage = (props) => {
  const {offers, onOfferCardClick, cities, currentCity, onCityClick, sortType} = props;

  return (
    <div className="page page--gray page--main">
      <Header type={OfferTypes.MAIN} />

      <main className="page__main page__main--index">
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
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">
                {offers.length} places to stay in {currentCity}
              </b>
              <Sort />
              <OfferList
                sortType={sortType}
                type={OfferTypes.MAIN}
                onOfferCardClick={onOfferCardClick}
                offers={offers}
              />
            </section>
            <div className="cities__right-section">
              <Map
                offers={offers}
                className={`cities`}
              />
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
    dispatch(ActionCreator.changeCity(city));
    dispatch(ActionCreator.getOffers(city));
  }});


export {MainPage};
export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
