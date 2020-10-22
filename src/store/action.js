const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
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
};


export {ActionType, ActionCreator};
