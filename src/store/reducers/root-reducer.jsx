import {combineReducers} from 'redux';
import {data} from './data/data';
import {appState} from './app-state/app-state';


const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
};


export {NameSpace};
export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.STATE]: appState,
});
