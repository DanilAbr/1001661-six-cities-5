import offers from '../mocks/offers';
import {ActionType} from './action';
import {extend} from '../utils/utils';


const citiesList = Array.from(
    new Set([...offers.map((offer) => offer.city)])
);

const initialState = {
  offers,
  currentOffers: offers,
  currentCity: citiesList[0],
  citiesList,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.city
      });
    case ActionType.GET_OFFERS:
      return extend(state, {
        currentOffers: state.offers.filter((offer) => offer.city === action.city)
      });
    default: return state;
  }
};


export {reducer};
