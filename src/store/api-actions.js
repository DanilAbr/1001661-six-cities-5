import {loadOffers} from './action';
import {convertData} from '../adapter/data';


const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then((response) => response.data.map(convertData))
    .then((data) => dispatch(loadOffers(data)))
);


export {fetchOffersList};
