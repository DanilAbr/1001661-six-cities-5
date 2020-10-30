import {ActionType} from '../../action';
import {extend} from '../../../utils/utils';


const initialState = {
  offers: [],
};


const data = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_OFFERS:
      return extend(state, {
        offers: action.payload,
      });

    default: return state;
  }
};


export {data};
