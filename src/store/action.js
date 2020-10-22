const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
  SORT_OFFERS: `SORT_OFFERS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    city,
  }),
  getOffers: (city) => ({
    type: ActionType.GET_OFFERS,
    city,
  }),
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    sortType
  }),
  sortOffers: (sortType) => ({
    type: ActionType.SORT_OFFERS,
    sortType,
  })
};


export {ActionType, ActionCreator};
