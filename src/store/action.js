const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_FILTERED_OFFERS: `GET_FILTERED_OFFERS`,
  CHANGE_SORT: `CHANGE_SORT`,
  GET_SORTED_OFFERS: `GET_SORTED_OFFERS`,
};

const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    city,
  }),
  getOffers: (city) => ({
    type: ActionType.GET_FILTERED_OFFERS,
    city,
  }),
  changeSort: (sortType) => ({
    type: ActionType.CHANGE_SORT,
    sortType
  }),
  sortOffers: (sortType) => ({
    type: ActionType.GET_SORTED_OFFERS,
    sortType,
  }),
};


export {ActionType, ActionCreator};
