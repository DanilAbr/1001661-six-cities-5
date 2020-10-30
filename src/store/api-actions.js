import {loadOffers, redirectToRoute, requireAuthorization} from './action';
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

const loginAction = ({login: email, password}) => (dispatch, _getState, api) => (
  api.post(`/login`, {email, password})
    .then(() => dispatch(requireAuthorization(AuthorizationStatus.AUTH)))
    .then(() => dispatch(redirectToRoute(`/`)))
);


export {
  fetchOffersList,
  checkAuth,
  loginAction
};
