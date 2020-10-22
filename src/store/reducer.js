import offers from '../mocks/offers';
import {ActionType} from './action';
import {extend, sortOffer, getFilteredOffers} from '../utils/utils';


const citiesList = Array.from(new Set([...offers.map((offer) => offer.city)]));
const currentCity = citiesList[0];
const currentOffers = getFilteredOffers(offers, currentCity);


const initialState = {
  offers,
  currentCity,
  currentOffers,
  citiesList,
  sortType: `popular`,
  currentCard: {},
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.city
      });

    case ActionType.GET_FILTERED_OFFERS:
      return extend(state, {
        currentOffers: getFilteredOffers(state.offers, action.city)
      });

    case ActionType.CHANGE_SORT:
      return extend(state, {
        sortType: action.sortType,
      });

    case ActionType.GET_SORTED_OFFERS:
      if (action.sortType === initialState.sortType) {
        return extend(state, {
          currentOffers: getFilteredOffers(state.offers, state.currentCity),
        });
      }

      return extend(state, {
        currentOffers: sortOffer(state.currentOffers, action.sortType)
      });

    case ActionType.SELECT_CARD:
      return extend(state, {
        currentCard: offers.filter((offer) => offer.id === action.offerId)[0]
      });

    default: return state;
  }
};


export {reducer};
