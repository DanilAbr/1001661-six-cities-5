import {AuthorizationStatus} from '../../../utils/const';
import {extend} from '../../../utils/utils';
import {ActionType} from '../../action';


const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
};


const user = (state = initialState, action) => {
  switch (action.type) {

    case ActionType.REQUIRED_AUTHORIZATION:
      return extend(state, {
        authorizationStatus: action.payload,
      });

    default: return state;
  }
};


export {user};


