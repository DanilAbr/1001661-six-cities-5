import {combineReducers} from 'redux';
import {dataReducer} from './data-reducer';
import {stateReducer} from './state-reducer';


const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
};


export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.STATE]: stateReducer,
});
