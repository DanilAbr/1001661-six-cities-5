import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {ActionCreator} from '../../store/action';
import Map from '../../components/map/map';
import Header from '../../components/header/header';
import CitiesList from '../cities-list/cities-list';
import OfferList from '../offer-list/offer-list';
import offersProp from '../offer-list/offers.prop';
import {OfferTypes} from '../../utils/const';


const MainPage = (props) => {
  const {offers, onOfferCardClick, cities, currentCity, onCityClick} = props;

  return (
    <div className="page page--gray page--main">
      <Header />

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
              <form className="places__sorting" action="#" method="get">
                <span className="places__sorting-caption">Sort by</span>
                <span className="places__sorting-type" tabIndex="0">
                  Popular
                  <svg className="places__sorting-arrow" width="7" height="4">
                    <use xlinkHref="#icon-arrow-select"/>
                  </svg>
                </span>
                <ul className="places__options places__options--custom places__options--opened">
                  <li className="places__option places__option--active" tabIndex="0">Popular</li>
                  <li className="places__option" tabIndex="0">Price: low to high</li>
                  <li className="places__option" tabIndex="0">Price: high to low</li>
                  <li className="places__option" tabIndex="0">Top rated first</li>
                </ul>
                {/* <select className="places__sorting-type" id="places-sorting">
                  <option className="places__option" value="popular" selected="">Popular</option>
                  <option className="places__option" value="to-high">Price: low to high</option>
                  <option className="places__option" value="to-low">Price: high to low</option>
                  <option className="places__option" value="top-rated">Top rated first</option>
                </select> */}
              </form>
              <OfferList
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
};


const mapStateToProps = (state) => ({
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
