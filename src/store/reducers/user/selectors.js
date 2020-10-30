import {NameSpace} from '../root-reducer';

const NAME_SPACE = NameSpace.USER;

const getAuthorizationStatus = (state) => state[NAME_SPACE].authorizationStatus;

export {getAuthorizationStatus};
