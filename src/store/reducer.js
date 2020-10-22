import offers from '../mocks/offers';
import {ActionType} from './action';
import {extend, sortOffer, getFilteredOffers} from '../utils/utils';


const citiesList = Array.from(
    new Set([...offers.map((offer) => offer.city)])
);


const initialState = {
  offers,
  currentCity: citiesList[0],
  currentOffers: getFilteredOffers(offers, citiesList[0]),
  citiesList,
  sortType: `popular`,
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.city
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        currentOffers: getFilteredOffers(state.offers, action.city)
      });
    case ActionType.CHANGE_SORT:
      return extend(state, {
        sortType: action.sortType,
      });
    case ActionType.SORT_OFFERS:
      return extend(state, {
        currentOffers: sortOffer(initialState.currentOffers, action.sortType)
      });
    default: return state;
  }
};


export {reducer};
