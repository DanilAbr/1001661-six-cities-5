const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_FILTERED_OFFERS: `GET_FILTERED_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
  GET_SORTED_OFFERS: `GET_SORTED_OFFERS`,
  SELECT_CARD: `SELECT_CARD`,
  RESET_CARD: `RESET_CARD`,
  LOAD_OFFERS: `LOAD_OFFERS`,
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  REDIRECT_TO_ROUTE: `REDIRECT_TO_ROUTE`,
};


const changeCity = (city) => ({
  type: ActionType.CHANGE_CITY,
  city,
});

const getOffersAction = (city) => ({
  type: ActionType.GET_FILTERED_OFFERS,
  city,
});

const changeSort = (sortType) => ({
  type: ActionType.CHANGE_SORT,
  sortType
});

const sortOffers = (sortType) => ({
  type: ActionType.GET_SORTED_OFFERS,
  sortType,
});

const selectCard = (offerId) => ({
  type: ActionType.SELECT_CARD,
  offerId,
});

const resetCard = () => ({
  type: ActionType.RESET_CARD,
});

const loadOffers = (offers) => ({
  type: ActionType.LOAD_OFFERS,
  payload: offers,
});

const requireAuthorization = (status) => ({
  type: ActionType.REQUIRED_AUTHORIZATION,
  payload: status,
});

const redirectToRoute = (url) => ({
  type: ActionType.REDIRECT_TO_ROUTE,
  payload: url,
});


export {
  ActionType,
  changeCity,
  changeSort,
  sortOffers,
  selectCard,
  resetCard,
  loadOffers,
  getOffersAction,
  requireAuthorization,
  redirectToRoute,
};
