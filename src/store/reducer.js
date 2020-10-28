import offers from '../mocks/offers';
import {ActionType} from './action';
import {extend} from '../utils/utils';
import {CITIES, SortTypeEnum} from '../utils/const';


const citiesList = CITIES;
const currentCity = citiesList[0];
const currentOffers = offers.filter((offer) => offer.city === currentCity);


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
        currentOffers: state.offers.filter((offer) =>
          offer.city === action.city
        )});

    case ActionType.CHANGE_SORT:
      return extend(state, {
        sortType: action.sortType,
      });

    case ActionType.GET_SORTED_OFFERS:
      if (action.sortType === initialState.sortType) {
        return extend(state, {
          currentOffers: state.offers.filter((offer) =>
            offer.city === state.currentCity
          )});
      }

      return extend(state, {
        currentOffers: SortTypeEnum[action.sortType](state.currentOffers)
      });

    case ActionType.SELECT_CARD:
      return extend(state, {
        currentCard: offers.filter((offer) => offer.id === action.offerId)[0]
      });

    case ActionType.RESET_CARD:
      return extend(state, {
        currentCard: {}
      });

    default: return state;
  }
};


export {reducer};
