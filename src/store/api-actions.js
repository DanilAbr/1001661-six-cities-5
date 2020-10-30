import {loadOffers, requireAuthorization} from './action';
import {convertData} from '../adapter/data';
import {AuthorizationStatus} from '../utils/const';


const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then((response) => response.data.map(convertData))
    .then((data) => dispatch(loadOffers(data)))
);

const checkAuth = () => (dispatch, _getState, api) => {
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((err) => {
      throw err;
    });
};


export {
  fetchOffersList,
  checkAuth,
};
