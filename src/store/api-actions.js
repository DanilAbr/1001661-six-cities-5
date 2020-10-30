import {loadOffers, requireAuthorization} from './action';
import {convertData} from '../adapter/data';
import {AuthorizationStatus} from '../utils/const';


const fetchOffersList = () => (dispatch, _getState, api) => (
  api.get(`/hotels`)
    .then((response) => response.data.map(convertData))
    .then((data) => dispatch(loadOffers(data)))
);

const checkAuth = () => (dispatch, _getState, api) => (
  api.get(`/login`)
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .catch((_err) => {
      // throw err;
      return false;
    })
);

const login = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
);


export {
  fetchOffersList,
  checkAuth,
  login
};
