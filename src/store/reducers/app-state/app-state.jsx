import {ActionType} from '../../action';
import {extend} from '../../../utils/utils';
import {CITIES} from '../../../utils/const';


const initialState = {
  currentCity: CITIES[0],
  citiesList: CITIES,
  sortType: `popular`,
  activeOfferId: 0,
};


const appState = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      return extend(state, {
        currentCity: action.city
      });

    case ActionType.CHANGE_SORT:
      return extend(state, {
        sortType: action.sortType,
      });

    case ActionType.SELECT_CARD:
      return extend(state, {
        activeOfferId: action.offerId,
      });

    case ActionType.RESET_CARD:
      return extend(state, {
        activeOfferId: initialState.activeOfferId,
      });

    default: return state;
  }
};


export {appState};
