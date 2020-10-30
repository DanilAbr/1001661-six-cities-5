import {NameSpace} from '../root-reducer';

const getOffers = (state) => state[NameSpace.DATA].offers;

export {getOffers};
