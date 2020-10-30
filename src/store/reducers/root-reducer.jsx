import {combineReducers} from 'redux';
import {data} from './data/data';
import {appState} from './app-state/app-state';
import {user} from './user/user';


const NameSpace = {
  DATA: `DATA`,
  STATE: `STATE`,
  USER: `USER`,
};


export {NameSpace};
export default combineReducers({
  [NameSpace.DATA]: data,
  [NameSpace.STATE]: appState,
  [NameSpace.USER]: user,
});
